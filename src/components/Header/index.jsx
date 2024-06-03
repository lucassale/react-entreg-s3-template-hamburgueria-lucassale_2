

import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import "./Header.scss";

export const Header = ({ cartList, setSearchTerm, openCartModal }) => {
  const [value, setValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(value);
  };

  return (
    <header className="header">
      <img src={Logo} alt="Logo Kenzie Burguer" />
      <div>
        <button onClick={openCartModal}>
          <MdShoppingCart size={21} />
          <span>{cartList.length}</span>
        </button>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit">
            <MdSearch size={21} />
          </button>
        </form>
      </div>
    </header>
  );
};
