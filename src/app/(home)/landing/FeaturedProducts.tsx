import React from "react";
import SectionTitle from "./SectionTitle";

import { customFetch } from "@/utils";
import { ProductGrid } from "@/app/global component";
const url = `/products?featured=true`;
const getFeaturedProducts = async () => {
  try {
    const { data } = await customFetch.get(url);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
const FeaturedProducts = async () => {
  const products = await getFeaturedProducts();

  return (
    <div className="pt-24">
      <SectionTitle title={"featured products"} />
      <ProductGrid products={products} />
    </div>
  );
};

export default FeaturedProducts;
