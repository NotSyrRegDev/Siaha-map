import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';

import SideBarItem from './SidebarItem';

import './Sidebar.css';

import LogoutIcon from '../assets/icons/logout.svg';
import { auth  } from '../../firebase';

function SideBar ({ menu }) {
    const location = useLocation();

    const [active, setActive] = useState(1);

    useEffect(() => {
        menu.forEach(element => {
            if (location.pathname === element.path) {
                setActive(element.id);
            }
        });
    }, [location.pathname])

    const __navigate = (id) => {
        setActive(id);
    }

    const logoutUser = () => {

        // localStorage.removeItem("user");

        // signOut(auth).then(() => {
          
        //   }).catch((error) => {
           
        //   });

        //   window.location.reload();
    }


    return(
        <nav className='sidebar'>
            <div className='sidebar-container'>
                <div className='sidebar-logo-container'>

              
                 
                    <img
                        src={'/images/icons/logo.png'}
                        alt="logo" />
             
                   
                </div>

                <div className='sidebar-container'>
                    <div className='sidebar-items'>
                        {menu.map((item, index) => (
                            <div key={index} onClick={() => __navigate(item.id)}>
                                <SideBarItem
                                    active={item.id === active}
                                    item={item} />
                            </div>
                        ))}
                    </div>

                    <div className='sidebar-footer' onClick={() => logoutUser() } >
                    
                        <img 
                            src={LogoutIcon}
                            alt='icon-logout'
                            className='sidebar-item-icon' />
                                <span className='sidebar-item-label'>تسجيل خروج</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default SideBar;