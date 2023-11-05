import { useState , useRef } from 'react'

const Service = () => {
  const [ items, setItems] = useState(["Custom software development","Full software development outsourcing","Software product development","Software support and maintenance"]);
  const listItem = useRef(); 

  return (
  
     <div className="relative flex flex-col text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border w-auto mt-3">
   
      <div className="p-6">
     <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      Our Services
     </h5>
     <ul className='bg-slate-100 rounded-xl p-8  dark:bg-slate-800'>
     {items.map(( item, index ) =><li key={ index } className='className="inline max-w mt-2 mb-2 p-10 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"'>{ item }</li>)}
     </ul>
    </div>
    </div>
    
  )
}
export default Service
