import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const [profileDropdownVisible, setProfileDropdownVisible] = useState(false);
  const navigate=useNavigate();
  const logout=() =>{
      localStorage.removeItem("token");
      setToken("");
      navigate("/");
  }
  const handleProfileClick = () => {
    setProfileDropdownVisible(!profileDropdownVisible);
  };

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="Logo" className="logo" /></Link>
      <ul className="navbar-menu">
        <li>
          <Link 
            to='/' 
            onClick={() => setMenu('home')} 
            className={menu === "home" ? "active" : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <a 
            href='#explore-menu' 
            onClick={() => setMenu("menu")} 
            className={menu === "menu" ? "active" : ""}
          >
            Menu
          </a>
        </li>
        <li>
          <a 
            href='#app-download' 
            onClick={() => setMenu("mobile-app")} 
            className={menu === "mobile-app" ? "active" : ""}
          >
            Mobile App
          </a>
        </li>
        <li>
          <a 
            href='#footer' 
            onClick={() => setMenu("contact-us")} 
            className={menu === "contact-us" ? "active" : ""}
          >
            Contact Us
          </a>
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />
        <div className="navbar-search-icon">
          <Link to='/cart'>
            <img src={assets.basket_icon} alt="Cart" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        ) : (
          <div className="navbar-profile">
            <img 
              src={assets.profile_icon} 
              alt="Profile" 
              onClick={handleProfileClick}
            />
            {profileDropdownVisible && (
              <ul className='navbar-profile-dropdown'>
                <li>
                  <img src={assets.bag_icon} alt="Orders" />
                  <p>Orders</p>
                </li>
                <hr />
                <li onClick={logout}>
                  <img src={assets.logout_icon} alt="Logout" />
                  <p onClick={() => setToken("")}>Logout</p>
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
