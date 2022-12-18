import {useState,useEffect} from 'react'
import cardData from '../api/cards.json'
function Card() {
  const [card,setCard] = useState([]);
  useEffect(()=>{
    setCard(cardData);
  },[])
  return (
    <div className='container mx-auto mt-9'>
       <div className='grid grid-cols-3 gap-x-4  '>
        {card.length && card.map((c,i) => (
          <div key={i} className=' rounded-lg shadow bg-white p-10 flex flex-col items-center text-center'>
            <img className='w-[150px] h-[150px] mb-6' src={c.image} alt={c.title} />
            <h3 className='text-primary-brand-color mb-4 font-semibold text-lg'>{c.title}</h3>
            <p className='text-gray-600'>{c.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
     
  )
}

export default Card