export type Listing = {
  id: number;
  price: string;
  bedrooms: number;
  bathrooms: number;
  location: string;
  title: string;
  status: string[];
  image: string;
};

export type ListingFilter = "buy" | "rent" | "lease" | "all";

export type SearchFormData = {
  propertyType: string;
  location: string;
  priceRange: number[] | undefined;
};
