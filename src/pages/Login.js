import React , {useState} from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword , auth } from '../firebase';
import './Login.css';


const Login = () => {

  let navigate = useNavigate();

  const [email , setEmail ] = useState('');
  const [password , setPassword] = useState('');
  const [loading , setLoading] = useState(false);
  const [error , setError] = useState('');
  const [success , setSuccess ] = useState(false);
  
  const loginUser =  async (e) => {
      
      e.preventDefault();

      if (email === ''  ) {
          setError('يرجى ادخال ايميل المستخدم')
  }

  if (password === ''  ) {
          setError('يرجى ادخال كلمة مرور المستخدم')
  }

      setLoading(true);

      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          

          const user = userCredential.user;
          const {  accessToken   , email} = user;
          const objectUser = {
              accessToken,
              email,          
          }
         

              localStorage.setItem("user",JSON.stringify(objectUser));
              setSuccess(true);
              setLoading(false);

              setTimeout(() => {
                setSuccess(false);
                navigate('/');
              } , 2500)
             
                
         
      }) .catch(() => {
    
       
          setError('فشل تسجيل الدخول يرجى التحقق من بياناتك');
             setLoading(false);
      });;
      


  }

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className='main_login_page' >

    <div className="flex-col">

   
    <div className="login_div_box">

    <div className="image_div" style={{ background: " linear-gradient(  rgba(0,0,0,0.4) , #010101 ) ,url('/images/landscape/1.jpg') center / cover" }} >
      <img className='logo_login_div' src="/images/icons/triangle-white.png" alt="" />
    </div>

    <div className="login_div">
   
          <h1 className="headline_login_form"> ! مرحبا مجددا </h1>
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

      <form onSubmit={loginUser} >
      <div className="input_form_div">
          <label htmlFor="" className="login_label_form">الايميل</label>
          <input value={email} onChange={(e) => setEmail(e.target.value) } type="email" className="login_input_form " />
        </div>

        <div className="input_form_div">
          <label htmlFor="" className="login_label_form">كلمة المرور</label>
          <input value={password} onChange={(e) => setPassword(e.target.value) } type="password" className="login_input_form " />
        </div>

        <div className='input_form_div' >

        {loading ? (
              <>
                                <img src="/images/icons/loading-spinner.gif" className='loading_spinner' alt="" />
                            </>
            ) : (
              <button type='submit' className="mt-2 btn_login">  تسجيل الدخول</button>
            )}

        
        </div>

        <div className='input_form_div' >
        <p className="mt-2 main_para text-green"> ليس لديك حساب ؟ قم   <Link className='a_link a_underline' to="/signUp" >  بانشاء حساب الان </Link> </p>
        </div>
      </form>


    </div>

    

    </div>

    </div>

    </div>
  )
}

export default Login