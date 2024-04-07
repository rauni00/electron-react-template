import * as React from 'react';
import Home from './components/Home';
import About from './components/About';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

const NotFound = () => <>Not Found</>;

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/app'>
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
        </Route>
        <Route path='/*' element={<Navigate to='/app/home' />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
