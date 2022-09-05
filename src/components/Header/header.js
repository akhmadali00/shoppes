import React from "react";
import classes from "./header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <img
        className={classes.headerImage}
        src="http://shoppes-host.surge.sh/images/Bg.png"
      />
      <div className={classes.headerText}>Nike ZoomX Streakfly</div>
      <nav className={classes.nav}>
        <div className="container">
          <a className={classes.navBrand} href="index.js">
            Shoppes
          </a>
          <button className={classes.navToggler}></button>
          <ul className={classes.navMenu}>
            <li className={classes.navItem}>
              <a className={classes.navLink}>Home</a>
            </li>
            <li className={classes.navItem}>
              <a className={classes.navLink}>Shop</a>
            </li>
            <li className={classes.navItem}>
              <a className={classes.navLink}>Collections</a>
            </li>
            <li className={classes.navItem}>
              <a className={classes.navLink}>Order Tracking</a>
            </li>
          </ul>
        </div>
      </nav>
      <section className={classes.banner}>
        <div className="container"></div>
      </section>
    </header>
  );
}

export default Header;
