import React , {useState , useEffect} from 'react'
import WorkersComponent from './WorkersComponent';
import { getDocs , collection , db , where , query  } from '../firebase';

const LocationSlideFour = () => {

  const [ workersArray , setWorkersArray ] = useState([]);
  const [querySearch , setQuerySearch ]  = useState('photographer');

  useEffect(  () => {

    
    


    const getWorkersData = async () => { 

      const q = query(collection(db, "job_seekers"), where("cateogry", "==", querySearch ) );
   
    const querySnapshot = await getDocs(q);
  
    const workersDataArray = querySnapshot.docs ? querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })) : '';

    
  
    setWorkersArray(workersDataArray);
  
        

     
    }
    getWorkersData();
  } , [querySearch]);


  return (
    <div className="main_slide_two">

    <div className='container-sm' >

    <div className="top_area_slide_two"></div>
    <h1 className='location_slidetwo_headline' >  قم برحلتك لهذا المكان معنا</h1>

      <div className="d-flex-c f-sv categories_sections mt-2">

        <button className="btn_category" onClick={() => setQuerySearch('photographer') } >مصورين</button>

        <button className="btn_category">الفنادق</button>
      
        <button className="btn_category" onClick={() => setQuerySearch('tour_guide') } >مرشدين</button>
  
      </div>

        <div className="shopping_categories_div mt-5">

        {workersArray && (
          workersArray.map(( { id ,name , image , price , bio , link , job } ) => (
            <WorkersComponent id={id} name={name} image={image} item_price={price} bio={bio} link={link} job={job} />
          ))
        )}
       


        </div>

       

    </div>

      
      


    </div>
  )
}

export default LocationSlideFour