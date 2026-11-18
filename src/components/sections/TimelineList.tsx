import { ExperienceItem } from "@/types";

const BORDER_MAP: Record<string, string> = {
  green: "border-l-cyber-green",
  cyan: "border-l-cyber-cyan",
  amber: "border-l-cyber-amber",
};

export default function TimelineList({ items }: { items: ExperienceItem[] }) {
  return (
    <div className="space-y-5">
      {(items ?? []).map((item) => {
        const borderClass = item.borderColor
          ? (BORDER_MAP[item.borderColor] ?? "border-l-cyber-cyan")
          : "border-l-cyber-cyan";

        return (
          <div
            key={item.id}
            className={`rounded-xl border border-white/5 border-l-4 ${borderClass} bg-cyber-card/60 p-6 transition hover:bg-cyber-card/90`}
          >
            {/* Header Responsif: Tidak pernah bertabrakan atau meluber */}
            <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-bold leading-snug text-white sm:text-xl">
                  {item.role}
                </h3>
                {item.subtitle && (
                  <p className="mt-0.5 text-sm font-normal text-cyber-muted">
                    {item.subtitle}
                  </p>
                )}
              </div>

              <span className="inline-block w-fit shrink-0 rounded-md border border-cyber-green/20 bg-cyber-green/10 px-2.5 py-1 font-mono text-xs text-cyber-green">
                {item.organization} · {item.period}
              </span>
            </div>

            {Array.isArray(item.bullets) && item.bullets.length > 0 && (
              <ul className="mt-3 space-y-2">
                {item.bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="relative pl-5 text-sm leading-relaxed text-cyber-muted before:absolute before:left-0 before:text-cyber-cyan before:content-['▹']"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            )}

            {Array.isArray(item.groups) && item.groups.length > 0 && (
              <div className="mt-4 space-y-5">
                {item.groups.map((group: any, gIdx: number) => {
                  const groupBullets: string[] = Array.isArray(group?.bullets)
                    ? group.bullets
                    : Array.isArray(group?.items)
                      ? group.items
                      : [];

                  return (
                    <div key={gIdx}>
                      {group?.title && (
                        <h4
                          className={`mb-2 text-sm font-semibold ${
                            group.color === "cyan"
                              ? "text-cyber-cyan"
                              : "text-cyber-green"
                          }`}
                        >
                          {group.title}
                        </h4>
                      )}
                      {groupBullets.length > 0 && (
                        <ul className="space-y-2">
                          {groupBullets.map((bullet, bIdx) => (
                            <li
                              key={bIdx}
                              className="relative pl-5 text-sm leading-relaxed text-cyber-muted before:absolute before:left-0 before:text-cyber-cyan before:content-['▹']"
                            >
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
