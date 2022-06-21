import { useState,createContext,useRef } from 'react';
import './App.scss';
import About from './components/About/About';
import FloatingNav from './components/FloatingNav/FloatingNav';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Sidebar from './components/sideBar/Sidebar';
import Mywork from './components/MyWork/Mywork';
import Contact from './components/Contact/Contact';
import Footer from './components/footer/Footer';

export const globalWidth=createContext();
function App() {
  const home=useRef();
  const about=useRef();
  const mywork=useRef();
  const contact=useRef();
  const [width,setWidth]=useState(window.innerWidth);
  if(window.innerWidth<=650)
  {
    alert("Please use a device with width >600 pixel for better experience")
  }
  return (
    <globalWidth.Provider value={setWidth}>

    <div className="App" ref={home}>
      <Nav />
      <Sidebar/>

      <Header id="home" />
      <About ref={about}/>
      <Mywork ref={mywork}/>
      <Contact ref={contact}/>
        <Footer/>
    <FloatingNav home={home} about={about} work={mywork} contact={contact}/>
    </div>
    </globalWidth.Provider>
  );
}

export default App;
