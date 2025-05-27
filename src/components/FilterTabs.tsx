import { useState } from "react";
import type { ListingFilter } from "@/types";

const options: ListingFilter[] = ["all", "buy", "rent", "lease"];

export default function FilterTabs({
  onChange,
}: {
  onChange: (filter: ListingFilter) => void;
}) {
  const [active, setActive] = useState<ListingFilter>("all");

  const handleClick = (filter: ListingFilter) => {
    setActive(filter);
    onChange(filter);
  };

  return (
    <div className="w-full justify-between flex bg-accent rounded-full p-3 sm:px-3.5 sm:w-fit mb-15">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => handleClick(opt)}
          className={`py-2 px-4 sm:px-7 rounded-full transition-colors capitalize font-medium cursor-pointer ${
            active === opt
              ? "bg-white text-accent"
              : "text-white hover:bg-accent/90"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
