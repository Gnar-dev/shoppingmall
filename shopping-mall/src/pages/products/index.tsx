import { useQuery } from "@tanstack/react-query";
import ProductItem from "../../components/product/item";
import { QueryKeys, graphqlFetcher } from "../../queryClient";
import GET_PRODUCTS, { Products } from "../../graphql/products";

const ProductList = () => {
  const { data } = useQuery<Products>([QueryKeys.PRODUCTS, "products"], () =>
    graphqlFetcher(GET_PRODUCTS)
  );

  return (
    <div>
      <h2>상품목록</h2>
      <ul className="products">
        {data?.products?.map((product) => (
          <ProductItem {...product} key={product.id} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
