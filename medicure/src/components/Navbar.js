import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';
import Search from '../assets/Search.svg';
import Location from '../assets/Location.svg';
import './Css/Navbar.css';
import LoginPage from './LoginPage';
import { doSignOut } from '../auth';

const Navbar = () => {
  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState('');

  const handleLogin = () => {
    setLogin(!login);
  };

  const signOut = async () => {
    await doSignOut();
    localStorage.removeItem('user');
    localStorage.removeItem('email');
    window.location.reload(); // Reloading the window to reflect sign-out changes
  };

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setLogin(false);
      setUserName(JSON.parse(localStorage.getItem('user')));
    }
  }, []);

  return (
    <div className="Navbar_container">
      <nav>
        <div className="logo">
          <img src={Logo} alt="Logo" />
          <span>MediCure</span>
        </div>
        <div className="Search_box">
          <div className="search">
            <input type="text" placeholder="Search" />
            <button>
              <img src={Search} alt="search" />
            </button>
          </div>
          <div className="Location_container">
            <img src={Location} alt="location" />
            <span>Location</span>
          </div>
        </div>
        <div className="Menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/">About Us</Link></li>
          </ul>
        </div>
        {userName === "" ? (
          <div className="LoginBtn">
            <button onClick={handleLogin}>Sign Up / Log In</button>
          </div>
        ) : (
          <div className="LoginBtn">
            <button onClick={signOut}>Sign Out</button>
          </div>
        )}
      </nav>
      {login && <LoginPage />} 
    </div>
  );
};

export default Navbar;

