import React , {useState} from 'react';
import Map, {NavigationControl , Marker , FullscreenControl , Popup} from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useGeolocated } from "react-geolocated";
import 'maplibre-gl/dist/maplibre-gl.css';
import Notification from '../components/Notification';
import SingleLocation from '../pages/SingleLocation';


function MapPage() {

      const [ showLocation , setShowLocation ] = useState(false);

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
   
     <Notification />

     {showLocation && (
      <SingleLocation showActive={true} />
     )}
     
     
    <Map mapLib={maplibregl} 
      initialViewState={{
        longitude: coords.longitude,
        latitude: coords.latitude,
        zoom: 10
      }}
      
      style={{width: "100%", height: " calc(100vh )"}}
      mapStyle="https://api.maptiler.com/maps/streets-v2-night/style.json?key=zcK1SXnMzuUNV1RcYU2I"
    >
   <FullscreenControl />

   {/* <Popup longitude={42.547029} latitude={16.830353}
        anchor="bottom"
        >
        You are here
      </Popup> */}
     <Marker longitude={42.547029} latitude={16.930353} anchor="bottom" onClick={() => setShowLocation(!showLocation) }  >
      <img className='icon_small' src="/images/icons/place.png" />
    </Marker>


      <NavigationControl position="top-left" />
    </Map>
  </div>

  </>

) : (
    <div>Getting the location data&hellip; </div>
);
  
 

}

export default MapPage;