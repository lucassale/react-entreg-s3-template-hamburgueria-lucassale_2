
import { useState } from "react";
import "./ProductCard.scss";

export const ProductCard = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <li className="product-card">
      <img src={product.img} alt={product.name} />
      <div>
        <h3>{product.name}</h3>
        <span>{product.category}</span>
        <span>
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <button onClick={handleAddToCart}>Adicionar</button>
      </div>
    </li>
  );
};
