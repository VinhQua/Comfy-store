import { customFetch } from "./axios";
export { customFetch };

export const formatPrice = (price: any) => {
  const dollarsAmount = new Intl.NumberFormat("en-Us", {
    style: "currency",
    currency: "USD",
  }).format((price / 100).toFixed(2));
  return dollarsAmount;
};
