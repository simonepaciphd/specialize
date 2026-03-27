import { Reveal } from '@/components/Reveal';

const problems = [
  {
    title: 'Agents relearn you every session',
    body: 'Preferences, project logic, and operating assumptions keep getting rebuilt from scratch, which inflates cost and drifts quality.',
  },
  {
    title: 'Context is fragmented across tools',
    body: 'Important instructions live in docs, prompts, notebooks, chats, and half-remembered conventions that do not travel cleanly.',
  },
  {
    title: 'Good users build hidden systems manually',
    body: 'The strongest workflows already exist as personal hacks: folder structures, conventions, snippets, ritualized prompts, and memory scaffolds.',
  },
  {
    title: 'Collective improvement lacks governance',
    body: 'There is no default way to learn systematically from what works while preserving privacy, consent, auditability, and control.',
  },
];

export function WhyThisMatters() {
  return (
    <section id="why-this-matters" className="border-y border-line bg-surface">
      <div className="section-shell">
        <Reveal>
          <span className="section-kicker">Why this matters</span>
          <h2 className="section-title">The current agent workflow wastes structure.</h2>
          <p className="section-lead">
            Most advanced users are already doing the work manually. The missing product is the one that extracts those hidden systems, makes them portable, and proves that they help.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {problems.map((problem) => (
            <Reveal key={problem.title}>
              <article className="card h-full p-6 md:p-7">
                <h3 className="text-xl font-semibold tracking-tight text-ink">{problem.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{problem.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
