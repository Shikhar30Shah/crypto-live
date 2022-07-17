import React from 'react';
import './App.css';
import Home from './components/HomeComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import News from './components/NewsComponent';
import Navbar from './components/NavbarComponent';


// https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=15&page=1&sparkline=false

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/news' element={<News />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
