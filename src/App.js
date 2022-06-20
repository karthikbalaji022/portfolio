import { useState,createContext,useRef } from 'react';
import './App.scss';
import About from './components/About/About';
import FloatingNav from './components/FloatingNav/FloatingNav';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Sidebar from './components/sideBar/Sidebar';
import Mywork from './components/MyWork/Mywork';

export const globalWidth=createContext();
function App() {
  const home=useRef();
  const about=useRef();
  const mywork=useRef();
  const contact=useRef();
  const [width,setWidth]=useState(window.innerWidth);
  return (
    <globalWidth.Provider value={setWidth}>

    <div className="App" ref={home}>
      <Nav/>
      <Sidebar/>
      {width<1000?
      (
        <div style={{color:"white",fontSize:"1.5rem"}}> open in device with width greater than 1000, page is not responsive</div>
      ):(
        <>
      <Header id="home" />
      <About ref={about}/>
      <Mywork ref={mywork}/>
        </>
      )
    }
    <FloatingNav home={home} about={about} work={mywork} contact={contact}/>
    </div>
    </globalWidth.Provider>
  );
}

export default App;
