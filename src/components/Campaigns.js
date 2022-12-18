import {useState,useEffect} from 'react'
import campaignsData from '../api/banners.json'
function Campaigns() {
  const [campaigns, setCampaigns] = useState([]);
  useEffect(()=>{
    setCampaigns(campaignsData);
  },[]);
  return (
    
    <div className='container mx-auto mt-8 '>
        <h3 className='font-semibold text-sm mb-2'> Kampanyalar </h3>
        <div >
          {campaigns && campaigns.map((e,i)=>(
           <img key={i} src={e.image} className='w-[400px] h-[200px] rounded-lg' /> 
          ))}
        </div>
    </div>
  )
}

export default Campaigns