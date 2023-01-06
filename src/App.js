import NavBar from "./Components/NavBar";
import PersonInfo from "./Components/PersonInfo";
import Footer from "./Components/Footer";
import './App.css';

export default function App() {



  return (
    <div className="App">
    <NavBar/>
    <h1>Portfolio</h1>
    <PersonInfo />
    <Footer/>
    </div>
  );
}
