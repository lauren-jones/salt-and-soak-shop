import {useState} from "react";
import { AnnouncementBar } from "react-ecommerce-ui-kit";
import './header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  function handleClick() {
    setMenuActive(!menuActive);
  }

  if (menuActive) {
    return (
    <header className="header">
      <AnnouncementBar announcement="Free delivery on all UK orders over £35"/>
      <div className="header-menu-bar">
        <button onClick={handleClick}><FontAwesomeIcon icon={faXmark} className="burger-menu"/></button>
        <Link to="/" className="header-menu-logo"><h1 className="header-menu-logo">Salt + Soak</h1></Link>
        <Link to="/cart" className="header-shopping-icon"><FontAwesomeIcon icon={faShoppingBag}/></Link>
      </div>
      <div className="menu-links">
        <ul>
          <li><Link to="/category/salts" title="" className="menu-link-styling" onClick={handleClick}>Salts</Link></li>
          <li><Link to="/category/steams" className="menu-link-styling" onClick={handleClick}>Steams</Link></li>
          <li><Link to="/category/masks" className="menu-link-styling" onClick={handleClick}>Masks</Link></li>
          <li><Link to="/category/gifts" className="menu-link-styling" onClick={handleClick}>Gifts</Link></li>
        </ul>
      </div>
    </header>
    )
  } else {
    return (
    <header className="header">
      <AnnouncementBar announcement="Free delivery on all UK orders over £35"/>
      <div className="header-menu-bar">
        <button onClick={handleClick}><FontAwesomeIcon icon={faBars} className="burger-menu"/></button>
        <Link to="/" className="header-menu-logo"><h1 className="header-menu-logo">Salt + Soak</h1></Link>
        <Link to="/cart" className="header-shopping-icon"><FontAwesomeIcon icon={faShoppingBag}/></Link>
      </div>
    </header>
    )
  }
};