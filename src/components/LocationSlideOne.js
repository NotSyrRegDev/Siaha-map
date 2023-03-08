import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

const LocationSlideOne = () => {

    const {retrive} = useContext(AppContext);

    const [ retreivealMarker ] = retrive;

    let starsArray = [];

    const loopThrought = (param) => {
        for (let i =0; i < param; i++ ) {
            starsArray.push(i);
        }
    }


  return (
    <div className="location_info">

    <div className="main_image slide_main_div"  >

 

        <div className="content-main-image">

            

            <h1 className="headline_location">  {retreivealMarker.name}  </h1>
            <div className="mt-2"></div>
            <h1 className="subheadline_location">نوع المكان : <span className="span_location">
                {retreivealMarker.category == "event" && "فعالية"}
                {retreivealMarker.category == "public_place" && "مكان عام"}
                {retreivealMarker.category == "tourist" && "منتجع سياحي"}
                {retreivealMarker.category == "coffee" && "كوفيه"}
                {retreivealMarker.category == "restaurant" && "مطعم"}
            </span></h1>
        <div className="mt-2"></div>
            <div className="d-flex-c stars_location mt-1">
            {loopThrought(retreivealMarker.stars)}
            {starsArray && starsArray.map(( ) => (
                <img src="/images/icons/star.png" alt="" className="star_icon_small" />
            ))}
                
                
            </div>

        <div className="mt-3"></div>
            <div className="d-flex-c f-sv items_images">

                <div className="single_card_div_slideone">
                <img src="https://i.ibb.co/sVc58QV/329111665-1229633804427912-6684217809801508191-n.jpg" alt="" className="" />
                </div>

                <div className="single_card_div_slideone">
                <img src="https://i.ibb.co/XFxTXmv/329630900-1608878686242746-7133295819276987336-n.jpg" alt="" className="" />
                </div>

                <div className="single_card_div_slideone">
                <img src="https://i.ibb.co/QHQWFPZ/329002111-150326994524916-5346643032381265656-n.jpg" alt="" className="" />
                </div>
             

              
            </div>

            <div className="blur_box_location">

                <div className="d-flex-c f-sp div_blur">


                    <div className='text-center' >
                    <div className="single_info_blur">
                        <img src="/images/icons/triangle.png" alt="" className="" />
                      
                    </div>
                    <p className="blur_info">مفتوح</p>
                    </div>

                    <div className='text-center' >
                    <div className="single_info_blur">
                        <img src="/images/icons/pin.png" alt="" className="" />
                       
                    </div>
                    <p className="blur_info" >   { retreivealMarker.location } </p>
                    </div>


                    <div className="single_info_blur">
                        <button className="btn_explore">اكتشف المزيد</button>
                    </div>

                </div>

            </div>

        </div>
    </div>
   

    </div>
  )
}

export default LocationSlideOne