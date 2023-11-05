import React, { useEffect, useRef, useState } from 'react'

 const Contact = () => {
  const[formData,setFormData]=useState({userName:'',phone:'',email:'',message:''});
  const inputRef=useRef(null);
   useEffect(()=>{
    inputRef.current.focus();
   },[])
  

   const onChangeHandler=(props,value)=>{
       setFormData(preObj=>({
           ...preObj,
           [props]:value
       }))

   }
   const onFormSubmit=(e)=>{
    e.preventDefault();
    alert(JSON.stringify(formData));
   

   }
  
  
return (
<div className="w-full mt-4">
 <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-slate-300" onSubmit={onFormSubmit}>
  <h2 className="mb-2 font-sans text-xl  font-semibold text-slate-600">Contact Us</h2>
    <div className='grid gap-6 mb-6 ml-96'>
    <div className="mb-2">
       <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-96 focus:ring-green-500 focus:border-green-500 focus:outline-none" placeholder="Username" ref={inputRef} value={formData.userName} 
        onChange={(e)=>{onChangeHandler("userName",e.target.value)}} />
    </div>
    <div className="mb-2">
       <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-96 focus:ring-green-500 focus:border-green-500 focus:outline-none" placeholder="Phone" value={formData.phone} 
        onChange={(e)=>{onChangeHandler("phone",e.target.value)}}/>
    </div>
    <div className="mb-2">
       <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-96 focus:ring-green-500 focus:border-green-500 focus:outline-none" placeholder="Email" value={formData.email} 
        onChange={(e)=>{onChangeHandler("email",e.target.value)}} />
    </div>
    <div className="mb-2">
       <textarea className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-96 focus:ring-green-500 focus:border-green-500 focus:outline-none" placeholder="Message" value={formData.message} 
        onChange={(e)=>{onChangeHandler("message",e.target.value)}}/>
    </div>
    <button type="submit" className="text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-96 px-5 py-2.5 text-center">Submit</button>
    </div>
 </form>
  
</div>
 )}
export default Contact
