import logo from './logo.svg';
import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.js';
import Home from './pages/Homepage.js'
import Events from './pages/Events.js';
import EventPage from './pages/EventPage.js';
import NotFound from './pages/NotFound';
import Header from './components/Layout.js';
import Footer from './components/Footer.js';
function App() {
    return (
      <div className="App">
            <Header />
          <Routes>
          <Route index element={<Home/>}/>
          <Route path='events' element={<Events/>}/>
          <Route path='events/event/:id' element={<EventPage/>}/>
          <Route path='*' element={<NotFound/>}/>
          </Routes>
          <Footer/>
            </div>
  );
}

export default App;
