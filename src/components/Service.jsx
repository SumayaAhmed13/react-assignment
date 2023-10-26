const Service = (props) => {
  const serviceList=props.services;
 
  const showList = true;
  return (
    <div className="w-full rounded-xl mt-4 shadow-sm bg-slate-100">
      <h3 className="p-4 mt-2 text-lg font-semibold text-gray-900 dark:text-white text-start">Services</h3> 
     {showList?
        <ul className=" text-gray-500 list-disc list-inside dark:text-gray-400 text-start ml-8 mb-4">
            {serviceList.map((data,i) => 
              <li key={i}>{data}</li>)}
        </ul> : (
          <p className=" text-gray-500 text-center mb-10 font-semibold">No Services available.</p>
        )  } 
     
    </div>
  )
}
export default Service
