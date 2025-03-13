import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; 

function Home() {
  return (
    <div className="home-container">
      <h1>Home (25%)</h1>
      <div className="image-container">
        <img
          src="https://static.vecteezy.com/system/resources/previews/007/591/385/non_2x/hand-drawn-fast-food-decorative-background-vector.jpg" 
          alt="Home Background"
          className="background-image"
        />
        <div className="overlay">
          <Link to="/menu" className="nav-item">
            <img src="" alt="Menu" />
            <span>MENU</span>
          </Link>
          <Link to="/stores" className="nav-item">
            <img src="" alt="Stores" />
            <span>STORES</span>
          </Link>
          <Link to="/cart" className="nav-item">
            <img src="" alt="Cart" />
            <span>CART</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
