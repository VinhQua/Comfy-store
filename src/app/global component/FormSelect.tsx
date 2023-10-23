import React from "react";

const FormSelect = ({
  label,
  name,
  list,
  defaultValue,
  size,
}: {
  label: string;
  name: string;
  list: Array<string>;
  defaultValue: string;
  size: string;
}) => {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <select
        className={`select select-bordered ${size}`}
        defaultValue={defaultValue}
        name={name}
        id={name}
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
