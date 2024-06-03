import { MdClose } from "react-icons/md";
import { useState, useEffect } from "react";
import { CartItemCard } from "./CartItemCard";
import "./CartModal.scss";

export const CartModal = ({
  cartList,
  removeFromCart,
  removeAllFromCart,
  closeModal,
}) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const total = cartList.reduce((prevValue, product) => {
    return prevValue + product.price;
  }, 0);

  const handleRemoveAll = () => {
    removeAllFromCart();
    setShowConfirmation(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target.classList.contains("modal-overlay")) {
        closeModal();
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [closeModal]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [closeModal]);

  return (
    <div className="modal-overlay">
      <div className="modal" role="dialog">
        <div className="modal-header">
          <h2>Carrinho de compras</h2>
          <button aria-label="close" title="Fechar" onClick={closeModal}>
            <MdClose size={21} />
          </button>
        </div>
        <div className="modal-content">
          <ul className="cart-item-list">
            {cartList.map((product) => (
              <CartItemCard
                key={product.id}
                product={product}
                removeFromCart={removeFromCart}
              />
            ))}
          </ul>
        </div>
        <div className="modal-footer">
          <div className="total">
            <span>Total</span>
            <span>
              {total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>
          <button
            className="remove-all-button"
            onClick={() => setShowConfirmation(true)}
          >
            Remover todos
          </button>
          {showConfirmation && (
            <div className="confirmation">
              <p>Deseja remover todos os itens do carrinho?</p>
              <button className="remove-all-button" onClick={handleRemoveAll}>
                Sim
              </button>
              <button
                className="remove-all-button"
                onClick={() => setShowConfirmation(false)}
              >
                Não
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
