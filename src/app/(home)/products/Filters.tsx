"use client";
import FormCheckbox from "@/app/global component/FormCheckbox";
import FormInput from "@/app/global component/FormInput";
import FormRange from "@/app/global component/FormRange";
import FormSelect from "@/app/global component/FormSelect";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Filters = () => {
  return (
    <form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormInput
        type={"search"}
        label={"search product"}
        name={`search`}
        size={`input-sm`}
        defaultValue={""}
      />
      {/* Categories */}
      <FormSelect
        label="select category"
        name="category"
        list={["name", "asfd"]}
        size="select-sm"
        defaultValue="name"
      />
      {/* COMANY */}
      <FormSelect
        label="select company"
        name="company"
        list={["name", "asfd"]}
        size="select-sm"
        defaultValue="name"
      />

      {/* ORDER */}
      <FormSelect
        label="sort by"
        name="order"
        list={["a-z", "z-a", "high", "low"]}
        size="select-sm"
        defaultValue="a-z"
      />
      {/* PRICE */}
      <FormRange
        name="price"
        label="select price"
        size="range-sm"
        price={500}
      />
      {/* SHIPPING */}
      <FormCheckbox
        name="shipping"
        label="free shipping"
        size="checkbox-sm"
        defaultValue={true}
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
