import { MdDelete } from "react-icons/md";
import "./CartItemCard.scss";

export const CartItemCard = ({ product, removeFromCart }) => {
  const handleRemove = () => {
    removeFromCart(product.id);
  };

  return (
    <li className="cart-item">
      <div className="cart-item-info">
        <img src={product.img} alt={product.name} />
        <div>
          <h3>{product.name}</h3>
          <p>{product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
        </div>
      </div>
      <button
        className="remove-button"
        aria-label="delete"
        title="Remover item"
        onClick={handleRemove}
      >
        <MdDelete size={21} />
      </button>
    </li>
  );
};
