import React from "react";

const FormInput = ({
  label,
  name,
  type,
  defaultValue,
  size,
  handleChange,
}: {
  label: string;
  name: string;
  type: string;
  defaultValue: string;
  size: string;
  handleChange: any;
}) => {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={defaultValue}
        className={`input input-bordered ${size}`}
        onChange={handleChange}
      />
    </div>
  );
};

export default FormInput;
