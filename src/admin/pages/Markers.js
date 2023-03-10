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
                    setError(' ???????? ?????????? ?????? ?????????????? ');
        }

        if (markerIcon === ''  ) {
          setError(' ???????? ?????????? ???????????? ?????????????? ');
        }


     if (markerCategory === ''  ) {
      setError(' ???????? ?????????? ?????? ???????? ?????????????? ');
     }

     if (markerDescription === ''  ) {
      setError(' ???????? ?????????? ?????? ???????? ?????????????? ');
     }

     if (markerLattiude === ''  ) {
      setError(' ???????? ?????????? ???????????????? ?????? ?????????????? ');
     }

     if (markerLangitude === ''  ) {
      setError(' ???????? ?????????? ???????????????? ?????? ?????????????? ');
     }

     if (markerStars === ''  ) {
      setError(' ???????? ?????????? ?????? ???????? ?????????? ?????????????? ');
     }
     if (markerLocation === ''  ) {
        setError(' ???????? ?????????? ???????? ?????????????? ');
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
      setError(' ???????? ?????????? ?????? ?????????????? ');
}

if (markerIcon === ''  ) {
setError(' ???????? ?????????? ???????????? ?????????????? ');
}


if (markerCategory === ''  ) {
setError(' ???????? ?????????? ?????? ???????? ?????????????? ');
}

if (markerDescription === ''  ) {
setError(' ???????? ?????????? ?????? ???????? ?????????????? ');
}

if (markerLattiude === ''  ) {
setError(' ???????? ?????????? ???????????????? ?????? ?????????????? ');
}

if (markerLangitude === ''  ) {
setError(' ???????? ?????????? ???????????????? ?????? ?????????????? ');
}

if (markerStars === ''  ) {
setError(' ???????? ?????????? ?????? ???????? ?????????? ?????????????? ');
}

