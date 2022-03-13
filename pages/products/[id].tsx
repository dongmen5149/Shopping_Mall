import type { NextPage } from "next";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { graphqlFetcher, QueryKeys } from "../queryClient";
import ProductDetail from "../component/ProductItem/details";
import { GET_PRODUCT, Product } from "../graphql/products";

const ProductDetailPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useQuery<Product>([QueryKeys.PRODUCTS, id], () =>
    graphqlFetcher(GET_PRODUCT, { id })
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
