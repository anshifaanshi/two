import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Createbook from "./pages/Createbook.jsx"; // Correct import
import Showbook from "./pages/Showbook.jsx";
import Editbook from "./pages/Editbook.jsx";
import Deletebook from "./pages/Deletebook.jsx";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="books/create" element={<Createbook />} />  {/* Correct usage */}
        <Route path="books/details/:id" element={<Showbook />} />
        <Route path="books/edit/:id" element={<Editbook />} />
        <Route path="books/delete/:id" element={<Deletebook />} />
      </Routes>
    </Router>
  );
}

export default App;
