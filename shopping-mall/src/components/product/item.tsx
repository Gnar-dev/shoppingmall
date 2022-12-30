import { Product } from "../../graphql/products";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { graphqlFetcher } from "../../queryClient";
import { ADD_CART } from "../../graphql/cart";
// import { cartItemSelector } from "../../recoils/cart";
// import { useRecoilState } from "recoil";  //리코일 잠시 삭제 cause 상태 변환할 일 x
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
  // const [cartAmount, setCartAmount] = useRecoilState(cartItemSelector(id));
  // const addToCart = () => setCartAmount(prev => (prev || 0) + 1)
  return (
    <li className="product-item">
      <Link to={`/products/${id}`}>
        <p className="product-item-title">{title}</p>
        <img className="product-item-image" src={imageUrl} alt="" />
        <span className="product-item-price">${price}</span>
      </Link>

      <button className="product-item_add-cart" onClick={() => addCart(id)}>
        담기
      </button>
    </li>
  );
};

export default ProductItem;
