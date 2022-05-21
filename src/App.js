import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.scss';

import Navigation from './components/Navigation';

import Home from './pages/Home/Home';


function App() {
  return (
    <div className="app">
      <BrowserRouter>

        <Navigation />

        <Routes>
          <Route path="/portfolio-2022" element={<Home />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
