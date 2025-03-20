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
import Dashboard from './components/pages/Dashboard/Dashboard';
import Profile from './components/pages/Dashboard/Profile';
import Settings from './components/pages/Dashboard/Settings';


function App() {
  return (
    <>
     
      <Navbar />
      <Routes>
 
        <Route path="/" element={<Home />} />
     
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />}>
            {/* Nested routes under /dashboard */}
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
      </Route>
        
      </Routes>
    </>
  );
}

export default App;
