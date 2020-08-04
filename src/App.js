import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import DieuHuongURL from './routers/DieuHuongURL';
import {BrowserRouter as Router, Route} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <DieuHuongURL />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
