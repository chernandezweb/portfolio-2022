import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import { AppContext, useAppState } from './useAppState'

import Navigation from './components/Navigation';

import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';


function App() {

  const { state, actions } = useAppState();


  return (
    <AppContext.Provider value={{ state, actions }} >
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
    </AppContext.Provider>
  );
}

export default App;
