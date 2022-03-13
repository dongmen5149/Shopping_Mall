import Link from "next/link";
import { Product } from "../../graphql/products";

const ProductItem = ({
  id,
  imageUrl,
  price,
  title,
  description,
  createdAt,
}: Product) => (
  <li className="product-item">
    <Link href={`/products/${id}`}>
      <a>
        <p className="product-item__title">{title}</p>
        <img className="product-item__image" src={imageUrl} />
        <span className="product-item__price">${price}</span>
      </a>
    </Link>
  </li>
);

export default ProductItem;
