import { Container } from "@/components/ui/Container";
import { profile } from "@/content/profile";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-[#07111f]/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between gap-4">
          <a
            href="#top"
            className="header-hover group flex shrink-0 items-center gap-3 text-sm font-semibold tracking-tight text-fg"
            aria-label="Back to top"
          >
            <span className="tech-pulse relative flex size-10 items-center justify-center overflow-hidden border border-accent/40 bg-accent/[0.07] text-xs font-bold text-accent transition-all duration-500 group-hover:-translate-y-0.5 group-hover:border-accent group-hover:bg-accent group-hover:text-[#07111f] group-hover:shadow-[0_0_30px_rgba(102,216,255,.24)]">
              <span className="absolute inset-0 translate-x-[-140%] skew-x-[-18deg] bg-white/35 transition-transform duration-700 group-hover:translate-x-[140%]" />
              <span className="header-hover__label relative">LF</span>
            </span>
            <span className="header-hover__label relative hidden lg:inline">
              {profile.name}
            </span>
          </a>

          <nav
            className="flex min-w-0 items-center justify-end gap-1 overflow-x-auto scrollbar-none"
            aria-label="Primary"
          >
            {profile.nav.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative flex shrink-0 items-center gap-2 overflow-hidden px-2 py-3 text-xs font-medium tracking-[0.08em] text-muted uppercase transition-colors duration-300 hover:text-fg md:px-4"
              >
                <span className="absolute bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-accent transition-all duration-300 group-hover:w-[calc(100%-1rem)]" />
                <span className="hidden text-[9px] text-accent/70 transition-transform duration-300 group-hover:-translate-y-0.5 sm:inline">
                  0{index + 1}
                </span>
                <span className="transition-transform duration-300 group-hover:-translate-y-0.5">
                  {item.label}
                </span>
              </a>
            ))}
          </nav>

          <a
            href={`mailto:${profile.email}`}
            className="header-hover group relative inline-flex shrink-0 items-center gap-2 overflow-hidden border border-accent/40 px-3 py-2.5 text-xs font-semibold text-accent transition-all duration-300 hover:border-accent hover:text-[#07111f] hover:shadow-[0_10px_30px_rgba(102,216,255,.16)] md:px-4"
          >
            <span className="absolute inset-0 translate-y-full bg-accent transition-transform duration-300 ease-out group-hover:translate-y-0" />
            <span className="header-hover__label relative hidden sm:inline">Email</span>
            <span
              aria-hidden="true"
              className="header-hover__label relative"
            >
              ↗
            </span>
          </a>
        </div>
      </Container>
    </header>
  );
}
