import React from 'react'

const LocationSlideOne = () => {
  return (
    <div className="location_info">

    <div className="main_image" style={{ background: " linear-gradient(  rgba(0,0,0,0.4) , #010101 ) ,url('/images/landscape/1.jpg') center / cover"  }} >

 

        <div className="content-main-image">

            <h1 className="subheadline_location">نوع المكان : <span className="span_location">عام</span></h1>

            <h1 className="headline_location">مهرجان البن في جازان</h1>

            <div className="d-flex-c stars_location mt-1">
                <img src="/images/icons/star.png" alt="" className="star_icon_small" />
                <img src="/images/icons/star.png" alt="" className="star_icon_small" />
                <img src="/images/icons/star.png" alt="" className="star_icon_small" />
                <img src="/images/icons/star.png" alt="" className="star_icon_small" />
                <img src="/images/icons/star.png" alt="" className="star_icon_small" />
            </div>

            <div className="blur_box_location">

                <div className="d-flex-c f-sp div_blur">

                    <div className="single_info_blur">
                        <img src="/images/icons/triangle.png" alt="" className="icon_small" />
                        <p className="blur_info">مفتوح</p>
                    </div>

                    <div className="single_info_blur">
                        <img src="/images/icons/location.png" alt="" className="icon_small" />
                        <p className="blur_info">الدائر محافظة</p>
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