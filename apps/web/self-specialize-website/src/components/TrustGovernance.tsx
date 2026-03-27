import { Reveal } from '@/components/Reveal';

const principles = [
  'Private by default',
  'Labs requires separate opt-in',
  'Cooperative participation requires explicit second opt-in',
  'Member control and inspectability are part of the design',
  'Savings claims are auditable',
];

export function TrustGovernance() {
  return (
    <section id="trust">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <Reveal>
            <span className="section-kicker">Trust and governance</span>
            <h2 className="section-title">The system should be legible before it is powerful.</h2>
            <p className="section-lead">
              The product is designed around explicit consent boundaries. Private specialization stays private. Experimentation is opt-in. Cooperative pooling is a separate, higher bar.
            </p>
          </Reveal>

          <Reveal>
            <div className="card p-6 md:p-8">
              <div className="grid gap-4">
                {principles.map((principle) => (
                  <div key={principle} className="flex items-start gap-4 rounded-2xl border border-line bg-white px-5 py-4">
                    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-accentSoft text-xs font-semibold text-accent">
                      ✓
                    </div>
                    <p className="text-sm leading-7 text-ink">{principle}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
