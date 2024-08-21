import { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar=({setShowLogin}) =>{
    const [menu,setMenu]=useState("home");
    const {getTotalCartAmount,handleClick,isOn}=useContext(StoreContext);
    const loc=useLocation();
   
    return(
        <div className="navbar">
           <Link to='/'><img src={assets.Logo} className="logo"/></Link>
           <ul className='navbar-menu'>
            <Link to='/' onClick={()=> setMenu("home")} className={menu==="home"?"active":""}>home </Link>
                 {(loc.pathname !== '/cart' && loc.pathname !== '/order') && (
                 <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
                    )}
                {(loc.pathname !== '/cart' && loc.pathname !== '/order') && (
            <a href='#app-download' onClick={() => setMenu("mobile app")} className={menu === "mobile app" ? "active" : ""}>mobile app</a>
            )}
            <a href='#footer' onClick={()=> setMenu("contact us")} className={menu==="contact us"?"active":""}>contact us </a>
           </ul>
           <div className='navbar-right'>
           <div className='nav-right'>
           <Link to='/cart'><img src={assets.basket_icon}/></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
           </div>
           <button onClick={()=>setShowLogin(true)}>Sign in</button>
        </div>
        </div>
    );
}

export default Navbar;