import React , {useState} from 'react';
import './Navbar.css';
import SlideMobile from './SlideMobile';

export default function Navbar(){

    const [showSlideMenu , setShowSlideMenu] = useState(false);

 return (
    <div className="navbar_area">

   
        <SlideMobile showSlideMenu={showSlideMenu} />
    

 
    <div className="left">
    <p>LOGO</p>
    </div>

    <div className="right">
        <img src="/images/icons/menu.png" alt="Menu" className="menu_nav_icon" onClick={() => setShowSlideMenu(!showSlideMenu) } />
    </div>
       
    </div>
 );
}