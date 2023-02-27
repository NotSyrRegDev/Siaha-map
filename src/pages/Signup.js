import React from 'react'
import { Link } from 'react-router-dom';
import './Signup.css';


const Signup = () => {
  return (
    <div className='main_signup_page' >

    <div className="flex-col">

   
    <div className="signup_div_box">

    <div className="image_div" style={{ background: " linear-gradient(  rgba(0,0,0,0.4) , #010101 ) ,url('/images/landscape/1.jpg') center / cover" }} >
      <img className='logo_login_div' src="/images/icons/triangle-white.png" alt="" />
    </div>

    <div className="login_div">
          <h1 className="headline_location"> !  انشئ حسابك معنا </h1>
          <div className="mt-2"></div>

      <form >

      <div className="d-flex-c f-sp inputs_div_coll">

      <div className="input_form_div mx-1">
          <label htmlFor="" className="label_form"> العمر</label>
          <input type="number" className="input_form" />
        </div>

      <div className="input_form_div mx-1">
      
          <label htmlFor="" className="label_form">الاسم الكامل</label>
          <input type="text" className="input_form" />
        </div>

      

      </div>
    
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
        <p className="mt-2 main_para text-white"> لديك حساب بالفعل ؟ قم <Link className='a_link a_underline' to="/login" >بتسجيل الدخول</Link> </p>
        </div>
        
      </form>


    </div>

    

    </div>

    </div>

    </div>
  )
}

export default Signup