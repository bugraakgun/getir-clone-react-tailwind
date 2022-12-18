import React from 'react'
import FooterMenu from '../ui/FooterMenu'
import { FaFacebook , FaTwitter , FaInstagram , FaGlobe} from 'react-icons/fa';
function Footer() {
  const menus = [
    {
        title: 'Getir\'i Keşfedin',
        items: [
            {
                title: 'Hakkımızda'
            },
            {
                title: 'Kariyer'
            },
            {
                title: 'İletişim'
            },
            {
                title: 'COVID-19 Duyuru'
            },
            {
                title: 'Sosyal Sorumluluk Projeleri'
            }
        ]
    },
    {
        title: 'Yardıma mı ihtiyacınız var?',
        items: [
            {
                title: 'Sıkça Sorulan Sorular'
            },
            {
                title: 'Kişisel Verilerin Korunması'
            },
            {
                title: 'Gizlilik Politikası'
            },
            {
                title: 'Kullanım Koşulları'
            },
            {
                title: 'Çerez Politikası'
            }
        ]
    },
    {
        title: 'İş Ortağımız Olun',
        items: [
            {
                title: 'Bayimiz Olun'
            },
            {
                title: 'Deponuzu Kiralayın'
            },
            {
                title: 'GetirYemek Restoranı Olun'
            },
            {
                title: 'GetirÇarşı İşletmesi Olun'
            },
            {
                title: 'Zincir Restoranlar'
            }
        ]
    }
]
  return (
    <div className='bg-white mt-10'>
      <div className='container mx-auto py-10' >
        <div className='grid grid-cols-[21%_21%_21%_21%_10%] gap-x-6'>
          <div className='grid gap-y-4'>
            <h3 className='text-lg text-primary-brand-color'>Getir'i indirin!</h3>
            <a href="https://itunes.apple.com/app/id995280265" >
              <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.getir" >
              <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" />
            </a>
            <a href="https://appgallery7.huawei.com/#/app/C100954039" >
              <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" />
            </a>
          </div>
          {menus.map((menu,i)=> <FooterMenu key={i} {...menu} />)}
          <div className='w-28 h-28'>
              <a className='block p-4 shadow' href="https://etbis.eticaret.gov.tr/sitedogrulama/A8C52359B2F14075B6829557FC4306B1">
                <img className='max-w-[80px] max-h-[80px]' src="https://cdn.getir.com/getirweb-images/common/etbis.png" />
              </a>
          </div>
        </div>
        <hr className='mt-5'></hr>
        <div className='py-6 flex justify-between'>
          <section className='flex gap-x-4'>
            <span>© 2022 Getir</span>
            <a className='text-primary-brand-color' href='https://e-sirket.mkk.com.tr/esir/Dashboard.jsp#/sirketbilgileri/18806'>Bilgi Toplumu Hizmetleri</a>
          </section>
          <section className='flex gap-x-4'>
            <a className='hover:bg-gray-200 p-1 rounded-md transition' href='#' ><FaFacebook  className='hover:text-primary-brand-color transition-all w-5 h-5 text-gray-600'/></a>
            <a className='hover:bg-gray-200 p-1 rounded-md transition' href='#' ><FaTwitter className='hover:text-primary-brand-color transition-all w-5 h-5 text-gray-600'  /></a>
            <a className='hover:bg-gray-200 p-1 rounded-md transition' href='#' ><FaInstagram className='hover:text-primary-brand-color transition-all w-5 h-5 text-gray-600' /></a>
            <a className='hover:bg-gray-200 p-1 rounded-md transition border' href='#' ><FaGlobe className='hover:text-primary-brand-color transition-all w-5 h-5 text-gray-600 inline' /> Türkçe(TR)</a>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Footer