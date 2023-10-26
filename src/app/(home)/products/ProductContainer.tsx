import { Loading, ProductGrid } from "@/app/global component";
import ProductList from "@/app/global component/ProductList";
import { customFetch } from "@/utils";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useSelector } from "react-redux";

const ProductContainer = () => {
  const [layout, setLayout] = useState("grid");
  const setActiveStyles = (pattern: string) => {
    return `text-xl btn btn-circle btn-sm ${
      pattern === layout
        ? "btn-primary text-primary-content"
        : "btn-ghost text-based-content"
    }`;
  };

  const {
    total: totalProducts,
    products,
    isLoading,
  } = useSelector((store) => store.product);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      {/* HEADER */}
      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h4 className="font-medium text-md ">
          {totalProducts} product{totalProducts > 1 ? "s" : ""}
        </h4>
        <div className="flex gap-x-2">
          <button
            type="button"
            onClick={() => setLayout("grid")}
            className={setActiveStyles("grid")}
          >
            <BsFillGridFill />
          </button>
          <button
            type="button"
            onClick={() => setLayout("list")}
            className={setActiveStyles("list")}
          >
            <BsList />
          </button>
        </div>
      </div>
      {/* PRODUCTS */}
      <div>
        {totalProducts === 0 ? (
          <h5 className="text-2xl mt-16">
            Sorry, no products matched your search...
          </h5>
        ) : layout === "grid" ? (
          <ProductGrid products={products} />
        ) : (
          <ProductList products={products} />
        )}
      </div>
    </>
  );
};
export default ProductContainer;
