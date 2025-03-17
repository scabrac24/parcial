import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; 
import "./Home.css";

function Home() {
  const { t } = useTranslation(); 

  return (
    <div className="home-container">
      <h1>{t("home.title")}</h1>
      <div className="image-container">
        <img
          src="https://plus.unsplash.com/premium_photo-1705056547423-de4ef0f85bf7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29taWRhJTIwZm9uZG8lMjBibGFuY298ZW58MHx8MHx8fDA%3D"
          alt="Home Background"
          className="background-image"
        />
        <div className="overlay">
          <Link to="/menu" className="nav-item">
            <img src="https://cdn-icons-png.flaticon.com/512/151/151409.png" alt="Menu" />
            <span>{t("home.menu")}</span>
          </Link>
          <Link to="/stores" className="nav-item">
            <img src="https://cdn0.iconfinder.com/data/icons/shopping-solid-1/48/39-512.png" alt="Stores" />
            <span>{t("home.stores")}</span>
          </Link>
          <Link to="/cart" className="nav-item">
            <img src="https://cdn-icons-png.flaticon.com/512/1413/1413908.png" alt="Cart" />
            <span>{t("home.cart")}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
