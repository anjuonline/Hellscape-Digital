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

import ArchiveMusicAnju from './pages/archive/music/anjuonline/ArchiveMusicAnju';
import ArchiveMusicAnjuSingles from './pages/archive/music/anjuonline/ArchiveMusicAnjuSingles';
import ArchiveMusicAnjuRemixes from './pages/archive/music/anjuonline/ArchiveMusicAnjuRemixes';
import ArchiveMusicAnjuPlacements from './pages/archive/music/anjuonline/ArchiveMusicAnjuPlacements';
import ArchiveMusicAnjuDjSets from './pages/archive/music/anjuonline/ArchiveMusicAnjuDjSets';
import ArchiveMusicAnjuAlbums from './pages/archive/music/anjuonline/ArchiveMusicAnjuAlbums';

import ArchiveMusicKawaii from './pages/archive/music/kawaiiry/ArchiveMusicKawaii';
import ArchiveMusicKawaiiAlbums from './pages/archive/music/kawaiiry/ArchiveMusicKawaiiAlbums';
import ArchiveMusicKawaiiEps from './pages/archive/music/kawaiiry/ArchiveMusicKawaiiEps';
import ArchiveMusicKawaiiSingles from './pages/archive/music/kawaiiry/ArchiveMusicKawaiiSingles';
import ArchiveMusicKawaiiFeatures from './pages/archive/music/kawaiiry/ArchiveMusicKawaiiFeatures';

import ArchiveMusicLugosi from './pages/archive/music/lugosi/ArchiveMusicLugosi';
import ArchiveMusicLugosiEps from './pages/archive/music/lugosi/ArchiveMusicLugosiEps';
import ArchiveMusicLugosiSingles from './pages/archive/music/lugosi/ArchiveMusicLugosiSingles';
import ArchiveMusicLugosiFeatures from './pages/archive/music/lugosi/ArchiveMusicLugosiFeatures';

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
          <Route path='/archive/music/anjuonline/albums' element={<ArchiveMusicAnjuAlbums />} />

          <Route path='/archive/music/kawaiiry/all' element={<ArchiveMusicKawaii />} />
          <Route path='/archive/music/kawaiiry/albums' element={<ArchiveMusicKawaiiAlbums />} />
          <Route path='/archive/music/kawaiiry/eps' element={<ArchiveMusicKawaiiEps />} />
          <Route path='/archive/music/kawaiiry/singles' element={<ArchiveMusicKawaiiSingles />} />
          <Route path='/archive/music/kawaiiry/features' element={<ArchiveMusicKawaiiFeatures />} />

          <Route path='/archive/music/lugosi/all' element={<ArchiveMusicLugosi />} />
          <Route path='/archive/music/lugosi/eps' element={<ArchiveMusicLugosiEps />} />
          <Route path='/archive/music/lugosi/singles' element={<ArchiveMusicLugosiSingles />} />
          <Route path='/archive/music/lugosi/features' element={<ArchiveMusicLugosiFeatures />} />

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
