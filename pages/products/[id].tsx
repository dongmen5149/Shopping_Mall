import type { NextPage } from "next";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { fetcher, QueryKeys } from "../queryClient";
import { Product } from "../types";
import ProductDetail from "../component/ProductItem/details";

const ProductDetailPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useQuery<Product>([QueryKeys.PRODUCTS, id], () =>
    fetcher({
      method: "GET",
      path: `/products/${id}`,
    })
  );

  if (!data) return null;

  return (
    <div>
      <h2>상품상세</h2>
      <ProductDetail item={data} />
    </div>
  );
};

export default ProductDetailPage;
