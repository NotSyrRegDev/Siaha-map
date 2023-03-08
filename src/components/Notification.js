import React , {useState , useEffect, useContext} from 'react';
import './Notification.css';
import { getDocs , collection , db  ,query , where } from '../firebase';
import { AppContext } from '../context/AppContext';

const Notification = ( { setShowLocation } ) => {

  const {retrive} = useContext(AppContext);

  const [randomlyPhoto , setRandomlyPhoto] = useState('https://i.ibb.co/sVc58QV/329111665-1229633804427912-6684217809801508191-n.jpg');
  const [activeAnimation , setActiveAnimation] = useState(false);
  const [ notificationsArray , setNotificationsArray ] = useState([]);
  const [retreivealMarker , setRetreivalMarker ] = retrive;

  useEffect(() => {

    setTimeout(() => {
      setActiveAnimation(true)
    } , 5000) 

  } , [] );

  
  
  useEffect(  () => {

    const getNotificationsData = async () => { 
      const querySnapshot = await getDocs(collection(db, "notifications"));
      const usersDataArray = querySnapshot.docs
      .map((doc) => ({ ...doc.data(), id: doc.id }));
        
      setNotificationsArray(usersDataArray);
     
    }
    getNotificationsData();
  } , []);
  let rand = Math.floor( Math.random() * notificationsArray.length  );

  setTimeout(() => {

    if (notificationsArray.length != 0) {

      let difference = notificationsArray[rand].place_photos.length  - 0;
      let randPhoto = Math.floor( Math.random() * difference  );
      setRandomlyPhoto( notificationsArray[rand].place_photos[randPhoto]  );

  
    }
  } , 12000);

  const getLocationData = async ( param ) => { 
    
    const q = query(collection(db, "markers"), where("name", "==", param ) );
 
  const querySnapshot = await getDocs(q);

  const markersDataArray = querySnapshot.docs ? querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })) : '';

  if (markersDataArray.length != 0) {
    setRetreivalMarker({
      name : markersDataArray[0].name,
      description : markersDataArray[0].description,
      category : markersDataArray[0].category,
      photos : markersDataArray[0].photos,
      sections : markersDataArray[0].sections,
      stars : markersDataArray[0].stars,
      location : markersDataArray[0].location
    });
    setShowLocation(true);
  }
   
  }
  


  return (

    <div className={`gradient-border card ${activeAnimation ? 'active' : '' }`}>

    {notificationsArray.length != 0 && (
      <>
      <img className='hero_image_card' src={randomlyPhoto} alt="Nature Image" />
          <div className="info">
            <h3>  استكشف {notificationsArray[rand].place_name}  </h3>
            
            <a href="#" className="btn mt-1" onClick={() => getLocationData( notificationsArray[rand].place_relate ) } > {notificationsArray[rand].place_action} </a>
          </div>
          <img className='close_icon_card' onClick={() =>  setActiveAnimation(false)} src="/images/icons/error.png" alt="" />
      </>
    )}
    
  
  </div>
  
  
  );
}

export default Notification