import logo from './logo.svg';
import './App.css';
import Home from './components/home'
import Places from './components/places';
// import Contact from './components/contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './components/contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="place" element={<Places />} />
          <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
