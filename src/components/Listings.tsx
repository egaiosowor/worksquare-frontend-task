import type { Listing } from "@/types";
import listingsResource from "@/resources/listingsResource";
import ListingCard from "./ListingCard";
import Pagination from "./Pagination";
import { useState } from "react";
import FilterTabs from "./FilterTabs";
import type { ListingFilter } from "@/types";
import EmptyListings from "./EmptyListings";

export default function Listings() {
  const listings = listingsResource.read() as Listing[];
  const [page, setPage] = useState(1);
  const [filterType, setFilterType] = useState<ListingFilter>("all");

  const filteredListings =
    filterType === "all"
      ? listings
      : listings.filter((l) =>
          l.status.some((status) =>
            status.toLowerCase().includes(filterType.toLowerCase())
          )
        );

  const ITEMS_PER_PAGE = 20;
  const totalPages = Math.ceil(filteredListings.length / ITEMS_PER_PAGE);
  const paginated = filteredListings.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <section className="py-10 sm:py-15 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <FilterTabs onChange={(type) => setFilterType(type)} />

      {paginated.length > 0 ? (
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-10 mb-15">
          {paginated.map((listing) => (
            <ListingCard key={listing.id} {...listing} />
          ))}
        </div>
      ) : (
        <EmptyListings />
      )}
      <Pagination current={page} total={totalPages} onPageChange={setPage} />
    </section>
  );
}
