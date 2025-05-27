import { fetchListings } from "@/utils/fetchListings";
import { wrapPromise } from "@/utils/wrapPromise";

const listingsResource = wrapPromise(fetchListings());
export default listingsResource;
