import axios from "axios"
import {useEffect,useState} from "react";

 const Blog = () => {
     const [data,setData]=useState([]);

    const fetchData= async ()=>{
      try {
    
       const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
       setData(response.data)
      } catch (error) {
        console.error(error);
      }
    }
  
    useEffect(() => {
      fetchData();
    },[])

  return (
    <div className='divide-y divide-gray-200 mt-3'>
      
      <ul className=" bg-slate-100 rounded-xl p-8  dark:bg-slate-800">
      <h1 className="  text-center text-lg font-bold bg-slate-500 rounded-lg ">Blog List</h1>
        {data &&
          data.length > 0 &&
          data.map((dataObj, index) => (
            <li key={dataObj.id} className="block max-w mt-2 mb-2 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">{dataObj.title} {dataObj.body} </li>
            
          ))}
      </ul>
    </div>
    
  )
}
export default Blog
