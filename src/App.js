import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.scss';

import Navigation from './components/Navigation';

import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';


function App() {
  return (
    <div className="app">
      <BrowserRouter>

        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio-developer" element={<Home />} />
          <Route path="/portfolio-developer/portfolio" element={<Portfolio />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
