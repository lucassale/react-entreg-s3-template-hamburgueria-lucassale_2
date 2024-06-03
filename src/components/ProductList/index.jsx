
import { ProductCard } from "./ProductCard";
import "./ProductList.scss";

export const ProductList = ({ productList, addToCart }) => {
  return (
    <ul className="product-list">
      {productList.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </ul>
  );
};
