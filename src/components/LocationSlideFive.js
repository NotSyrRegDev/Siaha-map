import React , {useContext} from 'react'
import { AppContext } from '../context/AppContext';

const LocationSlideFive = () => {

  const {carts} = useContext(AppContext);
  const {price} = useContext(AppContext);



  const [cartItems , setCartItems ] = carts;
  const [priceValue , setPriceValue ] = price;

  return (
    <div className="main_slide_two">

    <div className='container-sm' >

      <div className="text-center top_area_slide_two">
        <img src="/images/icons/triangle.png" alt="" className="icon_small" />
        <h1 className="location_slidetwo_headline">اسم المشروع</h1>
      </div>

      {cartItems.length != 0 ? (
        <div className="grid_invoice_section mt-5">
        <h1 className="location_slidetwo_headline border_b">  السعر </h1>
        <h1 className="location_slidetwo_headline border_b">اسم المنتج</h1>
      </div>
      ) : ''}
     

      <div className="grid_invoice_section mt-2">

      {cartItems.length != 0 ? cartItems.map(( { name , price , job } ) => (
        <>
        <p className="main_para">   SAR {price}   </p>
      <p className="main_para"> حجز {job} - {name} </p>
        </>

      )) : ''}
      
     

     

      
      </div>

      {cartItems.length == 0 && (
        <p className="main_para"> لم تقم بطلب شئ حتى الان , يمكنك تصفح بكجاتنا واختيار منتج </p>
      ) }
      <div className="text-right my-3">
    
      <p className="main_para">المجموع كامل : {priceValue} ريال</p>
      </div>
      <div className="text-center btn_pay mt-3">الدفع الان</div>

       


    </div>

      
      


    </div>
  )
}

export default LocationSlideFive