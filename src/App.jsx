import * as React from 'react';
import Home from './components/Home';
import About from './components/About';
import { Routes, Route, HashRouter } from 'react-router-dom';

const App = () => {
  return (
    <>
      <HashRouter basename='/'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </HashRouter>
    </>
  );
};
export default App;
