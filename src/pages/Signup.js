import React , {useState} from 'react'
import { Link } from 'react-router-dom';
import './Signup.css';
import {   db , setDoc , doc ,  createUserWithEmailAndPassword , auth } from '../firebase';

const Signup = () => {

  const [ userName , setUserName ] = useState('');
  const [userAge , setUserAge ] = useState('');
  const [userCountry , setUserCountry ] = useState('');
  const [userEmail , setUserEmail ] = useState('');
  const [userPassword , setUserPassword ] = useState('');

  const [loading , setLoading ] = useState(false);
  const [success , setSuccess ] = useState(false);

  const [error , setError ] = useState('');

  const makeid = (length) =>  {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

  const addNewUser =  async (e) => {

    e.preventDefault();
    setLoading(true);

    if (userName === ''  ) {
      setError(' يرجى ادخال اسم المستخدم ');
}

if (userAge === ''  ) {
  setError(' يرجى ادخال عمر المستخدم ');
}


if (userCountry === ''  ) {
  setError(' يرجى ادخال دولة المستخدم ');
}

if (userEmail === ''  ) {
  setError(' يرجى ادخال ايميل المستخدم ');
}

if (userPassword === ''  ) {
  setError(' يرجى ادخال باسوورد المستخدم ');
}

setTimeout(() => {
  setLoading(false);
  setError('');
} , 2500)

    if (userName !== '' && userAge !== '' && userCountry && userEmail && userPassword ) {

        const users = await setDoc(doc(db, "users", makeid(20)), {

          name: userName,
          age: userAge,
          country: userCountry,
          email: userEmail
          
         
          });

          createUserWithEmailAndPassword(auth, userEmail, userPassword)
          .then(() => {
            setLoading(false);
             
          })
          .catch(() => {
             
             
              setError('خطأ في انشاء المستخدم');
             
          });

        
            setSuccess(true);
            setLoading(false);
            setError('');

            setTimeout(() => {
                setSuccess('');
              
                window.location.reload();
            } , 1350);

         

    }
}

  return (
    <div className='main_signup_page' >

    <div className="flex-col">

   
    <div className="signup_div_box">

    <div className="image_div" style={{ background: " linear-gradient(  rgba(0,0,0,0.4) , #010101 ) ,url('/images/landscape/1.jpg') center / cover" }} >
      <img className='logo_login_div' src="/images/icons/triangle-white.png" alt="" />
    </div>

    <div className="login_div">
    <div className="mt-3"></div>
          <h1 className="headline_login_form"> !  انشئ حسابك معنا </h1>
          <div className="mt-2"></div>

          {error && (
                            <>
                            <h1 className="mb-1 error_headline"> {error} </h1>
                            </>
                        )}

                {success && (
                    <>
                        <div className="popup_success">
                            <img src="/images/icons/check.png" alt="" />
                        </div>
                    </>
                )}

      <form onSubmit={addNewUser} >

      <div className="d-flex-c f-sp inputs_div_coll">

      <div className="input_form_div mx-1">
      
      <label htmlFor="" className="login_label_form">الاسم الكامل</label>
      <input value={userName} onChange={(e) => setUserName(e.target.value) } type="text" className="login_input_form" />
    </div>

      <div className="input_form_div mx-1">
          <label htmlFor="" className="login_label_form"> العمر</label>
          <input value={userAge} onChange={(e) => setUserAge(e.target.value) } type="number" className="login_input_form" />
        </div>

  

      

      </div>

      <div className="d-flex-c f-sp inputs_div_coll">
      <div className="input_form_div">
          <label htmlFor="" className="login_label_form">الايميل</label>
          <input value={userEmail} onChange={(e) => setUserEmail(e.target.value) } type="email" className="login_input_form" />
        </div>

      <div className="input_form_div">
          <label htmlFor="" className="login_label_form">الدولة</label>
          <input value={userCountry} onChange={(e) => setUserCountry(e.target.value) } type="text" className="login_input_form" />
        </div>
    

      </div>
    
   

        <div className="input_form_div">
          <label htmlFor="" className="login_label_form">كلمة المرور</label>
          <input value={userPassword} onChange={(e) => setUserPassword(e.target.value) } type="password" className="login_input_form" />
        </div>

        <div className='input_form_div' >

        {loading ? (
              <>
                                <img src="/images/icons/loading-spinner.gif" className='loading_spinner' alt="" />
                            </>
            ) : (
              <button type='submit' className="mt-2 btn_login"> انشاء حساب</button>
            )}

         
        </div>

        <div className='input_form_div' >
        <p className="mt-2 main_para text-green"> لديك حساب بالفعل ؟ قم <Link className='a_link a_underline' to="/login" >بتسجيل الدخول</Link> </p>
        </div>
        
      </form>


    </div>

    

    </div>

    </div>

    </div>
  )
}

export default Signup