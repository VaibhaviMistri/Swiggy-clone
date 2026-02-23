import React from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items.reduce((total, item) => total + item.quantity, 0));

  return (
    <div className="flex px-3 m-3 border-b-2 border-gray-600 h-30 justify-between items-center">
      <div className="h-28 w-28">
        <img src={LOGO_URL} alt="Logo" />
      </div>
      <div className="w-auto">
        <ul className="flex text-lg">
          <li className="m-5">
            <Link to="/">Home</Link>
          </li>
          <li className="m-5">
            <Link to="/about">About</Link>
          </li>
          <li className="m-5">
            <Link to="/contact">Contact</Link>
          </li>
          <Link to="/cart">
            <li className="m-5">Cart{cartItems > 0 && <span className="text-emerald-600 font-bold">({cartItems})</span>}</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;