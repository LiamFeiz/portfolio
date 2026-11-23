import { Container } from "@/components/ui/Container";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
};

export function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-20 border-b border-line py-24 md:py-32">
      <Container>
        <header className="mb-14 grid gap-5 md:grid-cols-[120px_1fr] md:items-start">
          <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.24em] text-accent uppercase">
            <span className="h-px w-8 bg-accent" />
            {eyebrow}
          </p>
          <h2 className="text-4xl font-semibold leading-none tracking-[-0.055em] text-fg md:text-6xl">
            {title}
          </h2>
        </header>
        {children}
      </Container>
    </section>
  );
}
