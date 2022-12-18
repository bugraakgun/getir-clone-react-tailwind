import React, { useState } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReactFlagsSelect from "react-flags-select";
function HeroSection() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 400,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };
  const [selected, setSelected] = useState("TR");
  const phone = {
    US:'+1',
    DE:'+2',
    TR:'+90',
    FR:'+3'
  }
  return (
    <div className='relative h-[500px] before:bg-gradient-to-r before:from-secondary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-20' >
      <Slider  {...settings}>
        <div>
          <img className='w-full h-[500px] object-cover' src='https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg' />
        </div>
        <div>
          <img className='w-full h-[500px] object-cover' src='https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg' />
        </div>
      </Slider>
      <div className='container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20' >
        <div>
          <img src='https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg' ></img>
          <h3 className='mt-4  text-4xl text-white font-semibold'>Dakikalar içinde <br />kapınızda </h3>
        </div>
        <div className='w-[400px] rounded bg-gray-50 p-6' >
          <h4 className='text-primary-brand-color text-center mb-4 font-semibold text-lg'> 
            Giriş yap veya kayıt ol
          </h4>
          <div className="flex gap-x-2">
            <ReactFlagsSelect
              selected={selected}
              onSelect={(code) => setSelected(code)}
              countries={Object.keys(phone)}
              customLabels={phone}
              className='flag-select'
            />
            <label className="flex-1 relative block">
              <input required className=" h-14 px-4  border-2 border-gray-400 rounded transition-colors bg-white w-full hover:border-primary-brand-color text-sm pt-2 focus:border-primary-brand-color outline-none peer" ></input>
              <span className="absolute top-0 h-full px-4  flex items-center text-sm text-gray-600 peer-focus:h-6 peer-focus:text-xs peer-valid:h-6 peer-valid:text-xs transition-all"> Telefon Numarası</span> 
            </label>
          </div>
          <button className="mt-1 flex bg-button-color text-primary-brand-color font-semibold items-center justify-center h-11 w-full rounded-md text-sm hover:bg-primary-brand-color hover:text-white transition-all h-12">
            Telefon numarası ile devam et
          </button>
        </div>
        
      </div>
    </div>
  )
}

export default HeroSection