import { useSearchParams } from 'react-router-dom'
import Navbar from './Navbar'
import { useEffect, useState } from 'react'

const Card = () => {
  // ===============use state hook===========

  const [users, setUsers] = useState([])

useEffect(()=>{
  
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => setUsers(json))
    .catch((error)=>{})

} , [])
  


  return (
    <>
      <Navbar/>
      <div className="container">
        <div className='flex justify-center flex-wrap gap-10 items-center'>

                {

                  users.map((item)=>(

                                      <div key={item.id} className='single_user_card w-[350px] h-[500px] p-5 bg-slate-400 mt-10 mb-5 border-[3px] border-red-800 rounded-md'>
                                           <div className="w-[200px] h-[200px] rounded-full border-[2px] border-red-700 m-auto overflow-hidden">
                                          <img src="https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/353817826_2867837880015817_5917082077703162193_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEmblk7JyPRZv0IJczjTcLenAEP9NIWOZicAQ_00hY5mK5-uliK2JJDLUpvIIAKnOR0RaLvlY-pERR-OqQjplUe&_nc_ohc=7thzbXoah-kQ7kNvgEpMkWG&_nc_ht=scontent.fdac41-1.fna&oh=00_AYBb3qPMm4RzSRRt-lUCEsOuIbLR9lm13YPZO472CemDCg&oe=66DB0F4D" alt="Photo" />
                                      </div>

                                          <h1 className='text-xl font-bold text-red-950 mt-5'><span className='text-blue-500'>Name:</span> {item.name}</h1>
                                          <h2 className='text-lg font-bold mt-5'><span className='text-blue-600'>ID:</span> {item.id} </h2>
                                          <h2 className='text-lg font-bold mt-5'><span className='text-blue-600'>Email:</span> {item.email}</h2>
                                          <h2 className='text-lg font-bold mt-5'><span className='text-blue-600'>Phone:</span> {item.phone}</h2>
                                      </div>
              
                  )
                )
                }
        </div>

      </div>
    </>
  )
}

export default Card
