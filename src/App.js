import './App.scss';
import FloatingNav from './components/FloatingNav/FloatingNav';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Sidebar from './components/sideBar/Sidebar';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Sidebar/>
      <Header id="home"/>
      <FloatingNav/>
    </div>
  );
}

export default App;
