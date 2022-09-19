import React, { useState } from "react";
import { Link } from "react-router-dom"
import "./style.css";
import { SearchIcon, CartIcon } from "../../constants/svg";

export default function Navbar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive((value) => !value);
  };

  return (
      <nav className={`${active ? "h-[500px]" : "  "} navbar relative p-4 bg-transparent`}>
        <div className="container relative lg:px-[15px] mx-[8px] flex items-center justify-between">
          <a
            className="text-black font-anton tracking-[0.03em] mr-[16px] py-[5px] text-[16px] md:text-[18px] lg:text-2xl"
            href="/"
          >
            Shoppes
          </a>
          <button
            onClick={handleClick}
            className={`${
              active ? "active" : ""
            } nav-toggler relative md:hidden`}
            type="button"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div
            className={`${
              active ? "active" : ""
            } navbar-menu relative lg:flex items-center w-full lg:ml-[3rem]`}
          >
            <ul className="navbar-nav columns-8 list-none flex items-center">
              <li className="nav-item mx-[7px] lg:mx-[15px] lg:hidden">
                <div className="wrapper border rounded py-[7px] px-[13px]">
                  <div className="flex items-center justify-start">
                    <img src="http://shoppes-host.surge.sh/images/Search.png" />
                    <input
                      type="text"
                      className="w-full text-black focus:outline-none ml-2 px-[2px] py-[1px]"
                      placeholder="Search"
                    />
                  </div>
                </div>
              </li>
              <li className="nav-item mx-[7px] lg:mx-[15px]">
                <Link
                  className="nav-link text-black py-2 lg:p-2 text-[12px] lg:text-[14px] font-medium relative"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item mx-[7px] lg:mx-[15px]">
                <Link
                  className="nav-link text-black py-2 lg:p-2 text-[12px] lg:text-[14px] font-medium relative"
                  to="/shop"
                >
                  Shop
                </Link>
              </li>
              <li className="nav-item mx-[7px] lg:mx-[15px]">
                <Link
                  className="nav-link text-black py-2 lg:p-2 text-[12px] lg:text-[14px] font-medium relative"
                  to="/collections"
                >
                  Collections
                </Link>
              </li>
              <li className="nav-item mx-[7px] lg:mx-[15px]">
                <Link
                  className="nav-link text-black py-2 lg:p-2 text-[12px] lg:text-[14px] font-medium relative"
                  to="/order-tracking"
                >
                  Order Tracking
                </Link>
              </li>
              <li className="nav-item mx-[7px] lg:mx-[15px]">
                <Link
                  className="nav-link text-black py-2 lg:p-2 text-[12px] lg:text-[14px] font-medium relative"
                  to="/blogs"
                >
                  Blogs
                </Link>
              </li>
              <li className="nav-item mx-[7px] lg:mx-[15px] lg:hidden">
                <Link
                  className="nav-link text-black py-2 lg:p-2 text-[12px] lg:text-[14px] font-medium relative"
                  to="/cart"
                >
                  My Cart
                </Link>
              </li>
              <li className="nav-item mx-[7px] lg:mx-[15px] lg:hidden">
                <Link
                  className="w-full hover:shadow-[0_15px_30px_rgba(16,13,34,0.5)] border-0 rounded-[50px] mx-[0px] my-[16px] px-[30px] py-[14px] bg-black hover:shadow-2xl
                text-[12px] lg:text-[14px] text-white text-center font-medium relative z-99"
                  to="/login"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
          <div className="relative hidden lg:flex items-center mx-[-20px]">
            <div className="search relative flex items-center px-[20px]">
              <SearchIcon />
              <input
                type="text"
                required
                className="placeholder:font-bold ml-2 px-[2px] py-[1px] text-sm text-black bg-transparent border-none focus:outline-none"
                placeholder="Search"
              />
            </div>
            <div className="cart-login relative flex items-center px-[20px]">
              <div className="login relative mr-4 text-sm text-black">
                Log in
              </div>
              <div className="cart relative w-[42px] h-[42px] flex items-center justify-center rounded-full bg-gray">
                <CartIcon />
              </div>
            </div>
          </div>
        </div>
      </nav>
  );
}
