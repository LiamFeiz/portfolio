import { Container } from "@/components/ui/Container";
import { profile } from "@/content/profile";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[calc(100vh-5rem)] overflow-hidden border-b border-line"
    >
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(7,17,31,0.18),rgba(7,17,31,0.92)_78%)]" />
      <Container>
        <div className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center py-12 md:py-8">
          <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center py-8 text-center md:py-12">
            <h1
              className="hero-name flex items-baseline justify-center whitespace-nowrap text-[clamp(3.6rem,8vw,7.2rem)] font-semibold leading-none tracking-[-0.075em] text-fg"
              aria-label="Liam Feiz"
            >
              <span className="name-line" data-text="Liam">Liam</span>
              <span className="name-line ml-[0.14em] text-accent" data-text="Feiz.">Feiz.</span>
            </h1>
            <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-muted md:text-xl">
              {profile.role}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-3 rounded-full border border-accent/50 bg-accent px-5 py-3 text-sm font-bold text-[#06101d] transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-bright"
              >
                Explore work
                <span
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-3 rounded-full border border-line bg-white/[0.025] px-5 py-3 text-sm font-semibold text-fg transition-all duration-300 hover:border-accent/50 hover:text-accent"
              >
                Start a conversation
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <dl className="mx-auto mt-14 grid w-full max-w-xl grid-cols-3 border-y border-line">
              {[
                ["05+", "Years building"],
                ["03", "Core platforms"],
                ["04.0", "CS GPA"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="border-r border-line px-4 py-5 first:pl-0 last:border-r-0 md:px-6"
                >
                  <dt className="text-[10px] tracking-[0.18em] text-muted uppercase">
                    {label}
                  </dt>
                  <dd className="mt-1 text-2xl font-semibold tracking-tight text-fg">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>

      <a
        href="#work"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-3 text-[10px] font-semibold tracking-[0.22em] text-muted uppercase md:flex"
      >
        Scroll
        <span className="h-8 w-px animate-pulse bg-accent/60" />
      </a>
    </section>
  );
}
