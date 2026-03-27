import { Reveal } from '@/components/Reveal';

const metrics = [
  'Token efficiency',
  'Intervention burden',
  'Time to useful output',
  'User-defined KPIs',
];

export function Efficiency() {
  return (
    <section id="efficiency">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <Reveal>
            <span className="section-kicker">Efficiency</span>
            <h2 className="section-title">Reduce your AI consumption without reducing the quality of your work.</h2>
            <p className="section-lead">
              The goal is not only to make agents better. It is to make them cheaper, leaner, and easier to steer under a standard you can inspect.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {metrics.map((metric) => (
                <div key={metric} className="rounded-3xl border border-line px-5 py-5 text-sm font-medium text-ink">
                  {metric}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="card overflow-hidden">
              <div className="border-b border-line bg-surface px-6 py-5">
                <h3 className="text-xl font-semibold tracking-tight text-ink">Verified value, not a pricing guess</h3>
              </div>
              <div className="space-y-6 px-6 py-6 text-sm leading-7 text-muted">
                <p>
                  Labs measures quality-constrained savings. The baseline and the optimized workflow are compared under the same target standard, so cheaper only counts when it still clears the bar.
                </p>
                <div className="rounded-3xl border border-line bg-white p-5 text-ink">
                  <p className="font-medium text-muted">Savings logic</p>
                  <div className="mt-4 space-y-3">
                    <div className="rounded-2xl border border-line px-4 py-3">
                      Verified Savings = Baseline Cost − Optimized Cost
                    </div>
                    <div className="rounded-2xl border border-line px-4 py-3">
                      Distributable Savings = Verified Savings − Agent Cost
                    </div>
                    <div className="rounded-2xl border border-line px-4 py-3">
                      Company Fee = Distributable Savings × Share Rate
                    </div>
                  </div>
                </div>
                <p>
                  A KPI discovery agent proposes observable metrics for what better means in your setting, then tracks whether specialization improves those outcomes with less waste.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