if (markerLocation === ''  ) {
setError(' ???????? ?????????? ???????? ?????????????? ');
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

                <h2 className='admin_headline' >?????????? ?????????? ?????? ?????????????? </h2>
                <div className='dashboard-content-search'>

                <button className="dashbord-header-btn_2" onClick={() => determineShow('show') } >???????? ???????? ????????????????</button>
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
            <label htmlFor="name" className="label_form mx-1 mb-1"> ?????? ?????????????? </label>
               
                <input value={markerName} onChange={ (e) => setMarkerName(e.target.value)  } type="text" id='name' className="input_form" placeholder='?????? ??????????????...' />
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1"> ???????????? ?????????????? </label>
               
                <input value={markerIcon} onChange={ (e) => setMarkerIcon(e.target.value)  } type="text" id='name' className="input_form" placeholder='???????????? ??????????????...' />
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1"> ?????? ?????????????? </label>
            <select required name="category" id="category" value={markerCategory} className="input_form" onChange={(e) => {
        const selectedCategory = e.target.value;
        setMarkerCateogry(selectedCategory);
      }} >
      <option value=""   hidden>???????? ??????????</option>
      <option value="event">  ???????????? </option>
      <option value="public_place">  ???????? ??????  </option>
      <option value="tourist">   ?????????? ??????????  </option>
      <option value="coffee">   ??????????  </option>
      <option value="restaurant">   ????????  </option>
     
      </select>
               
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1"> ?????? ???????????? </label>
               
                <input value={markerDescription} onChange={ (e) => setMarkerDescription(e.target.value)  } type="text" id='name' className="input_form" placeholder='?????? ????????????...' />
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1">   ?????? ???????????? </label>
               
                <input value={photoUrl} onChange={ (e) => setPhotoUrl(e.target.value)  } type="text" id='name' className="input_form" placeholder=' ?????????? ?????? ????????????...' />

                <button className="dashbord-header-btn_2 w-80 mt-1" onClick={() => pushIntoPhotos(photoUrl) } >?????????? ????????????</button>

            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1">   ?????????? ???????????? </label>
               
                <input value={placeName} onChange={ (e) => setPlaceName(e.target.value)  } type="text" id='name' className="input_form mt-1" placeholder=' ?????? ??????????.' />
               
                <input value={placeDesc} onChange={ (e) => setPlaceDesc(e.target.value)  } type="text" id='name' className="input_form mt-1" placeholder=' ?????? ??????????.' />
               
                <input value={placeImage} onChange={ (e) => setPlaceImage(e.target.value)  } type="text" id='name' className="input_form mt-1" placeholder=' ???????? ??????????.' />

                <button className="dashbord-header-btn_2 w-80 mt-1" onClick={() => pushNewSection(placeName , placeDesc , placeImage) } >?????????? ??????</button>

            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1"> ???????????????? - Lattiude </label>
               
                <input value={markerLattiude} onChange={ (e) => setMarkerLattiude(e.target.value)  } type="text" id='name' className="input_form" placeholder='???????????????? - Lattiude...' />
            </div>



            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1">   ???????????????? - Longitude </label>
               
                <input value={markerLangitude} onChange={ (e) => setMarkerLangitude(e.target.value)  } type="text" id='name' className="input_form" placeholder=' ???????????????? - Langitude...' />
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1">   ???????? ???????????? </label>
               
                <input value={markerLocation} onChange={ (e) => setMarkerLocation(e.target.value)  } type="text" id='name' className="input_form" placeholder='???????? ????????????...' />
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1"> ?????????? ???????? ?????????????? </label>
            <select required name="stars" id="stars" value={markerStars} className="input_form" onChange={(e) => {
        const selectedStar = e.target.value;
        setMarkerStars(selectedStar);
      }} >
      <option value=""   hidden>???????? ?????? ????????????</option>
      <option value="1">  1 </option>
      <option value="2">  2   </option>
      <option value="3">   3   </option>
      <option value="4">   4  </option>
      <option value="5">   5  </option>
     
      </select>
               
            </div>

     

            <button  type='submit' className="dashbord-header-btn_2 w-80">?????????? ??????????????</button>


            </form>
                </>

            )}
            
            {updateShow && (
                <>
                <div className='dashboard-content-header'>

                <h2 className='admin_headline' >?????????? ?????????????? </h2>
                <div className='dashboard-content-search'>

                <button className="dashbord-header-btn_2" onClick={() => determineShow('show') } >???????? ???????? ????????????????</button>
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
            <label htmlFor="name" className="label_form mx-1 mb-1"> ?????? ?????????????? </label>
               
                <input value={markerName} onChange={ (e) => setMarkerName(e.target.value)  } type="text" id='name' className="input_form" placeholder='?????? ??????????????...' />
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1"> ???????????? ?????????????? </label>
               
                <input value={markerIcon} onChange={ (e) => setMarkerIcon(e.target.value)  } type="text" id='name' className="input_form" placeholder='???????????? ??????????????...' />
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1"> ?????? ?????????????? </label>
            <select required name="category" id="category" value={markerCategory} className="input_form" onChange={(e) => {
        const selectedCategory = e.target.value;
        setMarkerCateogry(selectedCategory);
      }} >
      <option value=""   hidden>???????? ??????????</option>
      <option value="event">  ???????????? </option>
      <option value="public_place">  ???????? ??????  </option>
      <option value="tourist">   ?????????? ??????????  </option>
      <option value="coffee">   ??????????  </option>
      <option value="restaurant">   ????????  </option>
     
      </select>
               
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1"> ?????? ???????????? </label>
               
                <input value={markerDescription} onChange={ (e) => setMarkerDescription(e.target.value)  } type="text" id='name' className="input_form" placeholder='?????? ????????????...' />
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1"> ???????????????? - Lattiude </label>
               
                <input value={markerLattiude} onChange={ (e) => setMarkerLattiude(e.target.value)  } type="text" id='name' className="input_form" placeholder='???????????????? - Lattiude...' />
            </div>



            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1">   ???????????????? - Longitude </label>
               
                <input value={markerLangitude} onChange={ (e) => setMarkerLangitude(e.target.value)  } type="text" id='name' className="input_form" placeholder=' ???????????????? - Langitude...' />
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1">   ???????? ???????????? </label>
               
                <input value={markerLocation} onChange={ (e) => setMarkerLocation(e.target.value)  } type="text" id='name' className="input_form" placeholder='???????? ????????????...' />
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1"> ?????????? ???????? ?????????????? </label>
            <select required name="stars" id="stars" value={markerStars} className="input_form" onChange={(e) => {
        const selectedStar = e.target.value;
        setMarkerStars(selectedStar);
      }} >
      <option value=""   hidden>???????? ?????? ????????????</option>
      <option value="1">  1 </option>
      <option value="2">  2   </option>
      <option value="3">   3   </option>
      <option value="4">   4  </option>
      <option value="5">   5  </option>
     
      </select>
               
            </div>

            <button className="dashbord-header-btn_2 w-80" type='submit' >?????????? ?????????????? ??????????????</button>


            </form>
                </>

            )}
            
            {deleteShow && (
                <>
                <div className='dashboard-content-header'>

                <h2 className='admin_headline' > ?????? ?????????????? </h2>
                <div className='dashboard-content-search'>

                <button className="dashbord-header-btn_2" onClick={() => determineShow('show') } >???????? ???????? ??????????????</button>
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

              
          

            <button className="dashbord-header-btn_2 w-80 bg_red" type='submit'  >?????? ??????????????</button>


            </form>
                </>

            )}

            {showTable && (
                <>
                <div className='dashboard-content-header'>
                    <h2 className='admin_headline' >?????????? ???????????????? </h2>
                    <div className='dashboard-content-search'>

                <button className="dashbord-header-btn_2" onClick={() => determineShow('add') } >  ?????????? ?????????? ??????????</button>
                    </div>   
                   
                </div>

                {markersArray && (
                    <table className='admin_table_dashboard' >
                    <thead>
                        
                        <th className='table_item' >?????? ??????????????</th>
                        <th className='table_item'>???????????? ????????????</th>
                        <th className='table_item'>?????? ??????????????</th>
                        <th className='table_item'>?????? ???????????? </th>
                        <th className='table_item'>?????????????? \ ??????????</th>

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
                            <button className="edit_btn_admin" onClick={() => updateShownMethod(  item.name , item.icon , item.category , item.description , item.lattiude , item.langitude , item.stars    , item.location , item.id   )  }  >??????????</button>
                            <button className="delete_btn_admin" onClick={() => deleteShowMethod( item.name , item.icon , item.category , item.description , item.lattiude , item.langitude , item.stars    , item.location  , item.id ) } >??????</button>
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