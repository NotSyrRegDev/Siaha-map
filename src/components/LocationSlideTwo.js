import React, { useState , useContext } from 'react'
import { AppContext } from '../context/AppContext';
import { Offcanvas, Carousel } from 'react-bootstrap';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { ImLocation } from 'react-icons/im';
import { MdArrowBackIos, MdArrowForwardIos, MdOutlineWatchLater, MdSearch, MdWatchLater } from 'react-icons/md';


const LocationSlideTwo = () => {

  const {retrive} = useContext(AppContext);
  const [ EventOE, setEventOE ] = useState('0px');

  const [ retreivealMarker ] = retrive;
  const carousel =['/images/landscape/3.jpg','/images/landscape/2.jpg','/images/landscape/1.jpg']
  const [ openDays, setopenDays ] = useState([
    {title:'الأحد',open:'يفتح 8 صباح',close:'يغلق 11:30 مساء'},
    {title:'الإثنين',open:'يفتح 8 صباح',close:'يغلق 11:30 مساء'},
    {title:'الثلاثاء',open:'يفتح 8 صباح',close:'يغلق 11:30 مساء'},
    {title:'الأربعاء',open:'يفتح 8 صباح',close:'يغلق 11:30 مساء'},
    {title:'الخميس',open:'يفتح 8 صباح',close:'يغلق 11:30 مساء'},
    {title:'الجمعة',open:'يفتح 2 ظهرا',close:'يغلق 11:30 مساء'},
    {title:'السبت',open:'يفتح 8 صباح',close:'يغلق 11:30 مساء'},
]);

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

        <Carousel controls={false} pause={false} className="bg-white mt-2" style={{width:'100%',height:'240px'}}>
                        {
                            carousel.map(function(item,i){
                                return <Carousel.Item key={i} interval={3000} className="p-0 text-end hand" style={{width:'100%',height:'240px'}}>
                                    <img src={item} className="" style={{objectFit:'cover',objectPosition:'center',width:'100%',height:'240px'}} />
                                </Carousel.Item>
                            })
                        }
                    </Carousel>

        <p className="main_para mt-2">  {retreivealMarker.description}</p>

        <div className='col-12 mt-2 r-direction'>
                        <div className='w-100 d-flex justify-content-between border-bottom p-2'>
                            <div className='d-flex align-items-center'>
                                <MdOutlineWatchLater size={24} className='text-primary'/>
                                <div className='fw-bold text-success ms-2 me-1'>مفتوح</div>
                                <div className='text-muted'>الإغلاق الساعة 11:30 مساء</div>
                            </div>
                            <div className='hand' onClick={()=> EventOE=="0px"?setEventOE('224px'):setEventOE('0px')}>
                                {
                                    EventOE=="0px"?<BsChevronDown/>:<BsChevronUp/>
                                }
                            </div>
                        </div>
                        <div className='overflow-hidden events-opens-trans' style={{height:EventOE}}>
                            <ul className='fw-bold text-muted' style={{listStyle:'square'}}>
                                {
                                    openDays.map(function(item,i){
                                        return <li className='d-flex' style={{marginTop:'5px'}}>
                                            <div className='text-dark ms-3'>{item['title']}</div>
                                            <div className='ms-3 text-muted'>{item['open']}</div>
                                            <div className='text-muted'>{item['close']}</div>
                                        </li>;
                                    })
                                }
                            </ul>
                        </div>
                    </div>

        <div className="place_sections mt-4 text-right">
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