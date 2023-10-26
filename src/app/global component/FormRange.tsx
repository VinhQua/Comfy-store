import { formatPrice } from "@/utils";
import React, { useState } from "react";

const FormRange = ({
  label,
  name,
  size,
  price,
  handleChange,
}: {
  label: string;
  name: string;
  price: number;
  size: string;
  handleChange: any;
}) => {
  const step = 1000;
  const maxPrice = 100000;

  return (
    <div className="form-control">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
        <span>{formatPrice(price)}</span>
      </label>
      <input
        type="range"
        name={name}
        id={name}
        min={0}
        max={maxPrice}
        value={price}
        step={step}
        onChange={handleChange}
        className={`range range-primary ${size}`}
      />
      <div className="w-full flex justify-between text-xs px-2 mt-2">
        <span className="font-bold text-md">0</span>
        <span className="font-bold text-md">{formatPrice(maxPrice)}</span>
      </div>
    </div>
  );
};

export default FormRange;
