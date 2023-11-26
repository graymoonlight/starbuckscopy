import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/pages/Home";
import Cart from "./components/pages/Cart";

function App() {
  return (
      <Router>
          <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/Cart' element={<Cart />} />
          </Routes>
      </Router>
  );
}

export default App;