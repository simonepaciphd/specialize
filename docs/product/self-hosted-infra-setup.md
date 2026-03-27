# Self-Hosted Infrastructure: GCP VM + Open-Weight Model

**Goal:** Run the entire stack — code generation, agent work, and product serving — on your own infrastructure with no data leaving your control.

## Recommended model

**DeepSeek-R1 671B** (or distilled 70B) or **Llama 3.1 405B** — best open-weight options for code generation and complex reasoning as of early 2026.

For practical single-VM use: **Qwen 2.5 Coder 32B** or **DeepSeek-Coder-V2 236B** (quantized) give strong code output at lower VRAM cost.

## GCP VM setup

### Option A: Maximum capability (405B / 671B class)

| Setting | Value |
|---------|-------|
| Machine type | `a2-ultragpu-8g` (8x A100 80GB) or `a3-highgpu-8g` (8x H100 80GB) |
| GPU VRAM | 640 GB total |
| System RAM | 680+ GB |
| Boot disk | 200 GB SSD |
| Data disk | 500 GB SSD (model weights + workspace) |
| OS | Ubuntu 22.04 LTS (Deep Learning VM image) |
| Region | `us-central1` or nearest with GPU availability |
| Estimated cost | ~$30-40/hr (A100) or ~$50-70/hr (H100) |

### Option B: Strong and practical (32B-72B class)

| Setting | Value |
|---------|-------|
| Machine type | `g2-standard-48` (1x L4) or `a2-highgpu-1g` (1x A100 80GB) |
| GPU VRAM | 24-80 GB |
| System RAM | 48-170 GB |
| Boot disk | 200 GB SSD |
| Data disk | 200 GB SSD |
| OS | Ubuntu 22.04 LTS (Deep Learning VM image) |
| Region | `us-central1` |
| Estimated cost | ~$2-5/hr (L4) or ~$4-8/hr (A100) |

**Recommendation:** Start with Option B (single A100 + Qwen 2.5 Coder 32B or DeepSeek-R1 distilled 70B quantized). Scale to Option A only if output quality is insufficient.

## Bootstrap script

```bash
#!/bin/bash
# Run on fresh GCP Deep Learning VM (Ubuntu 22.04)

# === 1. System basics ===
sudo apt update && sudo apt install -y git curl tmux htop nvtop

# === 2. Install model serving: vLLM ===
pip install vllm

# === 3. Download model weights ===
# Option: Qwen 2.5 Coder 32B Instruct (fits single A100, strong code output)
# Uses huggingface-cli — no account needed for most open-weight models
pip install huggingface_hub
huggingface-cli download Qwen/Qwen2.5-Coder-32B-Instruct --local-dir /data/models/qwen-coder-32b

# Alt: DeepSeek-R1 distilled 70B (GGUF quantized for lower VRAM)
# huggingface-cli download deepseek-ai/DeepSeek-R1-Distill-Llama-70B --local-dir /data/models/deepseek-r1-70b

# === 4. Launch model server ===
# OpenAI-compatible API on port 8000
vllm serve /data/models/qwen-coder-32b \
  --host 0.0.0.0 \
  --port 8000 \
  --tensor-parallel-size 1 \
  --max-model-len 32768 \
  --gpu-memory-utilization 0.92

# === 5. Install Node.js for website dev ===
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# === 6. Install open-source coding agent ===
# Option A: aider (works with any OpenAI-compatible API)
pip install aider-chat

# Option B: continue.dev or similar IDE agent
# (connect VS Code Remote SSH to this VM)
```

## How to use it

### As a code-generation chat agent

```bash
# aider connects to local vLLM and works like a coding agent
cd /data/workspace/self-specialize-website
aider --openai-api-base http://localhost:8000/v1 \
      --openai-api-key dummy \
      --model openai/Qwen2.5-Coder-32B-Instruct
```

Then paste the website-building prompt from `content-startup-md/` into aider. It will generate files directly in your workspace.

### As an OpenAI-compatible API (for any tool)

```bash
curl http://localhost:8000/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model": "Qwen2.5-Coder-32B-Instruct",
    "messages": [{"role": "user", "content": "Your prompt here"}],
    "max_tokens": 16384,
    "temperature": 0.3
  }'
```

Any tool that speaks OpenAI API format (aider, open-webui, continue.dev, LangChain, etc.) can point at `http://localhost:8000/v1`.

### As a web UI (for non-CLI use)

```bash
# Open WebUI — ChatGPT-like interface for local models
docker run -d -p 3000:8080 \
  -e OPENAI_API_BASE_URL=http://host.docker.internal:8000/v1 \
  -e OPENAI_API_KEY=dummy \
  --add-host=host.docker.internal:host-gateway \
  ghcr.io/open-webui/open-webui:main
```

Then access `http://VM_IP:3000` in your browser.

## Security configuration

### Network: no public exposure of model API

```bash
# Firewall: only allow SSH and your IP
gcloud compute firewall-rules create allow-ssh-myip \
  --allow tcp:22 --source-ranges YOUR_IP/32

gcloud compute firewall-rules create allow-webui-myip \
  --allow tcp:3000 --source-ranges YOUR_IP/32

# Block everything else
gcloud compute firewall-rules create deny-all-ingress \
  --action DENY --rules all --priority 1000
```

### Disk: encrypt at rest
GCP encrypts all disks by default. For extra control, use Customer-Managed Encryption Keys (CMEK):
```bash
gcloud compute disks create model-disk \
  --size=500GB --type=pd-ssd \
  --kms-key=projects/PROJECT/locations/REGION/keyRings/RING/cryptoKeys/KEY
```

### Access: SSH only, no API keys leaving the VM
- All model inference happens on-VM
- No API calls to external LLM providers
- No telemetry (vLLM has no phoning home)
- Website build artifacts are local until you choose to deploy

## Cost optimization

| Strategy | Savings |
|----------|---------|
| Use preemptible/spot VMs | 60-70% off |
| Spin up only when working, shut down otherwise | Pay only for active hours |
| Start with 32B model, escalate to 70B+ only if needed | 4x cheaper GPU |
| Use quantized weights (GPTQ/AWQ) | Fit larger models on smaller GPUs |

For a 4-hour coding session on spot A100: ~$12-20 total.

## Workflow

1. `gcloud compute instances start my-agent-vm`
2. SSH in, start vLLM in tmux
3. Run aider or open-webui, paste your prompt
4. Agent generates website files locally on VM
5. Review, iterate, zip and download
6. `gcloud compute instances stop my-agent-vm`

All product data, prompts, and generated code stay on your VM. Nothing touches a third-party API.
