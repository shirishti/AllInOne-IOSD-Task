import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {useStateValue} from "./StateProvider";
import { auth } from "./firebase";
function Header() {
  const [{basket,user}] =useStateValue();
  
  const login=()=>{
    if(user){
      auth.signOut();
    }
  }
  return (
    <nav className="header">
      <Link to="/">
        <h1 className="header__title">
          All<span className="text-primary">In</span>One
        </h1>
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchBar" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__option">
            <span className="option__one">Hello {user?.email}</span>
            <span className="option__two">{user ? 'Sign Out':'Sign In'}</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="option__one">Returns</span>
            <span className="option__two">& Orders</span>
          </div>
        </Link>
        <Link to="/checkout">
          <div className="option__basket">
            <ShoppingBasketIcon className="shoppingBasket"/>
            <span className="option__two cart__item">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
