import { ChevronLeft, ChevronRight, ChevronsRight } from "lucide-react";
import { useEffect } from "react";

export default function Pagination({
  current,
  total,
  onPageChange,
}: {
  current: number;
  total: number;
  onPageChange: (page: number) => void;
}) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [current]);

  function getPages() {
    const pages: (number | string)[] = [];

    if (total <= 5) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    pages.push(1);

    if (current > 3) pages.push("...");

    const start = Math.max(2, current - 1);
    const end = Math.min(total - 1, current + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (current < total - 2) pages.push("...");

    pages.push(total);

    return pages;
  }

  return (
    <div className="flex gap-2 items-center justify-self-center">
      <button
        disabled={current === 1}
        onClick={() => onPageChange(current - 1)}
        className="p-2 rounded bg-gray-100 text-primary/90 disabled:opacity-50"
      >
        <ChevronLeft size={16} />
      </button>

      {getPages().map((page, i) =>
        typeof page === "number" ? (
          <button
            key={i}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 rounded ${
              current === page
                ? "bg-accent text-white"
                : "bg-gray-100 text-primary"
            }`}
          >
            {page}
          </button>
        ) : (
          <span key={i} className="px-2 text-gray-400">
            ...
          </span>
        )
      )}

      <button
        disabled={current === total}
        onClick={() => onPageChange(current + 1)}
        className="p-2 rounded bg-gray-100 text-primary/90 disabled:opacity-50"
      >
        <ChevronRight size={16} />
      </button>

      <button
        onClick={() => onPageChange(total)}
        disabled={current === total}
        className="p-2 rounded bg-gray-100 text-primary/90 disabled:opacity-50"
      >
        <ChevronsRight size={16} />
      </button>
    </div>
  );
}
