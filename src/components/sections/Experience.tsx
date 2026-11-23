import { Section } from "@/components/ui/Section";
import { profile } from "@/content/profile";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Career" title="Experience with impact">
      <ol className="border-t border-line">
        {profile.experience.map((role, index) => (
          <li key={role.id} className="group grid gap-6 border-b border-line py-8 transition-colors hover:bg-white/[0.012] md:grid-cols-[170px_260px_1fr] md:py-10">
            <div className="text-[10px] font-semibold tracking-[0.18em] text-accent/80 uppercase">
              0{index + 1} / {role.start} — {role.end}
            </div>
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-fg">{role.title}</h3>
              <p className="mt-2 text-sm text-accent">{role.company}</p>
              <p className="mt-2 text-xs leading-5 text-muted">{role.location}</p>
            </div>
            <div>
              <ul className="space-y-2 text-sm leading-6 text-muted">
                {role.highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 size-1 shrink-0 bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                {role.technologies.map((tech) => (
                  <li key={tech} className="text-[10px] tracking-[0.12em] text-muted uppercase">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
