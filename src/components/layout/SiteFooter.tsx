import { Container } from "@/components/ui/Container";
import { profile } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer className="py-8">
      <Container>
        <div className="flex flex-col gap-4 text-[11px] tracking-[0.12em] text-muted uppercase md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <p className="flex items-center gap-3"><span className="size-1.5 rounded-full bg-accent" />{profile.location}</p>
          <a href="#top" className="transition-colors hover:text-accent">Return to origin ↑</a>
        </div>
      </Container>
    </footer>
  );
}
