import { Product } from "../../types";

const ProductDetail = ({
  item: { title, image, description, price },
}: {
  item: Product;
}) => (
  <div className="product-detail">
    <p className="product-detail__title">{title}</p>
    <img className="product-detail__image" src={image} />
    <p className="product-detail__description">{description}</p>
    <span className="product-detail__price">${price}</span>
  </div>
);

export default ProductDetail;
