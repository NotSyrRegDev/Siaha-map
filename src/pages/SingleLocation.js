import React , {useState } from 'react';
import LocationSlideOne from '../components/LocationSlideOne';
import LocationSlideTwo from '../components/LocationSlideTwo';
import LocationSlideThree from '../components/LocationSlideThree';
import './SingleLocation.css';
import LocationSlideFour from '../components/LocationSlideFour';
import LocationSlideFive from '../components/LocationSlideFive';


const SingleLocation = (  ) => {

    const [showing , setShowing] = useState(true);
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
            <img src="/images/icons/left-arrow.png" alt="" className="icon_small toggle_nav_icon" onClick={() => setShowing(!showing)}  />
        ) : (
            <img src="/images/icons/right-arrow.png" alt="" className=" right_toggle_nav" onClick={() => setShowing(!showing)}  />
        )}
      

        <div className="buttons_location_map">
            <img src="/images/icons/left-arrow.png" className='left_arrrow_location' alt="" onClick={() => handleSliding(-1) } />
            <img src="/images/icons/right-arrow.png" className='right_arrrow_location' alt="" onClick={() => handleSliding(+1) } />
        </div>

    </div>
  )
}

export default SingleLocation