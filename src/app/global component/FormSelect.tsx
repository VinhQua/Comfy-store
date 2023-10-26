import React from "react";

const FormSelect = ({
  label,
  name,
  list,
  defaultValue,
  size,
  handleChange,
}: {
  label: string;
  name: string;
  list: Array<string>;
  defaultValue: string;
  size: string;
  handleChange: any;
}) => {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <select
        className={`select select-bordered ${size}`}
        value={defaultValue}
        name={name}
        id={name}
        onChange={handleChange}
      >
        {list.map((item) => {
          return (
            <option value={item} key={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormSelect;
