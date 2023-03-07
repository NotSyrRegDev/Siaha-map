import React , {useState , useEffect} from 'react';
import './Notification.css';

const Notification = () => {

  const [activeAnimation , setActiveAnimation] = useState(false);

  useEffect(() => {

    setTimeout(() => {
      setActiveAnimation(true)
    } , 5000)

   

  } , [] );
  

  return (

    <div className={`gradient-border card ${activeAnimation ? 'active' : '' }`}>
    <img className='hero_image_card' src="/images/landscape/1.jpg" alt="Nature Image" />
    <div className="info">
      <h3>استكشف واحة جازان السياحية</h3>
      
      <a href="#" className="btn mt-1">استكشف الان</a>
    </div>
    <img className='close_icon_card' onClick={() =>  setActiveAnimation(false)} src="/images/icons/error.png" alt="" />
  </div>
  
  
  );
}

export default Notification