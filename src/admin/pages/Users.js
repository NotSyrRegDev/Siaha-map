import React, {useState, useEffect} from 'react';
import { getDocs , collection , db , setDoc , doc , deleteDoc , createUserWithEmailAndPassword , auth } from '../../firebase';
import SideBar from '../components/Sidebar';
import sidebar_menu from '../components/sidebar-menu';


function Users (  ) {
  
    const [ usersArray , setUsersArray ] = useState([]);


    const [addShow , setAddShow] = useState(false);
    const [showTable , setTableShow] = useState(true);

    const [updateShow , setUpdateShow] = useState(false);
    const [ deleteShow , setDeleteShow] = useState(false);

    const [success , setSuccess ] = useState(false);

    const [error , setError ] = useState('');

    const [ userName , setUserName ] = useState('');
    const [userAge , setUserAge ] = useState('');
    const [userCountry , setUserCountry ] = useState('');
    const [userEmail , setUserEmail ] = useState('');
    const [userPassword , setUserPassword ] = useState('');

    const [ userId , setUserId ] = useState('');


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


    
  useEffect(  () => {

    const getNotificationsData = async () => { 
      const querySnapshot = await getDocs(collection(db, "users"));
      const usersDataArray = querySnapshot.docs
      .map((doc) => ({ ...doc.data(), id: doc.id }));
        
      setUsersArray(usersDataArray);
     
    }
    getNotificationsData();
  } , []);

 


    const addNewUser =  async (e) => {

        e.preventDefault();
     

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
    
        if (userName !== '' && userAge !== '' && userCountry && userEmail && userPassword ) {

            const users = await setDoc(doc(db, "users", makeid(20)), {

              name: userName,
              age: userAge,
              country: userCountry,
              email: userEmail
              
             
              });

              createUserWithEmailAndPassword(auth, userEmail, userPassword)
              .then(() => {
     
                 
              })
              .catch(() => {
                 
                 
                  setError('خطأ في انشاء المستخدم');
                 
              });

            
                setSuccess(true);
                setError('');

                setTimeout(() => {
                    setSuccess('');
                    window.location.reload();
                } , 1350);

             

        }
    }

    const updateShownMethod = ( name , age , country , email , password , id ) => {

        setUserName(name);
        setUserAge(age);
        setUserCountry(country);
        setUserEmail(email);
        setUserPassword(password);
        setUserId(id);
    
        determineShow('update');
      }

      const deleteShowMethod = (  name , age , country , email , password , id ) => {

        setUserName(name);
        setUserAge(age);
        setUserCountry(country);
        setUserEmail(email);
        setUserPassword(password);
        setUserId(id);
    
            
        determineShow('delete');
      }

    const determineShow = ( param ) => {

        switch(param) {
            
            case 'show':
                setUserName('');
                setUserAge('');
                setUserCountry('');
                setUserEmail('');
                setUserPassword('');
                setTableShow(true);
                setAddShow(false);
                setUpdateShow(false);
                setDeleteShow(false);
                break;

            case 'update':
                setTableShow(false);
                setAddShow(false);
                setUpdateShow(true);
                setDeleteShow(false);
                break;

            case 'delete':
                setTableShow(false);
                setAddShow(false);
                setUpdateShow(false);
                setDeleteShow(true);
                break;

            case 'add':
                setTableShow(false);
                setAddShow(true);
                setUpdateShow(false);
                setDeleteShow(false);
                break;
        }
    }

    const updateRecord = async (e) => {
        e.preventDefault();
        const docRef = doc(db, "users", userId);
    
    const data = {

      name: userName,
      age: userAge,
      country: userCountry,
      email: userEmail
    };
    

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


    if (error === '') {
        setDoc(docRef, data)
    
        setSuccess(true);
        setTimeout(() => {
            setSuccess('');
            determineShow('show');
        } , 1350);
    }

  
    
    
      }

      const deleteRecord = async (e) => {
        e.preventDefault();
      
        await deleteDoc(doc(db, "users", userId));
        setSuccess(true);
        setTimeout(() => {
            setSuccess('');
            determineShow('show');
        } , 1350);
      }
  
      
   

    return(
        <div className="main_admin">

    <div className="sidebar_admin">
    <SideBar menu={sidebar_menu} />
    </div>

    <div className="content_admin">
    <div className='dashboard-content'>
            

            <div className='dashboard-content-container'>

            {addShow && (
                <>
                <div className='dashboard-content-header'>

                <h2 className='admin_headline'  >اضافة مستخدمين للموقع  </h2>
                <div className='dashboard-content-search'>

                <button className="dashbord-header-btn_2" onClick={() => determineShow('show') } >رؤية جميع المستخدمين</button>
                    </div>           

                </div>

                {error && (
                            <>
                            <h1 className="my-1 error_headline"> {error} </h1>
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

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1"> اسم المستخدم </label>
               
                <input value={userName} onChange={ (e) => setUserName(e.target.value)  } type="text" id='name' className="input_form" placeholder='اسم المستخدم...' />
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1">  عمر المستخدم </label>
               
                <input value={userAge} onChange={ (e) => setUserAge(e.target.value)  } type="number" id='name' className="input_form" placeholder='عمر المستخدم..' />
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1">  دولة المستخدم </label>
               
                <input value={userCountry} onChange={ (e) => setUserCountry(e.target.value)  } type="text" id='name' className="input_form" placeholder='دولة المستخدم..' />
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1">  ايميل المستخدم </label>
               
                <input value={userEmail} onChange={ (e) => setUserEmail(e.target.value)  } type="email" id='name' className="input_form" placeholder='ايميل المستخدم..' />
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1"> كلمة مرور المستخدم </label>
               
                <input value={userPassword} onChange={ (e) => setUserPassword(e.target.value)  } type="password" id='name' className="input_form" placeholder='كلمة مرور المستخدم..' />
            </div>

    

   

            <button  type='submit' className="dashbord-header-btn_2 w-80">اضافة مستخدم</button>


            </form>
                </>

            )}
            
            {updateShow && (
                <>
                <div className='dashboard-content-header'>

                <h2 className='admin_headline' >تعديل المستخدم </h2>
                <div className='dashboard-content-search'>

                <button className="dashbord-header-btn_2" onClick={() => determineShow('show') } >رؤية جميع المستخدمين</button>
                    </div>           

                </div>

                {error && (
                            <>
                            <h1 className="my-1 error_headline"> {error} </h1>
                            </>
                        )}

                {success && (
                    <>
                        <div className="popup_success">
                            <img src="/images/icons/check.png" alt="" />
                        </div>
                    </>
                )}
                          
                <form onSubmit={updateRecord} >

                <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1"> اسم المستخدم </label>
               
                <input value={userName} onChange={ (e) => setUserName(e.target.value)  } type="text" id='name' className="input_form" placeholder='اسم المستخدم...' />
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1">  عمر المستخدم </label>
               
                <input value={userAge} onChange={ (e) => setUserAge(e.target.value)  } type="number" id='name' className="input_form" placeholder='عمر المستخدم..' />
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1">  دولة المستخدم </label>
               
                <input value={userCountry} onChange={ (e) => setUserCountry(e.target.value)  } type="text" id='name' className="input_form" placeholder='دولة المستخدم..' />
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1">  ايميل المستخدم </label>
               
                <input value={userEmail} onChange={ (e) => setUserEmail(e.target.value)  } type="email" id='name' className="input_form" placeholder='ايميل المستخدم..' />
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1"> كلمة مرور المستخدم </label>
               
                <input value={userPassword} onChange={ (e) => setUserPassword(e.target.value)  } type="password" id='name' className="input_form" placeholder='كلمة مرور المستخدم..' />
            </div>

            <button className="dashbord-header-btn_2 w-80" type='submit' >تعديل ملعومات المستخدم</button>


            </form>
                </>

            )}
            
            {deleteShow && (
                <>
                <div className='dashboard-content-header'>

                <h2 className='admin_headline' > حذف المستخدم </h2>
                <div className='dashboard-content-search'>

                <button className="dashbord-header-btn_2" onClick={() => determineShow('show') } >رؤية جميع المستخدمين</button>
                    </div>           

                </div>

                {error && (
                            <>
                            <h1 className="my-1 error_headline"> {error} </h1>
                            </>
                        )}

                {success && (
                    <>
                        <div className="popup_success">
                            <img src="/images/icons/check.png" alt="" />
                        </div>
                    </>
                )}
                          
                <form onSubmit={deleteRecord} >

              
          

            <button className="dashbord-header-btn_2 w-80 bg_red" type='submit'  >حذف المستخدم</button>


            </form>
                </>

            )}

            {showTable && (
                <>
                <div className='dashboard-content-header'>
                    <h2 className='admin_headline' >قائمة المستخدمين </h2>
                    <div className='dashboard-content-search'>

                <button className="dashbord-header-btn_2" onClick={() => determineShow('add') } >  اضافة مستخدم جديد</button>
                    </div>   
                   
                </div>

                {usersArray && (
                    <table className='admin_table_dashboard' >
                    <thead>
                        
                        <th className='table_item' > الاسم </th>
                        <th className='table_item'>  العمر  </th>
                        <th className='table_item'>  الايميل </th>
                        <th className='table_item'>  الدولة </th>
              
                        <th className='table_item'>التعديل \ الحذف</th>

                    </thead>

                    <tbody>

                        {usersArray.map((item , i) => (
                            <tr key={i} >

                         
                            <td className='table_item_sm' > {item.name} </td>
                        

                             <td className='table_item_sm' > {item.age} </td>
                             <td className='table_item_sm' > {item.email} </td>
                             <td className='table_item_sm' > {item.country} </td>
                            <td className='d-flex-c' >
                            <button className="edit_btn_admin" onClick={() => updateShownMethod(  item.name , item.age , item.country , item.email , item.password , item.id  )  }  >تعديل</button>
                            <button className="delete_btn_admin" onClick={() => deleteShowMethod( item.name , item.age , item.country , item.email , item.password , item.id ) } >حذف</button>
                            </td>

                        </tr>
                        ))}


                    </tbody>

               
                </table>
                )}

              
                </>
            )}
                
             

               
            </div>
        </div>
    </div>

        </div>
    
    )
}

export default Users;