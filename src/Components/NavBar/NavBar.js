// import { link } from "fs";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);

  const toggleNavSmallScreen = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setLargeur(window.innerWidth);
      // if(window.innerWidth > 500){
      //     setToggleMenu(false)
      // }
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav>
      {(toggleMenu || largeur > 500) && (
        <ul className="liste">
          <img className="logo" src="./logo/monkey.png" alt="logo"></img>
            <li className="items">
              <Link to="/">Portfolio</Link>
            </li>
            <li className="items">
              <Link to="/create-console">Create Portfolio</Link>
            </li>
            <li className="items">
              <Link to="/InfiniteScroll">Infinite scroll</Link>
            </li>
            <li className="items">
              <Link to="/Slider">Slider</Link>
            </li>
        </ul>
      )}

      <button onClick={toggleNavSmallScreen} className="btn">
        -X-
      </button>
    </nav>
  );
}
