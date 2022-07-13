import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.js';
import Homepage from './pages/Homepage.js'
import Events from './pages/Events.js';
import EventPage from './pages/EventPage.js';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Homepage/>}/>
          <Route path='events' element={<Events/>}/>
          <Route path='events/event/:id' element={<EventPage/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
