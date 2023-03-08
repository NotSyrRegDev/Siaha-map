import React , {useState , useEffect, useContext} from 'react';
import Map, {NavigationControl , Marker , FullscreenControl , Popup} from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useGeolocated } from "react-geolocated";
import 'maplibre-gl/dist/maplibre-gl.css';
import Notification from '../components/Notification';
import SingleLocation from '../pages/SingleLocation';
import { getDocs , collection , db  } from '../firebase';
import { AppContext } from '../context/AppContext';


function MapPage() {

  const {retrive} = useContext(AppContext);

      const [ showLocation , setShowLocation ] = useState(false);
      const [ markersArray , setMarkersArray ] = useState([]);
      const [retreivealMarker , setRetreivalMarker ] = retrive;

      const handleMarkerClick = ( name , description , category , photos , sections , stars , location ) => {

        setRetreivalMarker({
          name,
          description,
          category,
          photos,
          sections,
          stars,
          location
        });

        setShowLocation(!showLocation);

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




  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
  useGeolocated({
      positionOptions: {
          enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
  });


  return !isGeolocationAvailable ? (
    <div>Your browser does not support Geolocation</div>
) : !isGeolocationEnabled ? (
    <div>Geolocation is not enabled</div>
) : coords ? (
  <>
      <div className="App">
   
     <Notification setShowLocation={setShowLocation} />

     {showLocation && (
      <SingleLocation showActive={true} />
     )}
     
     
    <Map mapLib={maplibregl} 
      initialViewState={{
        longitude: coords.longitude,
        latitude: coords.latitude,
        zoom: 7
      }}
      
      style={{width: "100%", height: " calc(100vh )"}}
      mapStyle="https://api.maptiler.com/maps/hybrid/style.json?key=zcK1SXnMzuUNV1RcYU2I"
    >
   <FullscreenControl />


      {markersArray && markersArray.map(( { id , icon , langitude , lattiude , name , description , category , photos , sections , stars , location } ) => (
        <Marker key={id}  longitude={langitude} latitude={lattiude} anchor="bottom" onClick={() => handleMarkerClick( name , description , category , photos , sections , stars , location ) }  >
      <img className='icon_mid borderd_map_icon' src={icon} />
    </Marker>
      )) }



      <NavigationControl position="top-left" />
    </Map>
  </div>

  </>

) : (
    <div>Getting the location data&hellip; </div>
);
  
 

}

export default MapPage;