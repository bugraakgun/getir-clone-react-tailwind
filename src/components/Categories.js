import {useState, useEffect} from 'react'
import categoryData from '../api/categories.json'
function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(()=>{
    //kategoriler komponenti bir kere çalıştığında apiden kategorileri çekmemiz lazım
    setCategories(categoryData);
  },[])
  return (
    <div className='bg-white'>
      <div className=' py-4 container mx-auto'>
        <h3 className='text-sm font-semibold'> Kategoriler </h3>
        <div className='grid grid-cols-10'>
          {categories && categories.map((cat,i) => (
            <a href='#' key={i} className='flex group w-28 h-28 flex-col items-center text-center  transition-all hover:bg-purple-100 justify-center '>
                <img className='w-12 h-12 rounded border border-gray-300' src={cat.image} alt={cat.title} />
                <span className='text-sm font-semibold text-gray-700 group-hover:text-primary-brand-color'>{cat.title}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Categories