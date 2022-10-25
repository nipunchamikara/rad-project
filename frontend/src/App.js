import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
