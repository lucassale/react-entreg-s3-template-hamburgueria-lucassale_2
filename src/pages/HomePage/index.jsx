

import { useState, useEffect } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";

export const HomePage = () => {
  const [productList, setProductList] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://hamburgueria-kenzie-json-serve.herokuapp.com/products"
        );
        if (!response.ok) {
          throw new Error("Falha ao carregar os produtos");
        }
        const data = await response.json();
        setProductList(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(cartList));
  }, [cartList]);

  const addToCart = (product) => {
    setCartList([...cartList, product]);
  };

  const removeFromCart = (productId) => {
    setCartList(cartList.filter((product) => product.id !== productId));
  };

  const removeAllFromCart = () => {
    setCartList([]);
  };

  const filteredProducts = productList.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpenCartModal = () => {
    setShowCart(true);
  };

  const handleCloseCartModal = () => {
    setShowCart(false);
  };

  return (
    <>
      <Header
        cartList={cartList}
        setSearchTerm={setSearchTerm}
        openCartModal={handleOpenCartModal}
      />
      <main>
        <ProductList productList={filteredProducts} addToCart={addToCart} />
        {showCart && (
          <CartModal
            cartList={cartList}
            removeFromCart={removeFromCart}
            removeAllFromCart={removeAllFromCart}
            closeModal={handleCloseCartModal}
          />
        )}
      </main>
    </>
  );
};
