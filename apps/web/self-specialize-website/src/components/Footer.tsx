import { Reveal } from '@/components/Reveal';

export function Footer() {
  return (
    <footer id="waitlist" className="border-t border-line bg-surface">
      <div className="section-shell py-16 md:py-20">
        <Reveal>
          <div className="card overflow-hidden">
            <div className="grid gap-10 px-6 py-8 md:grid-cols-[1fr_auto] md:items-end md:px-8 md:py-10">
              <div>
                <span className="section-kicker">Early access</span>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                  Your portable agent operating system.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
                  Private self-specialization first. Measured efficiency next. Cooperative governance only by explicit consent.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
                <a href="https://forms.gle/3bijawiAzZZwp8Dz9" target="_blank" rel="noopener noreferrer" className="button-primary">
                  Get early access
                </a>
                <a href="#" className="button-secondary">
                  GitHub
                </a>
              </div>
            </div>
            <div className="border-t border-line px-6 py-5 text-sm text-muted md:px-8">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <p>Self-Specialize Your Agents</p>
                <p>Portable context packages for agent-native work.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
