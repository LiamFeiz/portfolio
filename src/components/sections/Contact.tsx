import { Section } from "@/components/ui/Section";
import { profile } from "@/content/profile";

export function Contact() {
  return (
    <Section id="contact" eyebrow="Initiate" title="Let’s build what’s next">
      <div className="grid items-end gap-10 md:grid-cols-[1fr_420px]">
        <div>
          <p className="max-w-xl text-lg leading-8 text-muted">
            Open to full-stack, AI product, and e-commerce opportunities. Tell me what you’re shaping, and I’ll help find the clearest path to a working solution.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="group mt-8 inline-flex items-center gap-5 border-b border-accent/60 pb-3 text-xl font-semibold tracking-tight text-fg transition-colors hover:text-accent md:text-3xl"
          >
            {profile.email}
            <span className="text-accent transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
          </a>
        </div>
        <dl className="border-t border-line">
          <div className="flex justify-between border-b border-line py-4 text-sm">
            <dt className="text-[10px] tracking-[0.18em] text-muted uppercase">Phone</dt>
            <dd><a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="hover:text-accent">{profile.phone}</a></dd>
          </div>
          <div className="flex justify-between border-b border-line py-4 text-sm">
            <dt className="text-[10px] tracking-[0.18em] text-muted uppercase">Based</dt>
            <dd className="text-muted">{profile.location}</dd>
          </div>
          <div className="flex justify-between border-b border-line py-4 text-sm">
            <dt className="text-[10px] tracking-[0.18em] text-muted uppercase">Status</dt>
            <dd className="flex items-center gap-2 text-accent"><span className="size-1.5 rounded-full bg-accent shadow-[0_0_12px_rgba(102,216,255,0.8)]" />Available</dd>
          </div>
        </dl>
      </div>
    </Section>
  );
}
