import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Slider_r = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  
    let Data=[1,2,3,4,5];
  return (
    <div className='sliderm'>
        <div className='slideri'>
            <Slider {...settings}>
              {Data.map((data)=>(
                 <div className='slide-container'>
                 <div className='slide-content'>
                             <div className='card-wrapper'>
                                 <div className='card'>
                                     <div className='image-content'>
                                         <span className='overlay'></span>
                                         <div className='card-image'>
                                             <img src='https://printify.com/pfh/media/nikki-TJP4NANB.png' className='card-img'/>
                                         </div>
                                     </div>
                                     <div className='card-content'>
                                         <h1 className='name'>Raghib</h1>
                                         <p className='description'>Hell to react</p>
                                         <button className='Sbutton'>View More</button>
                                     </div>
                                 </div>
                             </div>
                 </div>      
         </div>
              ))}
              </Slider>
        </div>
      
    </div>
  )
}

export default Slider_r
