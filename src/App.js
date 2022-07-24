import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SharedLayout from './pages/SharedLayout';

import Home from './pages/Home';
import Error from './pages/Error';
import Artwork from './pages/Artwork';
import Music from './pages/Music';

import Archive from './pages/Archive';
import ArchiveMusic from './pages/archive/music/ArchiveMusic';
import ArchiveMusicAnju from './pages/archive/music/ArchiveMusicAnju';
import ArchiveMusicKawaii from './pages/archive/music/ArchiveMusicKawaii';
import ArchiveMusicHellscapeRadio from './pages/archive/music/ArchiveMusicHellscapeRadio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='/artwork' element={<Artwork />} />
          <Route path='/music' element={<Music />} />
          <Route path='/archive' element={<Archive />} />
          <Route path='/archive/music' element={<ArchiveMusic />} />
          <Route path='/archive/music/anjuonline' element={<ArchiveMusicAnju />} />
          <Route path='/archive/music/kawaiiry' element={<ArchiveMusicKawaii />} />
          <Route path='/archive/music/hellscaperadio' element={<ArchiveMusicHellscapeRadio />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
