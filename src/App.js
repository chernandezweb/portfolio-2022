import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { motion } from "framer-motion";
import './App.scss';
import Navigation from './components/Navigation';

import Home from './pages/Home/Home';


function App() {
  return (
    <div className="app">
      <BrowserRouter>

        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio-2022" element={<Home />}>
            <Route index element={<Home />} />
          </Route>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
