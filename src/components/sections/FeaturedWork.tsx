import { Section } from "@/components/ui/Section";
import { profile } from "@/content/profile";

export function FeaturedWork() {
  return (
    <Section id="work" eyebrow="Selected work" title="Products built to perform">
      <div className="grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
        {profile.featuredWork.map((item, index) => (
          <article
            key={item.id}
            className="group relative flex min-h-[390px] flex-col overflow-hidden bg-[#091522] p-7 transition-colors duration-500 hover:bg-[#0d1c2b] md:p-8"
          >
            <div className="absolute right-0 top-0 h-32 w-32 bg-[radial-gradient(circle_at_top_right,rgba(102,216,255,0.16),transparent_70%)] opacity-60 transition-opacity group-hover:opacity-100" />
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-semibold tracking-[0.22em] text-accent uppercase">
                Project / {String(index + 1).padStart(2, "0")}
              </p>
              <span className="flex size-9 items-center justify-center border border-line text-xs text-muted transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-[#07111f]">↗</span>
            </div>

            <div className="mt-auto">
              <h3 className="max-w-[12ch] text-3xl font-semibold leading-tight tracking-[-0.045em] text-fg">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-muted">
                {item.summary}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <li key={tag} className="border-l border-accent/50 pl-2 text-[10px] font-medium tracking-[0.12em] text-muted uppercase">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
