import React, {useState, useEffect} from 'react';
import { getDocs , collection , db , setDoc , doc , deleteDoc } from '../../firebase';
import SideBar from '../components/Sidebar';
import sidebar_menu from '../components/sidebar-menu';


function Markers (  ) {
  
    const [ markersArray , setMarkersArray ] = useState([]);

    const [addShow , setAddShow] = useState(false);
    const [showTable , setTableShow] = useState(true);

    const [updateShow , setUpdateShow] = useState(false);
    const [ deleteShow , setDeleteShow] = useState(false);

    const [success , setSuccess ] = useState(false);

    const [error , setError ] = useState('');

    const [ markerName , setMarkerName ] = useState('');
    const [markerIcon , setMarkerIcon ] = useState('');
    const [markerCategory , setMarkerCateogry ] = useState('');
    const [markerDescription , setMarkerDescription ] = useState('');

    const [photoUrl , setPhotoUrl] = useState('');

    const [placeName , setPlaceName] = useState('');
    const [placeImage , setPlaceImage] = useState('');
    const [placeDesc , setPlaceDesc] = useState('');

    const [markerLattiude , setMarkerLattiude ] = useState('');
    const [markerLangitude , setMarkerLangitude ] = useState('');

    const [markerPhotos , setMarkerPhotos ] = useState('');
    const [markerSections , setMarkerSections ] = useState('');
  
    const [markerStars , setMarkerStars ] = useState('');
    const [markerLocation , setMarkerLocation ] = useState('');

    const [markerId , setMarkerId ] = useState('');

    const pushIntoPhotos = ( param ) => {

        setMarkerPhotos(oldArray => [...oldArray, param]);
        setPhotoUrl('');
       
      }

      const pushNewSection = ( name , desc , image ) => {

        let tempObject = {
            name , desc , image
        }
        setMarkerSections(oldArray => [...oldArray, tempObject]);
        setPlaceName('');
        setPlaceDesc('');
        setPlaceImage('');

       
      }

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

    const getMarkersData = async () => { 
      const querySnapshot = await getDocs(collection(db, "markers"));
      const usersDataArray = querySnapshot.docs
      .map((doc) => ({ ...doc.data(), id: doc.id }));
        
      setMarkersArray(usersDataArray);
     
    }
    getMarkersData();
  } , []);


    const addNewMarker =  async (e) => {

        e.preventDefault();
     

        if (markerName === ''  ) {
                    setError(' يرجى ادخال اسم العلامة ');
        }

        if (markerIcon === ''  ) {
          setError(' يرجى ادخال ايقونة العلامة ');
        }


     if (markerCategory === ''  ) {
      setError(' يرجى ادخال فئة مكان العلامة ');
     }

     if (markerDescription === ''  ) {
      setError(' يرجى ادخال وصف مكان العلامة ');
     }

     if (markerLattiude === ''  ) {
      setError(' يرجى ادخال احداثيات اكس العلامة ');
     }

     if (markerLangitude === ''  ) {
      setError(' يرجى ادخال احداثيات واي العلامة ');
     }

     if (markerStars === ''  ) {
      setError(' يرجى ادخال عدد نجوم تقييم العلامة ');
     }
     if (markerLocation === ''  ) {
        setError(' يرجى ادخال موقع العلامة ');
        }

   

            
        if (markerName !== '' && markerIcon !== '' && markerCategory && markerDescription && markerLattiude && markerLangitude && markerStars    ) {

            const markers = await setDoc(doc(db, "markers", makeid(20)), {
              name : markerName,
              icon: markerIcon,
              category: markerCategory,
              description: markerDescription,
              lattiude: markerLattiude,
              langitude: markerLangitude,
              photos :  markerPhotos,
              sections : markerSections,
 
              stars : markerStars,
              location: markerLocation
              
             
              });

            
                setSuccess(true);
                setError('');

                setTimeout(() => {
                    setSuccess('');
                    window.location.reload();
                } , 1350);

             

        }
    }

    const updateShownMethod = ( name , icon , category , description , lattiude , langitude , stars    , location , id ) => {

        setMarkerName(name);
        setMarkerIcon(icon);
        setMarkerCateogry(category);
        setMarkerDescription(description);
        setMarkerLattiude(lattiude);
        setMarkerLangitude(langitude);
        setMarkerStars(stars);
        setMarkerLocation(location);
     
        setMarkerId(id);
    
    
    
        determineShow('update');
      }

      const deleteShowMethod = ( name , icon , category , description , lattiude , langitude , stars    , location , id ) => {

        setMarkerName(name);
        setMarkerIcon(icon);
        setMarkerCateogry(category);
        setMarkerDescription(description);
        setMarkerLattiude(lattiude);
        setMarkerLangitude(langitude);
        setMarkerStars(stars);
        setMarkerLocation(location);
     
        setMarkerId(id);
    
            
        determineShow('delete');
      }

    const determineShow = ( param ) => {

        switch(param) {
            
            case 'show':
                setMarkerName('');
                setMarkerIcon('');
                setMarkerCateogry('');
                setMarkerDescription('');
                setMarkerLattiude('');
                setMarkerLangitude('');
                setMarkerLocation('');
                setMarkerStars('');
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
        const docRef = doc(db, "markers", markerId);
    
    const data = {

      name : markerName,
      icon: markerIcon,
      category: markerCategory,
      description: markerDescription,
      lattiude: markerLattiude,
      langitude: markerLangitude,
      // photos []
      // sections []

      stars : markerStars,
      location: markerLocation
    };
    
    if (markerName === ''  ) {
      setError(' يرجى ادخال اسم العلامة ');
}

if (markerIcon === ''  ) {
setError(' يرجى ادخال ايقونة العلامة ');
}


if (markerCategory === ''  ) {
setError(' يرجى ادخال فئة مكان العلامة ');
}

if (markerDescription === ''  ) {
setError(' يرجى ادخال وصف مكان العلامة ');
}

if (markerLattiude === ''  ) {
setError(' يرجى ادخال احداثيات اكس العلامة ');
}

if (markerLangitude === ''  ) {
setError(' يرجى ادخال احداثيات واي العلامة ');
}

if (markerStars === ''  ) {
setError(' يرجى ادخال عدد نجوم تقييم العلامة ');
}

if (markerLocation === ''  ) {
setError(' يرجى ادخال موقع العلامة ');
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
      
        await deleteDoc(doc(db, "markers", markerId));
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

                <h2 className='admin_headline' >اضافة علامة على الخريطة </h2>
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
                          
                <form onSubmit={addNewMarker} >

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1"> اسم العلامة </label>
               
                <input value={markerName} onChange={ (e) => setMarkerName(e.target.value)  } type="text" id='name' className="input_form" placeholder='اسم العلامة...' />
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1"> أيقونة العلامة </label>
               
                <input value={markerIcon} onChange={ (e) => setMarkerIcon(e.target.value)  } type="text" id='name' className="input_form" placeholder='أيقونة العلامة...' />
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1"> فئة العلامة </label>
            <select required name="category" id="category" value={markerCategory} className="input_form" onChange={(e) => {
        const selectedCategory = e.target.value;
        setMarkerCateogry(selectedCategory);
      }} >
      <option value=""   hidden>اختر الفئة</option>
      <option value="event">  فعالية </option>
      <option value="public_place">  مكان عام  </option>
      <option value="tourist">   منتجع سياحي  </option>
      <option value="coffee">   كوفيه  </option>
      <option value="restaurant">   مطعم  </option>
     
      </select>
               
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1"> وصف المكان </label>
               
                <input value={markerDescription} onChange={ (e) => setMarkerDescription(e.target.value)  } type="text" id='name' className="input_form" placeholder='وصف المكان...' />
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1">   صور المكان </label>
               
                <input value={photoUrl} onChange={ (e) => setPhotoUrl(e.target.value)  } type="text" id='name' className="input_form" placeholder=' اضافة صور للمكان...' />

                <button className="dashbord-header-btn_2 w-80 mt-1" onClick={() => pushIntoPhotos(photoUrl) } >اضافة الصورة</button>

            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1">   اقسام المكان </label>
               
                <input value={placeName} onChange={ (e) => setPlaceName(e.target.value)  } type="text" id='name' className="input_form mt-1" placeholder=' اسم القسم.' />
               
                <input value={placeDesc} onChange={ (e) => setPlaceDesc(e.target.value)  } type="text" id='name' className="input_form mt-1" placeholder=' وصف القسم.' />
               
                <input value={placeImage} onChange={ (e) => setPlaceImage(e.target.value)  } type="text" id='name' className="input_form mt-1" placeholder=' صورة القسم.' />

                <button className="dashbord-header-btn_2 w-80 mt-1" onClick={() => pushNewSection(placeName , placeDesc , placeImage) } >اضافة قسم</button>

            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1"> احداثيات - Lattiude </label>
               
                <input value={markerLattiude} onChange={ (e) => setMarkerLattiude(e.target.value)  } type="text" id='name' className="input_form" placeholder='احداثيات - Lattiude...' />
            </div>



            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1">   احداثيات - Longitude </label>
               
                <input value={markerLangitude} onChange={ (e) => setMarkerLangitude(e.target.value)  } type="text" id='name' className="input_form" placeholder=' احداثيات - Langitude...' />
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1">   موقع المكان </label>
               
                <input value={markerLocation} onChange={ (e) => setMarkerLocation(e.target.value)  } type="text" id='name' className="input_form" placeholder='موقع المكان...' />
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1"> تقييم مكان العلامة </label>
            <select required name="stars" id="stars" value={markerStars} className="input_form" onChange={(e) => {
        const selectedStar = e.target.value;
        setMarkerStars(selectedStar);
      }} >
      <option value=""   hidden>اختر عدد النجوم</option>
      <option value="1">  1 </option>
      <option value="2">  2   </option>
      <option value="3">   3   </option>
      <option value="4">   4  </option>
      <option value="5">   5  </option>
     
      </select>
               
            </div>

     

            <button  type='submit' className="dashbord-header-btn_2 w-80">اضافة العلامة</button>


            </form>
                </>

            )}
            
            {updateShow && (
                <>
                <div className='dashboard-content-header'>

                <h2 className='admin_headline' >تعديل العلامة </h2>
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

              
            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1"> اسم العلامة </label>
               
                <input value={markerName} onChange={ (e) => setMarkerName(e.target.value)  } type="text" id='name' className="input_form" placeholder='اسم العلامة...' />
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1"> أيقونة العلامة </label>
               
                <input value={markerIcon} onChange={ (e) => setMarkerIcon(e.target.value)  } type="text" id='name' className="input_form" placeholder='أيقونة العلامة...' />
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1"> فئة العلامة </label>
            <select required name="category" id="category" value={markerCategory} className="input_form" onChange={(e) => {
        const selectedCategory = e.target.value;
        setMarkerCateogry(selectedCategory);
      }} >
      <option value=""   hidden>اختر الفئة</option>
      <option value="event">  فعالية </option>
      <option value="public_place">  مكان عام  </option>
      <option value="tourist">   منتجع سياحي  </option>
      <option value="coffee">   كوفيه  </option>
      <option value="restaurant">   مطعم  </option>
     
      </select>
               
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1"> وصف المكان </label>
               
                <input value={markerDescription} onChange={ (e) => setMarkerDescription(e.target.value)  } type="text" id='name' className="input_form" placeholder='وصف المكان...' />
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1"> احداثيات - Lattiude </label>
               
                <input value={markerLattiude} onChange={ (e) => setMarkerLattiude(e.target.value)  } type="text" id='name' className="input_form" placeholder='احداثيات - Lattiude...' />
            </div>



            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1">   احداثيات - Longitude </label>
               
                <input value={markerLangitude} onChange={ (e) => setMarkerLangitude(e.target.value)  } type="text" id='name' className="input_form" placeholder=' احداثيات - Langitude...' />
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1">   موقع المكان </label>
               
                <input value={markerLocation} onChange={ (e) => setMarkerLocation(e.target.value)  } type="text" id='name' className="input_form" placeholder='موقع المكان...' />
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1"> تقييم مكان العلامة </label>
            <select required name="stars" id="stars" value={markerStars} className="input_form" onChange={(e) => {
        const selectedStar = e.target.value;
        setMarkerStars(selectedStar);
      }} >
      <option value=""   hidden>اختر عدد النجوم</option>
      <option value="1">  1 </option>
      <option value="2">  2   </option>
      <option value="3">   3   </option>
      <option value="4">   4  </option>
      <option value="5">   5  </option>
     
      </select>
               
            </div>

            <button className="dashbord-header-btn_2 w-80" type='submit' >تعديل ملعومات العلامة</button>


            </form>
                </>

            )}
            
            {deleteShow && (
                <>
                <div className='dashboard-content-header'>

                <h2 className='admin_headline' > حذف العلامة </h2>
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

              
          

            <button className="dashbord-header-btn_2 w-80 bg_red" type='submit'  >حذف العلامة</button>


            </form>
                </>

            )}

            {showTable && (
                <>
                <div className='dashboard-content-header'>
                    <h2 className='admin_headline' >قائمة العلامات </h2>
                    <div className='dashboard-content-search'>

                <button className="dashbord-header-btn_2" onClick={() => determineShow('add') } >  اضافة علامة جديدة</button>
                    </div>   
                   
                </div>

                {markersArray && (
                    <table className='admin_table_dashboard' >
                    <thead>
                        
                        <th className='table_item' >اسم العلامة</th>
                        <th className='table_item'>أيقونة الشريك</th>
                        <th className='table_item'>فئة العلامة</th>
                        <th className='table_item'>عدد النجوم </th>
                        <th className='table_item'>التعديل \ الحذف</th>

                    </thead>

                    <tbody>

                        {markersArray.map((item , i) => (
                            <tr key={i} >

                         
                            <td className='table_item_sm' > {item.name} </td>
                            <td    > 
                                <img src={item.icon} alt="" className="icon_big" />
                             </td>

                             <td className='table_item_sm' > {item.category} </td>
                             <td className='table_item_sm' > {item.stars} </td>
                            <td className='d-flex-c' >
                            <button className="edit_btn_admin" onClick={() => updateShownMethod(  item.name , item.icon , item.category , item.description , item.lattiude , item.langitude , item.stars    , item.location , item.id   )  }  >تعديل</button>
                            <button className="delete_btn_admin" onClick={() => deleteShowMethod( item.name , item.icon , item.category , item.description , item.lattiude , item.langitude , item.stars    , item.location  , item.id ) } >حذف</button>
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

export default Markers;