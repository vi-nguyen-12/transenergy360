import React from "react";
import NavBar from "./components/Nav";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <NavBar />
      <HomeScreen />
      {/* <Routes>
        <Route path="/">
          <HomeScreen/>
          </Route>
      </Routes> */}
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
