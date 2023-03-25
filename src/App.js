import './App.css';
import Footer from './Component/JS/Footer';
import Navbar from './Component/JS/Navbar';
import LandingPage from './Pages/JS/LandingPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from './Component/JS/ScrollToTop';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
      <Navbar />
      <div>
        <Routes>
          <Route exact path={"/"} element={<LandingPage />} />
        </Routes>
      </div>
      <Footer />
      </Router>
    </>
  );
}

export default App;
