import "./index.css";
import { Suspense } from "react";
import Layout from "./components/layout/Layout";
import Listings from "./components/Listings";
import ListingSkeletons from "./components/ListingsSkeleton";
import { Newsletter } from "./components/Newsletter";

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<ListingSkeletons />}>
        <Listings />
      </Suspense>
      <Newsletter />
    </Layout>
  );
}
