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

import ArchiveMusicMeauxminy from './pages/archive/music/meauxminy/ArchiveMusicMeauxminy';
import ArchiveMusicMeauxminyAlbums from './pages/archive/music/meauxminy/ArchiveMusicMeauxminyAlbums';
import ArchiveMusicMeauxminyEps from './pages/archive/music/meauxminy/ArchiveMusicMeauxminyEps';
import ArchiveMusicMeauxminySingles from './pages/archive/music/meauxminy/ArchiveMusicMeauxminySingles';
import ArchiveMusicMeauxminyCollabs from './pages/archive/music/meauxminy/ArchiveMusicMeauxminyCollabs';
import ArchiveMusicMeauxminyRemixes from './pages/archive/music/meauxminy/ArchiveMusicMeauxminyRemixes';

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

          <Route path='/anjuonline/music/all' element={<ArchiveMusicAnju />} />
          <Route path='/anjuonline/music/singles' element={<ArchiveMusicAnjuSingles />} />
          <Route path='/anjuonline/music/remixes' element={<ArchiveMusicAnjuRemixes />} />
          <Route path='/anjuonline/music/placements' element={<ArchiveMusicAnjuPlacements />} />
          <Route path='/anjuonline/music/djsets' element={<ArchiveMusicAnjuDjSets />} />
          <Route path='/anjuonline/music/albums' element={<ArchiveMusicAnjuAlbums />} />

          <Route path='/kawaiiry/all' element={<ArchiveMusicKawaii />} />
          <Route path='/kawaiiry/albums' element={<ArchiveMusicKawaiiAlbums />} />
          <Route path='/kawaiiry/eps' element={<ArchiveMusicKawaiiEps />} />
          <Route path='/kawaiiry/singles' element={<ArchiveMusicKawaiiSingles />} />
          <Route path='/kawaiiry/features' element={<ArchiveMusicKawaiiFeatures />} />

          <Route path='/archive/music/lugosi/all' element={<ArchiveMusicLugosi />} />
          <Route path='/archive/music/lugosi/eps' element={<ArchiveMusicLugosiEps />} />
          <Route path='/archive/music/lugosi/singles' element={<ArchiveMusicLugosiSingles />} />
          <Route path='/archive/music/lugosi/features' element={<ArchiveMusicLugosiFeatures />} />

          <Route path='/meauxminy/all' element={<ArchiveMusicMeauxminy />} />
          <Route path='/meauxminy/albums' element={<ArchiveMusicMeauxminyAlbums />} />
          <Route path='/meauxminy/eps' element={<ArchiveMusicMeauxminyEps />} />
          <Route path='/meauxminy/singles' element={<ArchiveMusicMeauxminySingles />} />
          <Route path='/meauxminy/collabs' element={<ArchiveMusicMeauxminyCollabs />} />
          <Route path='/meauxminy/remixes' element={<ArchiveMusicMeauxminyRemixes />} />

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
