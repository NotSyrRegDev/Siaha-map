import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';


const Login = () => {
  return (
    <div className='main_login_page' >

    <div className="flex-col">

   
    <div className="login_div_box">

    <div className="image_div" style={{ background: " linear-gradient(  rgba(0,0,0,0.4) , #010101 ) ,url('/images/landscape/1.jpg') center / cover" }} >
      <img className='logo_login_div' src="/images/icons/triangle-white.png" alt="" />
    </div>

    <div className="login_div">
          <h1 className="headline_location"> ! مرحبا مجددا </h1>
          <div className="mt-2"></div>

      <form >
      <div className="input_form_div">
          <label htmlFor="" className="label_form">الايميل</label>
          <input type="email" className="input_form" />
        </div>

        <div className="input_form_div">
          <label htmlFor="" className="label_form">كلمة المرور</label>
          <input type="password" className="input_form" />
        </div>

        <div className='input_form_div' >
          <button className="mt-2 btn_login"> انشاء حساب</button>
        </div>

        <div className='input_form_div' >
        <p className="mt-2 main_para text-white"> ليس لديك حساب ؟ قم   <Link className='a_link a_underline' to="/signUp" >  بانشاء حساب الان </Link> </p>
        </div>
      </form>


    </div>

    

    </div>

    </div>

    </div>
  )
}

export default Login