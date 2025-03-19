// import { Route, Routes } from 'react-router-dom'
// import './App.css'
// import About from './components/pages/About/About'



// function App() {


//   return (
//     <>
      
//       <Routes>
      
//         <Route path="/about" element={<About/>} />
//     </Routes>
//     </>
  
     
//   )
// }

// export default App

// src/App.jsx
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/pages/About/About';
import Home from './components/pages/Home/Home'; // Adjust the path to your Home component
import Navbar from './components/Navigation/NavBar'; // Optional: If Navbar should be outside Routes
import Service from './components/pages/Service/Service';
import Contact from './components/pages/Contact/Contact';

function App() {
  return (
    <>
      {/* Navbar can be outside Routes if it’s on every page */}
      <Navbar />
      <Routes>
        {/* Home route */}
        <Route path="/" element={<Home />} />
        {/* About route */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </>
  );
}

export default App;
