import './App.css';
import Navbar from './components/Constants/Navbar';
import Footer from './components/Constants/Footer';
import AnimatedRoutes from './components/AnimatedRoutes';
import { BrowserRouter as Router} from "react-router-dom";




function App() {

  return (
    <div> 
      <Router>
       <Navbar/>
        <AnimatedRoutes/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
