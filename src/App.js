import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Navbar from './Components/Shared/Navbar/Navbar';
import Footer from './Components/Shared/Footer/Footer';
import Courses from './Components/Courses/Courses';
import Login from './Components/Login/Login';

function App() {
  return (
    <div
      className="App"
      style={{ backgroundColor: "rgba(80, 229, 252, 0.07)" }}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="courses" element={<Courses />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
