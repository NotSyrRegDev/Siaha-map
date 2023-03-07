import React, {useState} from "react";
import { Link } from 'react-router-dom';


const SideBarItem = ({ item, active }) => {

    return (
        <Link 
            to={item.path} 
            className={active ? 'sidebar-item-active' : 'sidebar-item'} >
              
                <span className='sidebar-item-label'>{item.title}</span>
                <img 
                    src={item.icon}
                    alt={`icon-${item.icon}`}
                    className='sidebar-item-icon mx-1' />
        </Link>
    )
}
export default SideBarItem;
