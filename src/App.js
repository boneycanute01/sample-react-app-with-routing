import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Courses from './Components/Courses';

function App() {
  let component
  switch(window.location.pathname)
  {
    case "/":
      component = <Home/>
      break
    case "/Contact":
      component = <Contact/>
      break
    case "/Courses":
      component = <Courses/>
      break
    default : 
      component = <Home/>
  }
  return (
    <div className="App">
      <Header/>
      {component}
    </div>
  );
}

export default App;
