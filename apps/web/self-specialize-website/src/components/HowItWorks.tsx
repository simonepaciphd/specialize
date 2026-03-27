import { Reveal } from '@/components/Reveal';

const steps = [
  {
    number: '01',
    title: 'Connect your projects and context',
    body: 'Bring in the material that already shapes your work: active projects, prior prompts, workflow habits, reference files, and agent traces.',
  },
  {
    number: '02',
    title: 'Distill a portable context package',
    body: 'The system extracts durable artifacts such as skill files, memory layers, project maps, and workflow specifications for human review.',
  },
  {
    number: '03',
    title: 'Export to any agent environment',
    body: 'Move the resulting package into the tools you already use, including agent-native formats like AGENTS.md and related instruction layers.',
  },
  {
    number: '04',
    title: 'Improve agents measurably',
    body: 'Track whether agents become more aligned, less repetitive, faster to useful output, and cheaper to run under quality constraints.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works">
      <div className="section-shell">
        <Reveal>
          <span className="section-kicker">How it works</span>
          <h2 className="section-title">A tighter operating layer between you and your agents.</h2>
          <p className="section-lead">
            The point is not to store more context. The point is to structure the right context once, reuse it everywhere, and verify that it improves results.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <Reveal key={step.number}>
              <article className="card h-full p-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium uppercase tracking-[0.18em] text-accent">{step.number}</span>
                  <span className="h-10 w-10 rounded-full border border-line bg-surface" aria-hidden="true" />
                </div>
                <h3 className="mt-10 text-xl font-semibold tracking-tight text-ink">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{step.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
