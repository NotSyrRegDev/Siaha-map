import React , {useState , useEffect} from 'react';
import {   Navigate } from 'react-router-dom';
import { signInWithEmailAndPassword , auth } from '../../firebase';
import './Login.css';

const Login = (  ) => {
    
  


    const [email , setEmail ] = useState('');
    const [password , setPassword] = useState('');
    const [loading , setLoading] = useState(false);
    const [error , setError] = useState('');

    
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
                setLoading(false);
               
                  
           
        }) .catch((error) => {
      
            const errorMessage = error.message;
            setError('فشل تسجيل الدخول يرجى التحقق من بياناتك');
               setLoading(false);
        });;
        


    }

    const user = JSON.parse(localStorage.getItem("user"));


  return (
    <div className='login_fairouza' >

        {user ? (
                <>
                <Navigate to="/admin" replace /> : ''
                </>
        ) : (
            <div className="container_login_form">
            <img src="/images/icons/logo.png" alt="" />

            {error && (
                            <>
                            <h1 className="my-1 error_headline"> {error} </h1>
                            </>
                        )}

                        

            <form onSubmit={loginUser}  >

                <div className="action_form_div">

                <label htmlFor="email" className="label_form mx-1 mb-1">  الايميل </label>
               
                <input value={email} onChange={ (e) => setEmail(e.target.value)  } type="email" id='email'  className="input_form" placeholder='ادخل الايميل' />
                </div>

                <div className="action_form_div">

                <label htmlFor="name" className="label_form mx-1 mb-1">  كلمة المرور </label>
               
                <input value={password} onChange={ (e) => setPassword(e.target.value)  } type="password" id='password' className="input_form" placeholder='ادخل كلمة المرور'   />
                </div>

                {loading ? (
                            <>
                                <img src="/images/icons/loading-spinner.gif" className='loading_spinner' alt="" />
                            </>
                        ) : (
                            <>
                            <button type='submit' className="edit_btn_admin w-80 ">تسجيل الدخول</button>
                            </>
                        )}

            

            </form>
        </div>
        )}

    </div>
  )
}

export default Login