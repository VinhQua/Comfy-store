import React from "react";

const FormInput = ({
  label,
  name,
  type,
  defaultValue,
  size,
}: {
  label: string;
  name: string;
  type: string;
  defaultValue: string;
  size: string;
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
        defaultValue={defaultValue}
        className={`input input-bordered ${size}`}
      />
    </div>
  );
};

export default FormInput;
