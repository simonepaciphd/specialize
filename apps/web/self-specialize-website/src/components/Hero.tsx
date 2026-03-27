import { Reveal } from '@/components/Reveal';

const navItems = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Product layers', href: '#product-layers' },
  { label: 'Efficiency', href: '#efficiency' },
  { label: 'Trust', href: '#trust' },
];

const proofPoints = [
  'Portable instruction layers and skill files',
  'Exports for agent-native environments',
  'Measured gains in quality, speed, and cost',
];

export function Hero() {
  return (
    <section id="top" className="border-b border-line bg-surface">
      <div className="section-shell pb-16 pt-8 md:pb-24 md:pt-10">
        <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <a href="#top" className="text-sm font-semibold tracking-tight text-ink">
            Self-Specialize Your Agents
          </a>
          <nav aria-label="Primary" className="flex flex-wrap items-center gap-5 text-sm text-muted">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        <div className="mt-20 grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <Reveal>
            <div>
              <span className="eyebrow-pill">Private self-specialization for serious users</span>
              <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-ink md:text-7xl">
                Train your agents on you.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted md:text-xl">
                Self-Specialize Your Agents turns scattered projects, habits, and prior agent work into portable context packages that travel across tools and improve alignment with less repetition.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="#waitlist" className="button-primary">
                  Get early access
                </a>
                <a href="#how-it-works" className="button-secondary">
                  See how it works
                </a>
              </div>
              <ul className="mt-10 grid gap-3 text-sm text-muted sm:grid-cols-3 sm:gap-4">
                {proofPoints.map((item) => (
                  <li key={item} className="rounded-2xl border border-line bg-white px-4 py-4 leading-6">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div className="card overflow-hidden">
              <div className="border-b border-line px-6 py-5">
                <p className="text-sm font-medium text-muted">Portable context package</p>
              </div>
              <div className="space-y-6 px-6 py-6">
                <div className="rounded-2xl border border-line bg-surface p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Distilled artifacts</p>
                  <div className="mt-4 space-y-3 text-sm text-ink">
                    <div className="flex items-center justify-between rounded-2xl border border-line bg-white px-4 py-3">
                      <span>AGENTS.md</span>
                      <span className="text-muted">Portable export</span>
                    </div>
                    <div className="flex items-center justify-between rounded-2xl border border-line bg-white px-4 py-3">
                      <span>Project map</span>
                      <span className="text-muted">Current logic</span>
                    </div>
                    <div className="flex items-center justify-between rounded-2xl border border-line bg-white px-4 py-3">
                      <span>Workflow spec</span>
                      <span className="text-muted">Repeatable steps</span>
                    </div>
                    <div className="flex items-center justify-between rounded-2xl border border-line bg-white px-4 py-3">
                      <span>Memory summary</span>
                      <span className="text-muted">Useful defaults</span>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-line p-5">
                    <p className="text-sm font-medium text-ink">Core thesis</p>
                    <p className="mt-3 text-sm leading-6 text-muted">
                      Most agent failures are context-structure failures. Better scaffolds beat noisier prompts.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-line p-5">
                    <p className="text-sm font-medium text-ink">Current focus</p>
                    <p className="mt-3 text-sm leading-6 text-muted">
                      Ingestion, artifact extraction, review, export, and measurable improvement across environments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
