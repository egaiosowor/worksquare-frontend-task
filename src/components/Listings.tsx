import ListingCard from "./ListingCard";
import Pagination from "./Pagination";
import FilterTabs from "./FilterTabs";
import EmptyListings from "./EmptyListings";
import SearchBar from "./SearchBar";
import { RotateCcw } from "lucide-react";
import { usePagination } from "@/hooks/usePagination";
import { useSearchParamsState } from "@/hooks/useSearchParamsState";
import { useFilteredListings } from "@/hooks/useFilteredListings";
import listingsResource from "@/resources/listingsResource";
import type { Listing } from "@/types";

export default function Listings() {
  const {
    currentPage,
    activeFilter,
    searchFilters,
    hasSearchParams,
    setSearchFilters,
    setActiveFilter,
    setPage,
    resetFilters,
  } = useSearchParamsState();

  const listings = listingsResource.read() as Listing[];
  const filtered = useFilteredListings(listings, activeFilter, searchFilters);
  const { paginatedListings, totalPages } = usePagination(
    filtered,
    currentPage
  );

  return (
    <section className="relative py-10 sm:py-15 px-4 max-w-7xl mx-auto">
      <FilterTabs onChange={setActiveFilter} />
      {hasSearchParams && (
        <button
          title="Reset filters"
          className="absolute top-45 sm:top-16 right-10 sm:right-4 flex items-center gap-2 text-primary text-lg p-3 sm:px-6 sm:py-3 rounded-xl border cursor-pointer group"
          onClick={resetFilters}
        >
          <p className="hidden sm:block">Reset</p>
          <RotateCcw
            size={22}
            className="text-primary transition-transform duration-300 ease-in-out group-hover:rotate-180"
          />
        </button>
      )}

      <SearchBar defaultValues={searchFilters} onSearch={setSearchFilters} />

      {paginatedListings.length > 0 ? (
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-10 mb-15">
          {paginatedListings.map((listing) => (
            <ListingCard key={listing.id} {...listing} />
          ))}
        </div>
      ) : (
        <EmptyListings />
      )}
      <Pagination
        current={currentPage}
        total={totalPages}
        onPageChange={setPage}
      />
    </section>
  );
}
