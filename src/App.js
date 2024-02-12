import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import './App.css';
import Contact from "./Contact";
import About from "./About";
import Home from "./Home";

function App() {
  return (<Router>
    <nav>
      <Link to="/about" className="link">About</Link>
      <Link to="/" className="link">Shop</Link>
      <Link to="/contact" className="link">Contact</Link>
    </nav>

    <Routes>
      <Route path="/about" element={<About/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    </Router>
  );
}

export default App;
