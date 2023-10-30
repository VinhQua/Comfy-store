import { toast } from "react-toastify";
import { customFetch } from "../../../../../utils/axios";
export async function GET(id) {
  try {
    const data = await customFetch.get(`/products/${id}`);
    return Response.json({ product: data.data });
  } catch (error) {
    return toast.error(error);
  }
}
