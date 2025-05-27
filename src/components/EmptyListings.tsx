import { Frown } from "lucide-react";

export default function EmptyListings() {
  return (
    <div className="mx-auto flex flex-col items-center justify-center py-20 text-center w-full">
      <Frown className="w-12 h-12 text-gray-400 mb-4" />
      <h2 className="text-xl font-semibold text-primary">No Listings Found</h2>
      <p className="text-gray-500 mt-2">
        Try adjusting your filters or check back later for new listings.
      </p>
    </div>
  );
}
