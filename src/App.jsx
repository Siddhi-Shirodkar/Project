import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Nft from './pages/Nft';
import ContactUs from './pages/ContactUs';
import Nopage from './pages/Nopage';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/Nft" element={<Nft />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="*" element={<Nopage />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
