"use client";
import FormCheckbox from "@/app/global component/FormCheckbox";
import FormInput from "@/app/global component/FormInput";
import FormRange from "@/app/global component/FormRange";
import FormSelect from "@/app/global component/FormSelect";
import {
  getAllProducts,
  handleFilters,
} from "@/features/productSlice/productSlice";
import { AppDispatch } from "@/store";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Filters = () => {
  const {
    search,
    category,
    categories,
    company,
    companies,
    order,
    price,
    freeShipping,
  } = useSelector((store: any) => store.product);
  const dispatch = useDispatch<AppDispatch>();
  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name);

    dispatch(handleFilters({ name, value }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(getAllProducts("any"));
  };
  // Loading Products on initial rendering
  useEffect(() => {
    dispatch(getAllProducts("any"));
  }, []);
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center"
    >
      {/* SEARCH */}
      <FormInput
        type={"search"}
        label={"search product"}
        name={`search`}
        size={`input-sm`}
        defaultValue={search}
        handleChange={handleChange}
      />
      {/* Categories */}
      <FormSelect
        label="select category"
        name="category"
        list={categories}
        size="select-sm"
        defaultValue={category}
        handleChange={handleChange}
      />
      {/* COMANY */}
      <FormSelect
        label="select company"
        name="company"
        list={companies}
        size="select-sm"
        defaultValue={company}
        handleChange={handleChange}
      />

      {/* ORDER */}
      <FormSelect
        label="sort by"
        name="order"
        list={["a-z", "z-a", "high", "low"]}
        size="select-sm"
        defaultValue={order}
        handleChange={handleChange}
      />
      {/* PRICE */}
      <FormRange
        name="price"
        label="select price"
        size="range-sm"
        price={price}
        handleChange={handleChange}
      />
      {/* SHIPPING */}
      <FormCheckbox
        name="shipping"
        label="free shipping"
        size="checkbox-sm"
        defaultValue={freeShipping}
        handleChange={handleChange}
      />
      {/* BUTTONS */}
      <button type="submit" className="btn btn-primary btn-sm">
        search
      </button>
      <Link href={"/products"} className="btn btn-accent btn-sm">
        rest
      </Link>
    </form>
  );
};

export default Filters;
