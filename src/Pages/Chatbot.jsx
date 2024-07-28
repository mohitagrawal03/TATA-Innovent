import React from 'react'
import {useParams} from 'react-router-dom'
import cars from '../assets/data'
import ChatComponnet from '../Components/ChatComponent.jsx'

const chatbot = () => {
  const params=useParams();
  const car=cars.find((car)=>car.id===params.id);
  const imagePath=car?car.imageUrl:'no';
  
  return (
    <div className='mt-[10vh] h-[90vh]  flex justify-space-between items-center gap-[5rem] p-[5rem] '>
      <div className=' flex flex-col items-center justify-start gap-[1rem] py-[2rem] bg-slate-100 h-[80vh] w-[20vw] rounded-2xl '>
        {imagePath==='no'? <div className='text-xl'> <p>Welcome User.</p> <p className='font-bold'>Ask a question.</p> </div>: <div className='flex flex-col items-center justify-center gap-[1rem] py-[1rem] px-[1rem] '><img src={imagePath} alt={car.name} className='h-[12rem] w-[20rem] rounded-2xl shadow-xl'/>
        <div>
        <ol className='text-center '>
          <li><p className='text-xl'>You can ask questions about </p><strong> {car.name}</strong></li>
          <li><p className='italic text-sm' >{car.description}</p></li>
        </ol>
        </div>
        </div>

}
      </div>
      <div className=' flex flex-col items-center justify-start gap-[1rem] py-[1rem] px-[1rem] bg-slate-100 h-[80vh] w-[60vw] rounded-2xl'>
        <ChatComponnet />
      </div>
    </div>
  )
}

export default chatbot

