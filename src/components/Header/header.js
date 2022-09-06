import React from "react";
import classes from "./header.module.css";
import { SearchIcon, CartIcon } from "../../constants/svj";

function Header() {
  return (
    <header className={classes.header}>
      {/* <img
        className={classes.headerImage}
        src="http://shoppes-host.surge.sh/images/Bg.png"
      /> */}
      {/* <div className={classes.headerText}>Nike ZoomX Streakfly</div> */}
      <nav className="navbar p-4">
        <div className="navbar px-[15px] mx-[8px] container flex items-center justify-between">
          <a
            className="font-anton tracking-[0.03em] mr-[16px] py-[5px] text-2xl"
            href="index.js"
          >
            Shoppes
          </a>
          <button className={classes.navToggler}></button>
          <div className="collapse ml-[3rem]">
            <ul className="columns-8 list-none flex items-center">
              <li className="mx-[15px]">
                <a
                  className="nav-link p-2 text-[14px] font-medium relative"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="mx-[15px]">
                <a
                  className="nav-link p-2 text-[14px] font-medium relative"
                  href="#"
                >
                  Shop
                </a>
              </li>
              <li className="mx-[15px]">
                <a
                  className="nav-link p-2 text-[14px] font-medium relative"
                  href="#"
                >
                  Collections
                </a>
              </li>
              <li className="mx-[15px]">
                <a
                  className="nav-link p-2 text-[14px] font-medium relative"
                  href="#"
                >
                  Order Tracking
                </a>
              </li>
              <li className="mx-[15px]">
                <a
                  className="nav-link p-2 text-[14px] font-medium relative"
                  href="#"
                >
                  Blogs
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <div className="search flex items-center columns-6">
              <SearchIcon />
              <input
                type="text"
                className="placeholder:font-bold ml-2 border-none focus:outline-none"
                placeholder="Search..."
              />
            </div>
            <div className="cart-login flex items-center">
              <div className="login">Log in</div>
              <div className="cart">
                <CartIcon />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className={classes.banner}>
        <div className="container"></div>
      </section>
    </header>
  );
}

export default Header;
