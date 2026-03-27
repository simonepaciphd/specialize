import { Reveal } from '@/components/Reveal';

const layers = [
  {
    name: 'Private self-specialization',
    status: 'Building now',
    summary:
      'User-owned scanning, artifact extraction, review, and export for portable, agent-native context packages.',
    bullets: ['Instruction layers', 'Skill files', 'Project maps', 'Workflow specs', 'Memory summaries'],
  },
  {
    name: 'Labs',
    status: 'Next phase',
    summary:
      'Opt-in experimentation to compare context architectures, benchmark intervention burden, and identify what reduces waste without harming output quality.',
    bullets: ['Context experiments', 'Efficiency instrumentation', 'Savings benchmarking', 'KPI discovery'],
  },
  {
    name: 'Cooperative / governance',
    status: 'Future',
    summary:
      'Explicitly consent-based member governance for research participation, pooled learning, licensing votes, and economic participation.',
    bullets: ['Second opt-in', 'Voting rights', 'Inspectability', 'Member control'],
  },
];

export function ProductLayers() {
  return (
    <section id="product-layers" className="border-y border-line bg-surface">
      <div className="section-shell">
        <Reveal>
          <span className="section-kicker">Product layers</span>
          <h2 className="section-title">A product with a clear sequence, not a vague roadmap.</h2>
          <p className="section-lead">
            The private layer is the core product. Labs is the strategic instrumentation layer. Cooperative governance only arrives through explicit opt-in and member control.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {layers.map((layer, index) => (
            <Reveal key={layer.name}>
              <article className="card flex h-full flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">Layer {index + 1}</p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink">{layer.name}</h3>
                  </div>
                  <span className="rounded-full border border-accent/20 bg-accentSoft px-3 py-1 text-xs font-medium text-accent">
                    {layer.status}
                  </span>
                </div>
                <p className="mt-5 text-sm leading-7 text-muted">{layer.summary}</p>
                <ul className="mt-8 space-y-3 text-sm leading-6 text-ink">
                  {layer.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 rounded-2xl border border-line bg-white px-4 py-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
