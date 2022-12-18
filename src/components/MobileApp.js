import React from 'react'

function MobileApp() {
  return (
    <div className='container flex items-center pb-0 justify-between mx-auto bg-mobile-app p-10 bg-primary-brand-color mt-5 rounded-lg text-white'>
      <div className='flex flex-col gap-y-3'> 
        <h3 className='text-2xl font-bold tracking-tight'>Getir'i indirin!</h3>
        <p className='font-semibold text-base tracking-wide'>İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim.</p>
        <nav className=' mt-5 flex gap-x-2'>
          <a href='#' >
            <img src='https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg' />
          </a>
          <a href='#' >
            <img src='https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg' />
          </a>
          <a href='#' >
            <img src='https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg' />
          </a>
        </nav>
      </div>
      <div>
          <img src='https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png' />
      </div>
    </div>
  )
}

export default MobileApp