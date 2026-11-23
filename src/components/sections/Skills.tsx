import { Section } from "@/components/ui/Section";
import { profile } from "@/content/profile";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Capabilities" title="A practical technology stack">
      <div className="grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
        {profile.skills.map((group, index) => (
          <div key={group.label} className="min-h-44 border-b border-r border-line p-6 transition-colors duration-300 hover:bg-accent/[0.025] md:p-7">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold tracking-[0.08em] text-fg uppercase">{group.label}</h3>
              <span className="text-[9px] tracking-[0.18em] text-accent/70">SYS-{String(index + 1).padStart(2, "0")}</span>
            </div>
            <ul className="mt-5 grid gap-2 text-sm leading-5 text-muted">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="size-1 rounded-full bg-accent/70" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
