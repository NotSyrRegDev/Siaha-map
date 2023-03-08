import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

const LocationSlideTwo = () => {

  const {retrive} = useContext(AppContext);

  const [ retreivealMarker ] = retrive;

  return (
    <div className=" slide_main_div">

    <div className='container-sm' >
      
   

        <div className="top_area_slide_two d-flex-c f-sv f-wrap">
        <button className="btn_status_location"> 
        {retreivealMarker.category == "event" && "فعالية"}
                {retreivealMarker.category == "public_place" && "مكان عام"}
                {retreivealMarker.category == "tourist" && "منتجع سياحي"}
                {retreivealMarker.category == "coffee" && "كوفيه"}
                {retreivealMarker.category == "restaurant" && "مطعم"}
         </button>
        <h1 className='location_slidetwo_headline' >  {retreivealMarker.name} </h1>
        </div>

        <p className="main_para mt-2">  {retreivealMarker.description}</p>



        <div className="place_sections mt-2 text-right">
        <h1 className='location_slidetwo_headline' >  اقسام المكان </h1>
        <div className="mt-1"></div>
        
        <div className="single_place_section_div d-flex-c f-sv">

        <div className="section_img_div">
            <img src="https://i.ibb.co/QHQWFPZ/329002111-150326994524916-5346643032381265656-n.jpg" alt="" />
            </div>

            <div className="section_info_div">
              <h1> عنوان القسم </h1>
              <div className="mt-1-small"></div>
              <p>هنا بعض الكلام هنا بعض الكلام</p>
            </div>

         
        </div>

        <div className="single_place_section_div d-flex-c f-sv">

        <div className="section_img_div">
            <img src="https://i.ibb.co/QHQWFPZ/329002111-150326994524916-5346643032381265656-n.jpg" alt="" />
            </div>

            <div className="section_info_div">
              <h1> عنوان القسم </h1>
              <div className="mt-1-small"></div>
              <p>هنا بعض الكلام هنا بعض الكلام</p>
            </div>

         
        </div>

        </div>

        <h1 className='mt-3 text-right location_slidetwo_headline' >  الصور</h1>

<div className="grid_photos_area mt-2">

<div className="single_card_div_slidetwo">
    <img  src="/images/landscape/2.jpg" alt="" />
  
</div>
<div className="single_card_div_slidetwo">
    <img  src="/images/landscape/3.jpg" alt="" />
  
</div>

</div>

    </div>

      
      


    </div>
  )
}

export default LocationSlideTwo