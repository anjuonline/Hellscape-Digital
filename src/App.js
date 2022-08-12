import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SharedLayout from './pages/SharedLayout';

import Home from './pages/Home';

import Error from './pages/Error';
import Artwork from './pages/Artwork';
import Music from './pages/Music';

import Archive from './pages/Archive';

import ArchiveMusic from './pages/archive/music/ArchiveMusic';
import ArchiveMusicAll from './pages/archive/music/ArchiveMusicAll';

import ArchiveMusicAnju from './pages/archive/music/ArchiveMusicAnju';
import ArchiveMusicAnjuSingles from './pages/archive/music/anjuonline/ArchiveMusicAnjuSingles';
import ArchiveMusicAnjuRemixes from './pages/archive/music/anjuonline/ArchiveMusicAnjuRemixes';
import ArchiveMusicAnjuPlacements from './pages/archive/music/anjuonline/ArchiveMusicAnjuPlacements';
import ArchiveMusicAnjuDjSets from './pages/archive/music/anjuonline/ArchiveMusicAnjuDjSets';

import ArchiveMusicKawaii from './pages/archive/music/ArchiveMusicKawaii';
import ArchiveMusicHellscapeRadio from './pages/archive/music/ArchiveMusicHellscapeRadio';

import ArchiveArtwork from './pages/archive/artwork/ArchiveArtwork';
import ArchiveArtworkAll from './pages/archive/artwork/ArchiveArtworkAll';
import ArchiveArtworkAnju from './pages/archive/artwork/ArchiveArtworkAnju';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='/artwork' element={<Artwork />} />
          <Route path='/oldmusic' element={<Music />} />
          <Route path='/archive' element={<Archive />} />
          <Route path='/archive/music' element={<ArchiveMusic />} />
          <Route path='/archive/music/all' element={<ArchiveMusicAll />} />          
          <Route path='/archive/music/anjuonline/all' element={<ArchiveMusicAnju />} />
          <Route path='/archive/music/anjuonline/singles' element={<ArchiveMusicAnjuSingles />} />
          <Route path='/archive/music/anjuonline/remixes' element={<ArchiveMusicAnjuRemixes />} />
          <Route path='/archive/music/anjuonline/placements' element={<ArchiveMusicAnjuPlacements />} />
          <Route path='/archive/music/anjuonline/djsets' element={<ArchiveMusicAnjuDjSets />} />
          <Route path='/archive/music/kawaiiry/all' element={<ArchiveMusicKawaii />} />
          <Route path='/archive/music/hellscaperadio' element={<ArchiveMusicHellscapeRadio />} />
          <Route path='/archive/artwork' element={<ArchiveArtwork />} />
          <Route path='/archive/artwork/all' element={<ArchiveArtworkAll />} />
          <Route path='/archive/artwork/anjuonline' element={<ArchiveArtworkAnju />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
