"use client";
import { Loading } from "@/app/global component";
import {
  getSingleProduct,
  setProductColor,
  setSingleProductAmount,
} from "@/features/productSlice/productSlice";
import { AppDispatch } from "@/store";
import { formatPrice, generateAmountOption } from "@/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Page({ params }: { params: { id: string } }) {
  const dispatch = useDispatch<AppDispatch>();
  // Loading single product
  useEffect(() => {
    dispatch(getSingleProduct(params.id));
  }, []);

  const {
    isLoading,
    product,
    productColor,
    singleProductAmount,
  }: {
    isLoading: boolean;
    product: any;
    productColor: string;
    singleProductAmount: number;
  } = useSelector((store: any) => store.product);
  if (isLoading) {
    return <Loading />;
  }

  const { image, title, price, description, colors, company } =
    product.attributes;

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link href={`/`}>Home</Link>
          </li>
          <li>
            <Link href={`/products`}>Products</Link>
          </li>
        </ul>
      </div>
      {/* PRODUCTS */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
        />
        {/* PRODUCTS */}
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl text-base-300 font-bold mt-2">{company}</h4>
          <p className="mt-3 text-xl">{formatPrice(price)}</p>
          <p className="mt-6 leading-8">{description}</p>
          {/* COLORS */}
          <div className="mt-6">
            <h4 className="text-md font-medium tracking-wider capitalize">
              colors
            </h4>
            <div className="mt-2">
              {colors.map((color: string) => (
                <button
                  type="button"
                  key={color}
                  className={`badge w-6 h-6 mr-6 ${
                    productColor === color && "border-2 border-secondary"
                  } `}
                  style={{ backgroundColor: color }}
                  onClick={() => dispatch(setProductColor(color))}
                ></button>
              ))}
            </div>
          </div>
          {/* AMOUNT */}
          <div className="form-control w-full max-w-xs">
            <label htmlFor="amount" className="label">
              <h4 className="text-md font-medium tracking-wider capitalize">
                amount
              </h4>
            </label>
            <select
              value={singleProductAmount}
              name="amount"
              id="amount"
              className="select select-secondary select-bordered select-md"
              onChange={(e) =>
                dispatch(setSingleProductAmount(parseInt(e.target.value)))
              }
            >
              {generateAmountOption(20)}
            </select>
          </div>
          {/* CART BTN */}
          <div className="mt-10">
            <button type="button" className="btn btn-secondary btn-md">
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
