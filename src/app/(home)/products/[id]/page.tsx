import { customFetch } from "@/utils";

const getProduct = async (id: number) => {
  try {
    const { data } = await customFetch.get(`/products/${id}`);
    // console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default async function Page({ params }: { params: { id: string } }) {
  const product = await getProduct(Number(params.id));

  return <div>My product: {JSON.stringify(product)}</div>;
}
