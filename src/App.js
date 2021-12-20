import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Nav />
      <HomeScreen />
      {/* <Routes>
        <Route path="/">
          <HomeScreen/>
          </Route>
      </Routes> */}
      <Footer />
    </Router>
  );
};

export default App;
