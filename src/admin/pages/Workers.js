import React, {useState, useEffect} from 'react';
import { getDocs , collection , db , setDoc , doc , deleteDoc } from '../../firebase';
import SideBar from '../components/Sidebar';
import sidebar_menu from '../components/sidebar-menu';


function Workers (  ) {
  
    const [ workersArray , setWorkersArray ] = useState([]);

    const [addShow , setAddShow] = useState(false);
    const [showTable , setTableShow] = useState(true);

    const [updateShow , setUpdateShow] = useState(false);
    const [ deleteShow , setDeleteShow] = useState(false);

    const [success , setSuccess ] = useState(false);

    const [error , setError ] = useState('');

    const [ workerName , setWorkerName ] = useState('');
    const [workerBio , setWorkerBio ] = useState('');
    const [workerImage , setWorkerImage ] = useState('');
    const [wrokerCategory , setWorkerCategory ] = useState('');
    const [workerPrice , setWorkerPrice ] = useState('');
    const [workerAvaliableAt , setWorkerAvaliableAt ] = useState('');
    const [workerLink , setWorkerLink ] = useState('');
    const [workerJob , setWorkerJob ] = useState('');
    const [workerID , setWorkerId ] = useState('');


    const makeid = (length) =>  {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
       }
       return result;
    }

    
  useEffect(  () => {

    const getWorkersData = async () => { 
      const querySnapshot = await getDocs(collection(db, "job_seekers"));
      const usersDataArray = querySnapshot.docs
      .map((doc) => ({ ...doc.data(), id: doc.id }));
        
      setWorkersArray(usersDataArray);
     
    }
    getWorkersData();
  } , []);


    const addNewWorker =  async (e) => {

        e.preventDefault();
     

        if (workerName === ''  ) {
                    setError('يرجى ادخال اسم الشريك');
        }

        if (workerBio === ''  ) {
                    setError('يرجى ادخال وصف الشريك');
        }


     if (workerImage === ''  ) {
        setError('يرجى ادخال صورة الشريك');
     }

     if (wrokerCategory === ''  ) {
        setError('يرجى ادخال قطاع الشريك');
     }

     if (workerPrice === ''  ) {
        setError('يرجى ادخال سعر خدمة الشريك');
     }

     if (workerAvaliableAt === ''  ) {
        setError('يرجى ادخال مكان توافر الشريك');
     }

     if (workerLink === ''  ) {
                    setError('يرجى ادخال رابط اعمال الشريك');
     }

     if (workerJob === ''  ) {
        setError('يرجى ادخال وظيفة الشريك')
     }

            
        if (workerName !== '' && workerImage !== '' && workerBio && wrokerCategory && workerPrice && workerAvaliableAt && workerLink && workerJob   ) {

            const jobSeekers = await setDoc(doc(db, "job_seekers", makeid(20)), {
                name : workerName,
                image: workerImage,
                bio: workerBio,
                link : workerLink,
                available_at: workerAvaliableAt,
                cateogry: wrokerCategory,
                job: workerJob,
                price: workerPrice,
             
              });

            
                setSuccess(true);
                setError('');

                setTimeout(() => {
                    setSuccess('');
                    window.location.reload();
                } , 1350);

             

        }
    }

    const updateShownMethod = ( name , image , bio , category , price , avaliable_at , link , job  , id ) => {

        setWorkerName(name);
        setWorkerImage(image);
        setWorkerBio(bio);
        setWorkerCategory(category);
        setWorkerPrice(price);
        setWorkerAvaliableAt(avaliable_at);
        setWorkerLink(link);
        setWorkerJob(job);
     
        setWorkerId(id);
    
    
    
        determineShow('update');
      }

      const deleteShowMethod = ( name , image , bio , category , price , avaliable_at , link , job  , id  ) => {

        setWorkerName(name);
        setWorkerImage(image);
        setWorkerBio(bio);
        setWorkerCategory(category);
        setWorkerPrice(price);
        setWorkerAvaliableAt(avaliable_at);
        setWorkerLink(link);
        setWorkerJob(job);
     
        setWorkerId(id);
    
            
        determineShow('delete');
      }

    const determineShow = ( param ) => {

        switch(param) {
            
            case 'show':
                setWorkerName('');
                setWorkerImage('');
                setWorkerBio('');
                setWorkerCategory('');
                setWorkerPrice('');
                setWorkerAvaliableAt('');
                setWorkerLink('');
                setWorkerJob('');
                setTableShow(true);
                setAddShow(false);
                setUpdateShow(false);
                setDeleteShow(false);
                break;

            case 'update':
                setTableShow(false);
                setAddShow(false);
                setUpdateShow(true);
                setDeleteShow(false);
                break;

            case 'delete':
                setTableShow(false);
                setAddShow(false);
                setUpdateShow(false);
                setDeleteShow(true);
                break;

            case 'add':
                setTableShow(false);
                setAddShow(true);
                setUpdateShow(false);
                setDeleteShow(false);
                break;
        }
    }

    const updateRecord = async (e) => {
        e.preventDefault();
        const docRef = doc(db, "job_seekers", workerID);
    
    const data = {

                name : workerName,
                image: workerImage,
                bio: workerBio,
                link : workerLink,
                available_at: workerAvaliableAt,
                cateogry: wrokerCategory,
                job: workerJob,
                price: workerPrice,
    };
    
    if (workerName === ''  ) {
        setError('يرجى ادخال اسم الشريك');
}

if (workerBio === ''  ) {
        setError('يرجى ادخال وصف الشريك');
}


if (workerImage === ''  ) {
setError('يرجى ادخال صورة الشريك');
}

if (wrokerCategory === ''  ) {
setError('يرجى ادخال قطاع الشريك');
}

if (workerPrice === ''  ) {
setError('يرجى ادخال سعر خدمة الشريك');
}

if (workerAvaliableAt === ''  ) {
setError('يرجى ادخال مكان توافر الشريك');
}

if (workerLink === ''  ) {
        setError('يرجى ادخال رابط اعمال الشريك');
}

if (workerJob === ''  ) {
setError('يرجى ادخال وظيفة الشريك')
}


    if (error === '') {
        setDoc(docRef, data)
    
        setSuccess(true);
        setTimeout(() => {
            setSuccess('');
            determineShow('show');
        } , 1350);
    }

  
    
    
      }

      const deleteRecord = async (e) => {
        e.preventDefault();
      
        await deleteDoc(doc(db, "job_seekers", workerID));
        setSuccess(true);
        setTimeout(() => {
            setSuccess('');
            determineShow('show');
        } , 1350);
      }
  
      
   

    return(
        <div className="main_admin">

    <div className="sidebar_admin">
    <SideBar menu={sidebar_menu} />
    </div>

    <div className="content_admin">
    <div className='dashboard-content'>
            

            <div className='dashboard-content-container'>

            {addShow && (
                <>
                <div className='dashboard-content-header'>

                <h2 className='admin_headline' >اضافة شريك </h2>
                <div className='dashboard-content-search'>

                <button className="dashbord-header-btn_2" onClick={() => determineShow('show') } >رؤية جميع الشركاء</button>
                    </div>           

                </div>

                {error && (
                            <>
                            <h1 className="my-1 error_headline"> {error} </h1>
                            </>
                        )}

                {success && (
                    <>
                        <div className="popup_success">
                            <img src="/images/icons/check.png" alt="" />
                        </div>
                    </>
                )}
                          
                <form onSubmit={addNewWorker} >

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1"> اسم الشريك </label>
               
                <input value={workerName} onChange={ (e) => setWorkerName(e.target.value)  } type="text" id='name' className="input_form" placeholder='اسم الشريك...' />
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1"> صورة الشريك </label>
               
                <input value={workerImage} onChange={ (e) => setWorkerImage(e.target.value)  } type="text" id='name' className="input_form" placeholder='صورة الشريك...' />
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1"> بايو الشريك </label>
               
                <input value={workerBio} onChange={ (e) => setWorkerBio(e.target.value)  } type="text" id='name' className="input_form" placeholder='بايو الشريك...' />
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1"> رابط اعمال الشريك </label>
               
                <input value={workerLink} onChange={ (e) => setWorkerLink(e.target.value)  } type="text" id='name' className="input_form" placeholder='رابط اعمال الشريك...' />
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1"> قطاع الشريك </label>
            <select required name="category" id="category" value={wrokerCategory} className="input_form" onChange={(e) => {
        const selectedCategory = e.target.value;
        setWorkerCategory(selectedCategory);
      }} >
      <option value=""   hidden>اختر القطاع</option>
      <option value="photographer">  مصور </option>
      <option value="tour_guide"> مرشد سياحي  </option>
     
      </select>
               
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1"> وظيفة الشريك </label>
               
                <input value={workerJob} onChange={ (e) => setWorkerJob(e.target.value)  } type="text" id='name' className="input_form" placeholder='وظيفة الشريك...' />
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1"> سعر الشريك </label>
               
                <input value={workerPrice} onChange={ (e) => setWorkerPrice(e.target.value)  } type="text" id='name' className="input_form" placeholder='سعر الشريك...' />
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1">  مكان توافر الشريك </label>
               
            <select required name="avaliableAt" id="avaliableAt" value={workerAvaliableAt} className="input_form" onChange={(e) => {
        const selectedLocation = e.target.value;
        setWorkerAvaliableAt(selectedLocation);
      }} >
      <option value=""   hidden>اختر المكان</option>
      <option value="jazan">  جازان </option>

     
      </select>
            </div>

        

            <button  type='submit' className="dashbord-header-btn_2 w-80">اضافة الشريك</button>


            </form>
                </>

            )}
            
            {updateShow && (
                <>
                <div className='dashboard-content-header'>

                <h2 className='admin_headline' >تعديل الشريك </h2>
                <div className='dashboard-content-search'>

                <button className="dashbord-header-btn_2" onClick={() => determineShow('show') } >رؤية جميع الشركاء</button>
                    </div>           

                </div>

                {error && (
                            <>
                            <h1 className="my-1 error_headline"> {error} </h1>
                            </>
                        )}

                {success && (
                    <>
                        <div className="popup_success">
                            <img src="/images/icons/check.png" alt="" />
                        </div>
                    </>
                )}
                          
                <form onSubmit={updateRecord} >

                <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1"> اسم الشريك </label>
               
                <input value={workerName} onChange={ (e) => setWorkerName(e.target.value)  } type="text" id='name' className="input_form" placeholder='اسم الشريك...' />
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1"> صورة الشريك </label>
               
                <input value={workerImage} onChange={ (e) => setWorkerImage(e.target.value)  } type="text" id='name' className="input_form" placeholder='صورة الشريك...' />
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1"> بايو الشريك </label>
               
                <input value={workerBio} onChange={ (e) => setWorkerBio(e.target.value)  } type="text" id='name' className="input_form" placeholder='بايو الشريك...' />
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1"> رابط اعمال الشريك </label>
               
                <input value={workerLink} onChange={ (e) => setWorkerLink(e.target.value)  } type="text" id='name' className="input_form" placeholder='رابط اعمال الشريك...' />
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1"> قطاع الشريك </label>
            <select required name="category" id="category" value={wrokerCategory} className="input_form" onChange={(e) => {
        const selectedCategory = e.target.value;
        setWorkerCategory(selectedCategory);
      }} >
      <option value=""   hidden>اختر القطاع</option>
      <option value="photographer">  مصور </option>
      <option value="tour_guide"> مرشد سياحي  </option>
     
      </select>
               
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1"> وظيفة الشريك </label>
               
                <input value={workerJob} onChange={ (e) => setWorkerJob(e.target.value)  } type="text" id='name' className="input_form" placeholder='وظيفة الشريك...' />
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1"> سعر الشريك </label>
               
                <input value={workerPrice} onChange={ (e) => setWorkerPrice(e.target.value)  } type="text" id='name' className="input_form" placeholder='سعر الشريك...' />
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1">  مكان توافر الشريك </label>
               
            <select required name="avaliableAt" id="avaliableAt" value={workerAvaliableAt} className="input_form" onChange={(e) => {
        const selectedLocation = e.target.value;
        setWorkerAvaliableAt(selectedLocation);
      }} >
      <option value=""   hidden>اختر المكان</option>
      <option value="jazan">  جازان </option>

     
      </select>
            </div>

            <button className="dashbord-header-btn_2 w-80" type='submit' >تعديل ملعومات الشريك</button>


            </form>
                </>

            )}
            
            {deleteShow && (
                <>
                <div className='dashboard-content-header'>

                <h2 className='admin_headline' > حذف الشريك </h2>
                <div className='dashboard-content-search'>

                <button className="dashbord-header-btn_2" onClick={() => determineShow('show') } >رؤية جميع الشركاء</button>
                    </div>           

                </div>

                {error && (
                            <>
                            <h1 className="my-1 error_headline"> {error} </h1>
                            </>
                        )}

                {success && (
                    <>
                        <div className="popup_success">
                            <img src="/images/icons/check.png" alt="" />
                        </div>
                    </>
                )}
                          
                <form onSubmit={deleteRecord} >

            
          

            <button className="dashbord-header-btn_2 w-80 bg_red" type='submit'  >حذف الشريك</button>


            </form>
                </>

            )}

            {showTable && (
                <>
                <div className='dashboard-content-header'>
                    <h2 className='admin_headline' >قائمة الشركاء </h2>
                    <div className='dashboard-content-search'>

                <button className="dashbord-header-btn_2" onClick={() => determineShow('add') } >  اضافة شريك جديد</button>
                    </div>   
                   
                </div>

                {workersArray && (
                    <table className='admin_table_dashboard' >
                    <thead>
                        
                        <th className='table_item' >اسم الشريك</th>
                        <th className='table_item'>صورة الشريك</th>
                        <th className='table_item'>وظيفة الشريك</th>
                        <th className='table_item'>سعر الشريك</th>
                        <th className='table_item'>التعديل \ الحذف</th>

                    </thead>

                    <tbody>

                        {workersArray.map((item , i) => (
                            <tr key={i} >

                         
                            <td className='table_item_sm' > {item.name} </td>
                            <td    > 
                                <img src={item.image} alt="" className="icon_big" />
                             </td>

                             <td className='table_item_sm' > {item.job} </td>
                             <td className='table_item_sm' > {item.price} </td>
                            <td className='d-flex-c' >
                            <button className="edit_btn_admin" onClick={() => updateShownMethod( item.name , item.image , item.bio , item.category , item.price , item.avaliable_at , item.link , item.job  , item.id )  }  >تعديل</button>
                            <button className="delete_btn_admin" onClick={() => deleteShowMethod( item.name , item.image , item.bio , item.category , item.price , item.avaliable_at , item.link , item.job  , item.id ) } >حذف</button>
                            </td>

                        </tr>
                        ))}


                    </tbody>

               
                </table>
                )}

              
                </>
            )}
                
             

               
            </div>
        </div>
    </div>

        </div>
    
    )
}

export default Workers;