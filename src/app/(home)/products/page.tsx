import Filters from "./Filters";
import PaginationContainer from "./PaginationContainer";
import ProductContainer from "./ProductContainer";

export default function Product() {
  return (
    <>
      <Filters />
      <ProductContainer />
      <PaginationContainer />
    </>
  );
}
