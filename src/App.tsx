import "./index.css";
import { Suspense } from "react";
import Layout from "./components/layout/Layout";
import Listings from "./components/Listings";

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<p>Loading listings...</p>}>
        <Listings />
      </Suspense>
    </Layout>
  );
}
