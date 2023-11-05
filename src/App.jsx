import Header from "./components/Header";
import Footer from "./components/Footer";
import "./app.css";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from "./pages/Contact";
import Project from './pages/Project';
import Service from "./pages/Service";
import Patner from './components/Patner';
import ContactUs from './components/ContactUs';


function App() {


  return (
    <>
      <Router>
       <Header/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/service" element={<Service/>}/>
       </Routes>
       <div className="flex space-x-4 pb-3">
       <Patner/>
       <ContactUs/>
       </div>
      
       <Footer/>
      </Router>
    


    </>
  )
}

export default App
