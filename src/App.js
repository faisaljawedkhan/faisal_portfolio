import './App.css';
import Footer from './Component/JS/Footer';
import Navbar from './Component/JS/Navbar';
import LandingPage from './Pages/JS/LandingPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from './Component/JS/ScrollToTop';
import GoToTop from './Component/JS/GoToTop';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <GoToTop />
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
