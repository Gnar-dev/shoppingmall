import { Product } from "../../graphql/products";

const ProductDetail = ({
  item: { title, imageUrl, description, price },
}: {
  item: Product;
}) => (
  <div className="product-detail">
    <p className="product-detail_title">{title}</p>
    <img className="product-detail_image" src={imageUrl} alt="" />
    <p className="product-detail_description">{description}</p>
    <span className="product-detail_price">${price}</span>
  </div>
);

export default ProductDetail;
