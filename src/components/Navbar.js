import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import { Offcanvas } from 'react-bootstrap';
import {  MdArrowBackIos, MdHome, MdLogin, MdInfo, MdAddCircle } from "react-icons/md";
import {RiMenu5Line } from 'react-icons/ri'


export default function Navbar(){

    const [showSlideMenu , setShowSlideMenu] = useState(false);

 return (
    <>
    <Offcanvas show={showSlideMenu} onHide={()=>{setShowSlideMenu(false)}} placement='end'>
        <Offcanvas.Header className='d-flex justify-content-between'>
          <button className='bg-white focus-none border-0 p-1 ms-2 text-muted' onClick={()=>{setShowSlideMenu(false)}}><MdArrowBackIos size={24}/></button>
          <div className='fs-5 fw-bold text-muted'>اسم المشروع</div>
        </Offcanvas.Header>
        <Offcanvas.Body dir='rtl'>
            <div className="d-flex mt-3">
                <img src="/images/icons/avatar.png" alt="" className="avatar_user mx-2" style={{maxHeight:'5rem'}} />
                <div className=''>
                    <p className="m-0 p-0 fs-6 pt-1 pb-1">عمار حمدي</p>
                    <button className=" text-dark border bg-white p-1">تعديل الملف الشخصي</button>
                </div>
                
            </div>
            <ul className="mt-4">
                    <li className='d-flex mt-2' >
                        <MdHome size={30} className='text-muted ms-1'/>
                        <Link id="RouterNavLink-4"  to="/" onClick={()=>{setShowSlideMenu(false)}}>
                            <p className="main_para text-muted">الصفحة الرئيسية</p>
                        </Link>
                    </li>
                    <li className='d-flex mt-2' >
                        <MdAddCircle size={30} className='text-muted ms-1'/>
                        <Link id="RouterNavLink-4"  to="/join" onClick={()=>{setShowSlideMenu(false)}}>
                            <p className="main_para text-muted">الإنضمام لنا</p>
                        </Link>
                    </li>
                    <li className='d-flex mt-2' >
                        <MdLogin size={30} className='text-muted ms-1'/>
                        <Link id="RouterNavLink-4"  to="/login" onClick={()=>{setShowSlideMenu(false)}}>
                            <p className="main_para text-muted">تسجيل الدخول</p>
                        </Link>
                    </li>
                    <li className='d-flex mt-2' >
                        <MdInfo size={30} className='text-muted ms-1'/>
                        <Link id="RouterNavLink-4"  to="/about" onClick={()=>{setShowSlideMenu(false)}}>
                            <p className="main_para text-muted">معلومات عنا</p>
                        </Link>
                    </li>
                </ul>
        </Offcanvas.Body>
        <div className=' p-3' dir='rtl'>
          <div className='d-flex'>
            <p className="p-0 m-0">جميع الحقوق محفوظة @2023</p>
          </div>
        </div>
    </Offcanvas>
    <div className='w-100 d-flex justify-content-between  position-fixed pb-2' style={{overflow:'auto',zIndex:'12'}} dir='rtl'>
        <button className='btn-white bg-white text-muted mt-1 me-2 p-1 rounded shadow' onClick={() => setShowSlideMenu(!showSlideMenu) }><RiMenu5Line size={28}/></button>
    </div>
    </>
 );
}