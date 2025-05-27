import type { Listing } from "@/types";
import listingsResource from "@/resources/listingsResource";
import ListingCard from "./ListingCard";
export default function Listings() {
  const listings = listingsResource.read() as Listing[];

  return (
    <section className="py-15 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-10">
        {listings.map((listing) => (
          <ListingCard key={listing.id} {...listing} />
        ))}
      </div>
    </section>
  );
}
