import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { authContext } from "../../provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(authContext);

  const handleLogout = () =>{
    logOut()
    .then(()=>{})
    .catch(err =>console.error(err))
  }

  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Order Review</Link>
        <Link to="/inventory">Manage Inventory</Link>
        <Link to="/login">Login</Link>
        {
          user && <button onClick={handleLogout}>Sign Out</button>
        }
      </div>
    </nav>
  );
};

export default Header;
