import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Service from "./components/Service";
import Project from "./components/Project";
import Footer from "./components/Footer";
import "./app.css";


function App() {
  let service=['Beautiful UI Design','Full Responsive Web site','User Friendly site']

  return (
    <>
      <Header/>
      <Hero/>
      <Project/>
      <div className="flex space-x-4 pb-3">
      <Service services={service}/>
      <About/>
      </div>
     
      <Footer/>

    </>
  )
}

export default App
