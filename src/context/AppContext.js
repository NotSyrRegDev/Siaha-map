import React , {  useState, createContext } from 'react';


export const AppContext = createContext();

export const AppProvider = (props) => {

    const [cartItems , setCartItems] = useState([]);
    const [priceItems , setPriceItems] = useState(0);

    const [retreivealMarker , setRetreivalMarker ] = useState({
        "name": "جبال فيفا",
         "category": "public_place",
         "stars": 4,
         "description" : "  تقع جبال فيفا المذهلة والتي تُعد أكثر الأماكن السياحية زيارة في المنطقة بجنوب السعودية شرق مدينة جيزان وهي من الأماكن السياحية المذهلة والشهيرة بالمناظر الطبيعية الخلابة."
     });



   
   


    return (
            <AppContext.Provider value={{ 
                retrive: [retreivealMarker , setRetreivalMarker],
                carts: [cartItems , setCartItems] ,
                 price: [priceItems , setPriceItems]
                  }}  >
                {props.children}
            </AppContext.Provider>
    )
}