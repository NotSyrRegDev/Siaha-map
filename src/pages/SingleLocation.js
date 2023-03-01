import React , {useState , useEffect} from 'react';
import LocationSlideOne from '../components/LocationSlideOne';
import LocationSlideTwo from '../components/LocationSlideTwo';
import LocationSlideThree from '../components/LocationSlideThree';
import './SingleLocation.css';
import LocationSlideFour from '../components/LocationSlideFour';
import LocationSlideFive from '../components/LocationSlideFive';


const SingleLocation = ( { showActive = false } ) => {

    const [showing , setShowing] = useState(false);
    const [indexSlide , setIndexSlide] = useState(1);

    
    const handleSliding = (argument) => {

        if (indexSlide <= 0  ||  indexSlide >= 5 ) {
            setIndexSlide(1);
        }
        else {
           
            setIndexSlide(indexSlide + argument);
        }
        
        
        

        

    }

    function determineComponent(  )  {

        switch(indexSlide) {
            case 1:
                return <LocationSlideOne />;

            case 2:
                return <LocationSlideTwo />;

            case 3:
                return <LocationSlideThree />;

            case 4:
                return <LocationSlideFour />;

            case 5:
                return <LocationSlideFive />;

        }
    }
   

   

  return (
    <div className={`main_single_location  ${showing && 'active' }`} >

        {determineComponent()}
     
        {showing ? (
            <img src="/images/icons/right-nav.png" alt="" className="icon_small toggle_nav_icon" onClick={() => setShowing(!showing)}  />
        ) : (
            <img src="/images/icons/left-nav.png" alt="" className=" right_toggle_nav" onClick={() => setShowing(!showing)}  />
        )}
      

        <div className="buttons_location_map">
            <img src="/images/icons/left-nav.png" className='left_arrrow_location' alt="" onClick={() => handleSliding(-1) } />
            <img src="/images/icons/right-nav.png" className='right_arrrow_location' alt="" onClick={() => handleSliding(+1) } />
        </div>

    </div>
  )
}

export default SingleLocation