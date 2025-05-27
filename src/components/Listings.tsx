import type { Listing } from "@/types";
import listingsResource from "@/resources/listingsResource";
import ListingCard from "./ListingCard";
import Pagination from "./Pagination";
import { useState } from "react";
export default function Listings() {
  const listings = listingsResource.read() as Listing[];
  const [page, setPage] = useState(1);

  const ITEMS_PER_PAGE = 20;
  const totalPages = Math.ceil(listings.length / ITEMS_PER_PAGE);
  const paginated = listings.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <section className="py-15 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-10 mb-15">
        {paginated.map((listing) => (
          <ListingCard key={listing.id} {...listing} />
        ))}
      </div>
      <Pagination current={page} total={totalPages} onPageChange={setPage} />
    </section>
  );
}
