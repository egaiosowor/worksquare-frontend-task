import type { Listing } from "@/types";
import { ArrowRight, BedDouble, Bath, MapPin } from "lucide-react";
import Pill from "./Pill";

export default function ListingCard({
  price,
  bedrooms,
  bathrooms,
  location,
  title,
  status,
  image,
}: Listing) {
  return (
    <div className="sm:p-4 sm:pr-1.5 flex flex-col sm:flex-row sm:items-center gap-4 rounded-lg bg-white shadow-sm">
      <div
        style={{
          backgroundImage: `url(/${image})`,
        }}
        className="w-full h-40 sm:max-w-[200px] sm:basis-[50%] relative sm:h-full group overflow-clip rounded-t-lg sm:rounded-lg bg-cover bg-no-repeat before:content-[''] before:absolute before:top-0 before:w-full before:h-full before:rounded-lg before:z-10 before:bg-black/10"
      >
        <div className="absolute top-2 right-2 flex flex-wrap items-center justify-end gap-2 z-50">
          {status.map((label) => (
            <Pill key={label} label={label} />
          ))}
        </div>
      </div>
      <div className="w-fit flex flex-col gap-4 p-4  sm:px-0">
        <div>
          <h4 className="text-xl sm:text-2xl text-primary">{price}</h4>
          <p className="text-xs sm:text-sm text-secondary">Per Annum</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Stat
            Icon={<BedDouble className="size-4.5" />}
            label={`${bedrooms} Bedrooms`}
          />
          <Stat
            Icon={<Bath className="size-4.5" />}
            label={`${bathrooms} Bathrooms`}
          />
          <Stat Icon={<MapPin className="size-4.5" />} label={location} />
        </div>
        <p className="text-base text-black font-semibold tracking-wide max-w-[30ch]">
          {title}
        </p>
        <button className="text-sm sm:text-base w-fit py-1.5 px-2 sm:px-3.25 sm:py-2.5 flex items-center gap-3 text-white bg-accent rounded-lg group cursor-pointer">
          View{" "}
          <ArrowRight className="size-4 sm:size-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1.5" />
        </button>
      </div>
    </div>
  );
}

interface StatProps {
  label: string;
  Icon: React.ReactNode;
}

function Stat({ label, Icon }: StatProps) {
  return (
    <span className="flex items-center gap-1">
      {Icon}
      <span className="flex text-xs font-semibold"> {label}</span>
    </span>
  );
}
