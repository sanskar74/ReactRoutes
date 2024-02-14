import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Pages/Navbar";

// Importing the components that i want to render for each route
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </nav>
    </div>
  );
}

export default App;
