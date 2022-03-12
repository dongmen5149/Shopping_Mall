import Link from "next/link";
import { Product } from "../../types";

const ProductItem = ({
  category,
  image,
  price,
  rating,
  title,
  id,
}: Product) => (
  <li className="product-item">
    <Link href={`/products/${id}`}>
      <a>
        <span className="product-item__category">{category}</span>
        <p className="product-item__title">{title}</p>
        <img className="product-item__image" src={image} alt={image} />
        <span className="product-item__price">${price}</span>
        <span className="product-item__rating">{rating.rate}</span>
      </a>
    </Link>
  </li>
);

export default ProductItem;
