import React, { useState } from "react";

const FormRange = ({
  label,
  name,
  size,
  price,
}: {
  label: string;
  name: string;
  price: number;
  size: string;
}) => {
  const step = 1000;
  const maxPrice = 100000;
  const [selectedPrice, setSelectedPrice] = useState<number>(price || maxPrice);
  return (
    <div className="form-control">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
        <span>{selectedPrice}</span>
      </label>
      <input
        type="range"
        name={name}
        id={name}
        min={0}
        max={maxPrice}
        value={selectedPrice}
        step={step}
        onChange={(e) => setSelectedPrice(Number(e.target.value))}
        className={`range range-primary ${size}`}
      />
      <div className="w-full flex justify-between text-xs px-2 mt-2">
        <span className="font-bold text-md">0</span>
        <span className="font-bold text-md">{maxPrice}</span>
      </div>
    </div>
  );
};

export default FormRange;