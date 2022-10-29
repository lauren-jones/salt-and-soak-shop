import React from "react";
import { AnnouncementBar } from "react-ecommerce-ui-kit";
import './header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Header = () => {
 return (
    <header className="header">
      <AnnouncementBar announcement="Free delivery on all UK orders over £35"/>
      <div className="header-menu-bar">
        <h1 className="header-menu-logo">Salt + Soak</h1>
        <div className="header-menu-right">
          <ul className="header-menu-links">
            <li>
              <Link to="/salts">Salts</Link>
            </li>
            <li>Soaks</li>
            <li>Masks</li>
            <li>Gifts</li>
          </ul>
          <FontAwesomeIcon icon={faShoppingBag} className="header-shopping-icon"/>
        </div>
      </div>
    </header>
 )
};