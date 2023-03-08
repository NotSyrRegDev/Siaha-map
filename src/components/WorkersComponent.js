import React , {useContext} from 'react';
import { AppContext } from '../context/AppContext';


const WorkersComponent = ( { id , name , image , item_price , bio , link , job } ) => {

  const {carts} = useContext(AppContext);
  const {price} = useContext(AppContext);



  const [cartItems , setCartItems ] = carts;
  const [priceValue , setPriceValue ] = price;


  
  const addToCart = ( id) => {
    const existObject =  cartItems.find( cart => cart.id === id   );
    if (existObject) {
      let index = cartItems.map(object => object.id).indexOf(existObject.id);

      const myNewArray = Object.assign([...cartItems], {
        [index]: {
            ...cartItems[index],
        }
    });


    setPriceValue( parseInt(priceValue) + parseInt(cartItems[index].price ) );
 
    setCartItems(myNewArray);


    }
   
    if (!existObject) {

      setCartItems(prevState => [...prevState , { id: id , name: name , price: item_price , job: job   }]  );
      setPriceValue( parseInt(priceValue) + parseInt(item_price ) );

   
    }

  
 
  }


  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };


  return (
    <div className="single_shop d-flex-c f-sp mt-1">

    <div className='content_iamge' >
      <img src={image} className='shopping_icon' alt="" />
    </div>

    <div className='content_shop text-right' >
    <h1 className="location_slidetwo_headline"> {name}  </h1>
    <div className="mt-1-small"></div>
    <p className="main_para_small">  {bio} </p>


 <div className="options_shopping text-right">

    <div className="single_option d-flex-c ">   
  
    <button className="btn_shopping" onClick={() => openInNewTab(link)} >معرض الاعمال</button>
    <div className="d-flex-c">
    <p><span className="span_bold"> {job}  </span> </p>      
    <img src="/images/icons/check.png" alt=""  />
    </div>
    
          
  
    </div>

    <div className="single_option d-flex-c">   

      
      <button className="mt-1 btn_shopping d-flex-c" onClick={() => addToCart(id) } > 
     
      <img src="/images/icons/online-shopping.png" alt="" className="icon_small" />
      <span>اضافة</span>
        </button> 
   
     

    <button className="mt-1 btn_pricing ">السعر : <span className="span_bold"> {item_price} </span> ريال</button> 
       
    </div>
    
 

    </div>

    
  
    </div>

    </div>
  )
}

export default WorkersComponent