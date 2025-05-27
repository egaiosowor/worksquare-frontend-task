import { useSearchParams } from "react-router-dom";
import type { ListingFilter, SearchFormData } from "@/types";

export function useSearchParamsState() {
  const [searchParams, setSearchParams] = useSearchParams();

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

  const activeFilter = (searchParams.get("filter") || "all") as ListingFilter;
  const currentPage = parseInt(searchParams.get("page") || "1");

  const hasSearchParams = searchParams.toString() !== "";

  const setSearchFilters = (data: SearchFormData) => {
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
  };

  const setActiveFilter = (filter: ListingFilter) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("filter", filter);
    newParams.set("page", "1");
    setSearchParams(newParams);
  };

  const setPage = (newPage: number) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("page", newPage.toString());
    setSearchParams(newParams);
  };

  const resetFilters = () => {
    window.location.href = window.location.pathname;
  };

  return {
    currentPage,
    activeFilter,
    searchFilters,
    hasSearchParams,
    setSearchFilters,
    setActiveFilter,
    setPage,
    resetFilters,
  };
}
