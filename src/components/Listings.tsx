import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import type { Listing, ListingFilter, SearchFormData } from "@/types";
import listingsResource from "@/resources/listingsResource";
import { normalize, formatPrice } from "@/utils/strings";
import ListingCard from "./ListingCard";
import Pagination from "./Pagination";
import FilterTabs from "./FilterTabs";
import EmptyListings from "./EmptyListings";
import SearchBar from "./SearchBar";
import { RotateCcw } from "lucide-react";

export default function Listings() {
  function resetFilters() {
    window.location.href = window.location.pathname;
  }

  const listings = listingsResource.read() as Listing[];
  const [searchParams, setSearchParams] = useSearchParams();

  const page = parseInt(searchParams.get("page") || "1");
  const activeFilter = (searchParams.get("filter") || "all") as ListingFilter;

  const searchFilters: SearchFormData = {
    propertyType: searchParams.get("propertyType") || "",
    location: searchParams.get("location") || "",
    priceRange:
      searchParams.get("priceMin") && searchParams.get("priceMax")
        ? [
            Number(searchParams.get("priceMin")),
            Number(searchParams.get("priceMax")),
          ]
        : undefined,
  };

  function handleSearch(data: SearchFormData) {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("propertyType", data.propertyType);
    newParams.set("location", data.location);
    if (data.priceRange) {
      newParams.set("priceMin", data.priceRange[0].toString());
      newParams.set("priceMax", data.priceRange[1].toString());
    } else {
      newParams.delete("priceMin");
      newParams.delete("priceMax");
    }
    newParams.set("page", "1");
    setSearchParams(newParams);
  }

  function handleFilterChange(type: ListingFilter) {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("filter", type);
    newParams.set("page", "1");
    setSearchParams(newParams);
  }

  function handlePageChange(newPage: number) {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("page", newPage.toString());
    setSearchParams(newParams);
  }

  const filteredListings = useMemo(() => {
    const byFilter =
      activeFilter === "all"
        ? listings
        : listings.filter((l) =>
            l.status.some((status) =>
              status.toLowerCase().includes(activeFilter.toLowerCase())
            )
          );

    return byFilter.filter((listing) => {
      const matchesPropertyType =
        !searchFilters.propertyType ||
        normalize(listing.status[0] || "").includes(
          normalize(searchFilters.propertyType)
        );

      const matchesLocation =
        !searchFilters.location ||
        listing.location
          ?.toLowerCase()
          .includes(searchFilters.location.toLowerCase());

      const matchesPriceRange =
        !searchFilters.priceRange ||
        (formatPrice(listing.price) >= searchFilters.priceRange[0] &&
          formatPrice(listing.price) <= searchFilters.priceRange[1]);

      return matchesPropertyType && matchesLocation && matchesPriceRange;
    });
  }, [listings, activeFilter, searchFilters]);

  const ITEMS_PER_PAGE = 20;
  const totalPages = Math.ceil(filteredListings.length / ITEMS_PER_PAGE);
  const paginated = filteredListings.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const hasSearchParams =
    new URLSearchParams(location.search).toString() !== "";

  return (
    <section className="relative py-10 sm:py-15 px-4 max-w-7xl mx-auto">
      <FilterTabs onChange={handleFilterChange} />
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

      <SearchBar defaultValues={searchFilters} onSearch={handleSearch} />

      {paginated.length > 0 ? (
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-10 mb-15">
          {paginated.map((listing) => (
            <ListingCard key={listing.id} {...listing} />
          ))}
        </div>
      ) : (
        <EmptyListings />
      )}
      <Pagination
        current={page}
        total={totalPages}
        onPageChange={handlePageChange}
      />
    </section>
  );
}
