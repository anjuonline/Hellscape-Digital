import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import SharedLayout from './pages/SharedLayout';
import Home from './pages/Home';
import Error from './pages/Error';
import Artwork from './pages/Artwork';
import Music from './pages/Music';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='/artwork' element={<Artwork />} />
          <Route path='/music' element={<Music />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
