import type { NextPage } from "next";
import { useQuery } from "react-query";
import ProductItem from "../component/ProductItem/item";
import { fetcher, QueryKeys } from "../queryClient";
import { Product } from "../types";

const ProductList: NextPage = () => {
  const { data } = useQuery<Product[]>(QueryKeys.PRODUCTS, () =>
    fetcher({
      method: "GET",
      path: "/products",
    })
  );

  console.log(data);
  // category: "men's clothing"
  // description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
  // id: 1
  // image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
  // price: 109.95
  // rating: {rate: 3.9, count: 120}
  // title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"

  return (
    <div className="products">
      <h2>상품목록</h2>
      <ul>
        {data?.map((product) => (
          <ProductItem {...product} key={product.id} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
