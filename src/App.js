import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import
import './App.css';
import HomePages from './pages/HomePages';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes> {/* Updated from Switch to Routes */}
          <Route path="/" element={<HomePages />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />}/>         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
