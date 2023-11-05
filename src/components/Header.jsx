import { NavLink } from "react-router-dom"

 const Header = () => {
  return (
    <div>
      <header className=" bg-slate-300 shadow-sm shadow-slate-400">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <a href="#">
          <img src="https://cdn.ostad.app/public/upload/2023-10-17T07-14-50.690Z-Logo-new.png" alt="Logo" className="cursor-pointer"/>
          </a>
        <div>
          <ul className="flex space-x-10 justify-center font-semibold ">
             <li><NavLink to="/"className={({ isActive }) => isActive ? "text-green-700 font-bold" : ""}>Home</NavLink></li>
            
             <li><NavLink to="/project"className={({ isActive }) => isActive ? "text-green-700 font-bold" : ""}>Project</NavLink></li>
             <li><NavLink to="/blog"className={({ isActive }) => isActive ? "text-green-700 font-bold" : ""}>Blog</NavLink></li>
             <li><NavLink to="/service"className={({ isActive }) => isActive ? "text-green-700 font-bold" : ""}>Service</NavLink></li>
             <li><NavLink to="/about"className={({ isActive }) => isActive ? "text-green-700 font-bold" : ""}>About</NavLink></li>
           
             <li><NavLink to="/contact"className={({ isActive }) => isActive ? "text-green-700 font-bold" : ""}>Contact</NavLink></li>
          </ul>
        </div>
        
        </div>
        
      </header>
    </div>
  )
}
export default Header
