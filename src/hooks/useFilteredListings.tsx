import { useMemo } from "react";
import { normalize, formatPrice } from "@/utils/strings";
import type { Listing, ListingFilter, SearchFormData } from "@/types";

export function useFilteredListings(
  listings: Listing[],
  activeFilter: ListingFilter,
  filters: SearchFormData
) {
  return useMemo(() => {
    const byStatus =
      activeFilter === "all"
        ? listings
        : listings.filter((l) =>
            l.status.some((status) =>
              status.toLowerCase().includes(activeFilter.toLowerCase())
            )
          );

    return byStatus.filter((listing) => {
      const matchesPropertyType =
        !filters.propertyType ||
        normalize(listing.status[0] || "").includes(
          normalize(filters.propertyType)
        );

      const matchesLocation =
        !filters.location ||
        listing.location
          ?.toLowerCase()
          .includes(filters.location.toLowerCase());

      const matchesPriceRange =
        !filters.priceRange ||
        (formatPrice(listing.price) >= filters.priceRange[0] &&
          formatPrice(listing.price) <= filters.priceRange[1]);

      return matchesPropertyType && matchesLocation && matchesPriceRange;
    });
  }, [listings, activeFilter, filters]);
}
