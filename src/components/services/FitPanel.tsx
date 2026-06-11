interface FitPanelProps {
  whoFor: string[];
  notFor: string[];
}

/** "Designed for / not the right fit" lists. Plain markup, placed inside a grid by the page. */
export function FitPanel({ whoFor, notFor }: FitPanelProps) {
  return (
    <div className="rounded-lg border border-line bg-ink-raised p-8">
      <h3 className="text-sm font-medium text-text">Designed for</h3>
      <ul className="mt-4 space-y-3 text-sm text-text-muted leading-relaxed">
        {whoFor.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="text-accent" aria-hidden="true">-</span>
            {item}
          </li>
        ))}
      </ul>
      <h3 className="mt-8 pt-6 border-t border-line text-sm font-medium text-text">
        Not the right fit
      </h3>
      <ul className="mt-4 space-y-3 text-sm text-text-faint leading-relaxed">
        {notFor.map((item) => (
          <li key={item} className="flex gap-3">
            <span aria-hidden="true">-</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
