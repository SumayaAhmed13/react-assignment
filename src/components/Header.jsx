
 const Header = () => {
  return (
    <div>
      <header className=" bg-slate-300 shadow-sm shadow-slate-400">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <a href="#">
          <img src="https://cdn.ostad.app/public/upload/2023-10-17T07-14-50.690Z-Logo-new.png" alt="Logo" className="cursor-pointer"/>
          </a>
        <div>
          <ul className=" flex space-x-10 justify-center font-semibold ">
             <li>Home</li>
             <li>Services</li>
             <li>About Us</li>
          </ul>
        </div>
        
        </div>
        
      </header>
    </div>
  )
}
export default Header
