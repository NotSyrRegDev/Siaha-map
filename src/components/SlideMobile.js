import React from 'react';
import { Link } from 'react-router-dom';
import './SlideMobile.css';

const SlideMobile = ( {showSlideMenu} ) => {

    

  return (
    <div className={`main_slide_mobile ${showSlideMenu && 'active' }`}>
        <div className="container-mid flex_right">
        <div className="mt-1"></div>
            <div className="top_area_slide_two logo_top_div d-flex-c">
            <p className="main_para">اسم المشروع</p>
                <img src="/images/icons/triangle.png" alt="" className="icon_small mx-1" />
               
            </div>

            <div className="user_top_div d-flex-c">
       
                <div>
                    <p className="main_para">عمار حمدي</p>
                    <button className="btn_profile">تعديل الملف الشخصي</button>
                </div>
                <img src="/images/icons/avatar.png" alt="" className="avatar_user mx-2" />
            </div>

            <div className="menu_middle_div">
                <ul className="ul_menu_mobile">
                    <li className='d-flex-c' >
                       
                        <Link id="RouterNavLink-4"  to="/home">
                       <p className="main_para">الصفحة الرئيسية</p>
                        </Link>
                        <img src="/images/icons/triangle.png" alt="" className="mx-2 slide_menu_icon" />
                    </li>
                    
                    <li className='d-flex-c' >
                       
                        <Link id="RouterNavLink-4"  to="/join">
                       <p className="main_para"> الانضمام لنا</p>
                        </Link>
                        <img src="/images/icons/triangle.png" alt="" className="mx-2 slide_menu_icon" />
                    </li>

                    <li className='d-flex-c' >
                       
                        <Link id="RouterNavLink-4"  to="/login">
                       <p className="main_para"> تسجيل الدخول </p>
                        </Link>
                        <img src="/images/icons/triangle.png" alt="" className="mx-2 slide_menu_icon" />
                    </li>

                    <li className='d-flex-c' >
                       
                        <Link id="RouterNavLink-4"  to="/about">
                       <p className="main_para"> معلومات عنا </p>
                        </Link>
                        <img src="/images/icons/triangle.png" alt="" className="mx-2 slide_menu_icon" />
                    </li>

                </ul>

            </div>

            <div className="menu_botton_div mt-2">
                <p className="main_para">جميع الحقوق محفوظة @2023</p>
            </div>

        </div>
    </div>
  )
}

export default SlideMobile