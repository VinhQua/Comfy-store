import { customFetch } from "./axios";
export { customFetch };

export const formatPrice = (price) => {
  const dollarsAmount = new Intl.NumberFormat("en-Us", {
    style: "currency",
    currency: "USD",
  }).format((price / 100).toFixed(2));
  return dollarsAmount;
};

export const generateAmountOption = (number) => {
  const options = Array.from({ length: number }, (_, index) => {
    const amount = index + 1;
    return (
      <option value={amount} key={amount}>
        {amount}
      </option>
    );
  });
  return options;
};
