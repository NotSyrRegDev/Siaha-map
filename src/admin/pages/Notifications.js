import React, {useState, useEffect} from 'react';
import { getDocs , collection , db , setDoc , doc , deleteDoc } from '../../firebase';
import SideBar from '../components/Sidebar';
import sidebar_menu from '../components/sidebar-menu';


function Notifications (  ) {
  
    const [ notificationsArray , setNotificationsArray ] = useState([]);
    const [ markersArray , setMarkersArray ] = useState([]);

    const [addShow , setAddShow] = useState(false);
    const [showTable , setTableShow] = useState(true);

    const [updateShow , setUpdateShow] = useState(false);
    const [ deleteShow , setDeleteShow] = useState(false);

    const [success , setSuccess ] = useState(false);

    const [error , setError ] = useState('');

    const [ placeName , setPlaceName ] = useState('');
    const [placeAction , setPlaceAction ] = useState('');
    const [placeRelate , setPlaceRelate ] = useState('');


    const [placePhotos , setPlacePhotos ] = useState([]);
    const [photoUrl , setPhotoUrl] = useState('');

    const [ placeId , setPlaceId ] = useState('');


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

    const pushIntoPhotos = ( param ) => {

      setPlacePhotos(oldArray => [...oldArray, param]);
      setPhotoUrl('');
     
    }
    
  useEffect(  () => {

    const getNotificationsData = async () => { 
      const querySnapshot = await getDocs(collection(db, "notifications"));
      const usersDataArray = querySnapshot.docs
      .map((doc) => ({ ...doc.data(), id: doc.id }));
        
      setNotificationsArray(usersDataArray);
     
    }
    getNotificationsData();
  } , []);

  useEffect(  () => {

    const getMarkersData = async () => { 
      const querySnapshot = await getDocs(collection(db, "markers"));
      const usersDataArray = querySnapshot.docs
      .map((doc) => ({ ...doc.data(), id: doc.id }));
        
      setMarkersArray(usersDataArray);
     
    }
    getMarkersData();
  } , []);


    const addNewNotification =  async (e) => {

        e.preventDefault();
     

        if (placeName === ''  ) {
          setError(' يرجى ادخال اسم المكان ');
    }
    
    if (placeAction === ''  ) {
    setError(' يرجى ادخال محتوى زر الاكشن ');
    }
    
    
    if (placeRelate === ''  ) {
    setError(' يرجى ادخال الاشعار مرتبط مع الفئة ');
    }
    
        if (placeName !== '' && placeAction !== '' && placeRelate ) {

            const notifications = await setDoc(doc(db, "notifications", makeid(20)), {

              place_name: placeName,
              place_action: placeAction,
              place_relate: placeRelate,
              place_photos: placePhotos
              
             
              });

            
                setSuccess(true);
                setError('');

                setTimeout(() => {
                    setSuccess('');
                    window.location.reload();
                } , 1350);

             

        }
    }

    const updateShownMethod = ( name , action , relate , id ) => {

        setPlaceName(name);
        setPlaceAction(action);
        setPlaceRelate(relate);
     
        setPlaceId(id);
    
    
    
        determineShow('update');
      }

      const deleteShowMethod = ( name , action , relate , id) => {

        setPlaceName(name);
        setPlaceAction(action);
        setPlaceRelate(relate);
     
        setPlaceId(id);
    
            
        determineShow('delete');
      }

    const determineShow = ( param ) => {

        switch(param) {
            
            case 'show':
                setPlaceName('');
                setPlaceAction('');
                setPlaceRelate('');
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
        const docRef = doc(db, "notifications", placeId);
    
    const data = {

      place_name: placeName,
      place_action: placeAction,
      place_relate: placeRelate,
      place_photos: placePhotos
    };
    
    if (placeName === ''  ) {
      setError(' يرجى ادخال اسم المكان ');
}

if (placeAction === ''  ) {
setError(' يرجى ادخال محتوى زر الاكشن ');
}


if (placeRelate === ''  ) {
setError(' يرجى ادخال الاشعار مرتبط مع الفئة ');
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
      
        await deleteDoc(doc(db, "notifications", placeId));
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

                <h2 className='admin_headline' >اضافة اشعارات على الخريطة </h2>
                <div className='dashboard-content-search'>

                <button className="dashbord-header-btn_2" onClick={() => determineShow('show') } >رؤية جميع الاشعارات</button>
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
                          
                <form onSubmit={addNewNotification} >

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1"> اسم المكان </label>
               
                <input value={placeName} onChange={ (e) => setPlaceName(e.target.value)  } type="text" id='name' className="input_form" placeholder='اسم المكان...' />
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1">  محتوى زر الاكشن </label>
               
                <input value={placeAction} onChange={ (e) => setPlaceAction(e.target.value)  } type="text" id='name' className="input_form" placeholder='محتوى زر الاكشن...' />
            </div>

                        
            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1">   صور الاشعار </label>
               
                <input value={photoUrl} onChange={ (e) => setPhotoUrl(e.target.value)  } type="text" id='name' className="input_form" placeholder='أيقونة العلامة...' />

                <button className="dashbord-header-btn_2 w-80 mt-1" onClick={() => pushIntoPhotos(photoUrl) } >اضافة الصورة</button>

            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1">  مرتبط مع العلامة </label>
            <select required name="category" id="category" value={placeRelate} className="input_form" onChange={(e) => {
        const selectedCategory = e.target.value;
        setPlaceRelate(selectedCategory);
      }} >
      <option value=""   hidden>اختر العلامة</option>
      {markersArray && (
        markersArray.map(( {name } ) => (
         
            <option value={name}> {name} </option>

        ))
      )}
     
      </select>
               
            </div>


   

            <button  type='submit' className="dashbord-header-btn_2 w-80">اضافة الاشعار</button>


            </form>
                </>

            )}
            
            {updateShow && (
                <>
                <div className='dashboard-content-header'>

                <h2 className='admin_headline' >تعديل الاشعار </h2>
                <div className='dashboard-content-search'>

                <button className="dashbord-header-btn_2" onClick={() => determineShow('show') } >رؤية جميع العلامات</button>
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

        

            <button className="dashbord-header-btn_2 w-80" type='submit' >تعديل ملعومات العلامة</button>


            </form>
                </>

            )}
            
            {deleteShow && (
                <>
                <div className='dashboard-content-header'>

                <h2 className='admin_headline' > حذف الاشعار </h2>
                <div className='dashboard-content-search'>

                <button className="dashbord-header-btn_2" onClick={() => determineShow('show') } >رؤية جميع الشركاء</button>
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

              
          

            <button className="dashbord-header-btn_2 w-80 bg_red" type='submit'  >حذف الاشعار</button>


            </form>
                </>

            )}

            {showTable && (
                <>
                <div className='dashboard-content-header'>
                    <h2 className='admin_headline' >قائمة الاشعارات </h2>
                    <div className='dashboard-content-search'>

                <button className="dashbord-header-btn_2" onClick={() => determineShow('add') } >  اضافة اشعار جديد</button>
                    </div>   
                   
                </div>

                {notificationsArray && (
                    <table className='admin_table_dashboard' >
                    <thead>
                        
                        <th className='table_item' >اسم المكان</th>
                        <th className='table_item'> زر الاكشن</th>
                        <th className='table_item'> مربتبط مع </th>
              
                        <th className='table_item'>التعديل \ الحذف</th>

                    </thead>

                    <tbody>

                        {notificationsArray.map((item , i) => (
                            <tr key={i} >

                         
                            <td className='table_item_sm' > {item.place_name} </td>
                        

                             <td className='table_item_sm' > {item.place_action} </td>
                             <td className='table_item_sm' > {item.place_relate} </td>
                            <td className='d-flex-c' >
                            <button className="edit_btn_admin" onClick={() => updateShownMethod(  item.place_name , item.place_action , item.place_relate , item.id   )  }  >تعديل</button>
                            <button className="delete_btn_admin" onClick={() => deleteShowMethod( item.place_name , item.place_action , item.place_relate , item.id ) } >حذف</button>
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

export default Notifications;