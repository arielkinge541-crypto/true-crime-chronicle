import type { CaseStatus } from "@/lib/cases";

const map: Record<CaseStatus, string> = {
  Solved: "text-emerald-300 border-emerald-300/60",
  "Recently Solved": "text-emerald-300 border-emerald-300/60",
  Unsolved: "text-primary border-primary/70",
  "Cold Case": "text-accent border-accent/70",
};

export function StatusBadge({ status }: { status: CaseStatus }) {
  return <span className={`stamp ${map[status]}`}>{status}</span>;
}
