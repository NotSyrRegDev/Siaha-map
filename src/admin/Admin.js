import React from 'react';
import SideBar from './components/Sidebar';
import sidebar_menu from './components/sidebar-menu';
import './Admin.css';
import { Navigate } from 'react-router-dom';

const Admin = () => {

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };


  let user = true;

  


  return (
    <div className='main_admin' >

    <div className="sidebar_admin">
    <SideBar menu={sidebar_menu} />
    </div>

    <div className="content_admin">
    <div className="dashboard-content">

{user ? (
<div className="dashboard-content-container ">

<div className="d-flex-c f-sp">

<h1 className="admin_headline">تفاصيل المشروع</h1>
<button className="dashbord-header-btn_2"> التعديل</button>
</div>

<div className="d-grid g-col-2 grid_admin_items mt-1">

<h1 className="admin_info_headline">اسم المشروع</h1>
<h1 className="admin_info_headline span_bold">.....</h1>

<h1 className="admin_info_headline">وصف المشروع</h1>
<h1 className="admin_info_headline span_bold">خارطة تفاعلية</h1>

<h1 className="admin_info_headline"> المشاكل التي رصدناها</h1>
<h1 className="admin_info_headline span_bold statment_parag">
  <p>عدم وضوح المناطق السياحية بدقة</p>
  <p>عدم معرفة الاوقات المناسبة للسياحة والفعاليات والمناسبات للراغبين بالسياحة</p>
 <p>عدم معرفة ماتتصف به المناطق السياحية</p>
  <p>يوجد بعض الاوقات جهات وهمية تدعي اختصاصها بالسياحة</p>
  <p>عدم وجود صور عالية الدقة تخص التراث السعودي للمناطق </p>
</h1>

<h1 className="admin_info_headline">   الخدمات والمنتجات</h1>
<h1 className="admin_info_headline span_bold statment_parag">
  <p>  حجوزات فندقية   </p>
  <p> حجوزات مكاتب السياحة </p>
  <p> حجوزات ترفيهية </p>
  <p> هدايا تذكارية (اسر منتجه وغيرها) </p>
  <p> صور وفيديوهات عالية الدقة للمعالم السياحية واحتفالات </p>

</h1>



<h1 className="admin_info_headline">  رابط الموقع</h1>
<h1 className="admin_info_headline span_bold"> 
<img src="/images/icons/browser.png" onClick={() => openInNewTab('https://goo.gl/maps/NSqDEKhggJC7GVxC9')} alt="" className="icon_mid cu_pointer" /> 
</h1>

<h1 className="admin_info_headline">  تويتر </h1>
<h1 className="admin_info_headline span_bold">  
<img src="/images/icons/twitter.png" onClick={() => openInNewTab('https://instagram.com/fayruza.ksa?igshid=YmMyMTA2M2Y=')} className="icon_mid cu_pointer" alt="" />
</h1>

<h1 className="admin_info_headline">  انستقرام</h1>
<h1 className="admin_info_headline span_bold">  
<img src="/images/icons/instagram.png" onClick={() => openInNewTab('https://instagram.com/fayruza.ksa?igshid=YmMyMTA2M2Y=')} className="icon_mid cu_pointer" alt="" />
</h1>

<h1 className="admin_info_headline">  سناب</h1>
<h1 className="admin_info_headline span_bold"> 
<img src="/images/icons/snapchat.png" onClick={() => openInNewTab('https://instagram.com/fayruza.ksa?igshid=YmMyMTA2M2Y=')} className="icon_mid cu_pointer" alt="" />
</h1>

</div>

</div>
) : (
''
)}

</div>
    </div>
       

       
    </div>
  )
}

export default Admin