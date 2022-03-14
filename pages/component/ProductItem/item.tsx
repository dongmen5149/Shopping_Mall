import Link from "next/link";
import { useMutation } from "react-query";
import { ADD_CART } from "../../graphql/cart";
import { Product } from "../../graphql/products";
import { graphqlFetcher } from "../../queryClient";

const ProductItem = ({
  id,
  imageUrl,
  price,
  title,
  description,
  createdAt,
}: Product) => {
  const { mutate: addCart } = useMutation((id: string) =>
    graphqlFetcher(ADD_CART, { id })
  );

  return (
    <li className="product-item">
      <Link href={`/products/${id}`}>
        <a>
          <p className="product-item__title">{title}</p>
          <img className="product-item__image" src={imageUrl} />
          <span className="product-item__price">${price}</span>
        </a>
      </Link>
      <button className="product-item__add-cart" onClick={() => addCart(id)}>
        담기
      </button>
    </li>
  );
};

export default ProductItem;
