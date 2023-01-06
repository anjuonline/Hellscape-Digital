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
import ArchiveMusicAnjuMusicVideos from './pages/archive/music/anjuonline/ArchiveMusicAnjuMusicVideos';
import ArchiveMusicAnju2018 from './pages/archive/music/anjuonline/year/ArchiveMusicAnju2018';
import ArchiveMusicAnju2019 from './pages/archive/music/anjuonline/year/ArchiveMusicAnju2019';
import ArchiveMusicAnju2020 from './pages/archive/music/anjuonline/year/ArchiveMusicAnju2020';
import ArchiveMusicAnju2021 from './pages/archive/music/anjuonline/year/ArchiveMusicAnju2021';
import ArchiveMusicAnju2022 from './pages/archive/music/anjuonline/year/ArchiveMusicAnju2022';

import ArchiveMusicKawaii from './pages/archive/music/kawaiiry/ArchiveMusicKawaii';
import ArchiveMusicKawaiiAlbums from './pages/archive/music/kawaiiry/ArchiveMusicKawaiiAlbums';
import ArchiveMusicKawaiiEps from './pages/archive/music/kawaiiry/ArchiveMusicKawaiiEps';
import ArchiveMusicKawaiiSingles from './pages/archive/music/kawaiiry/ArchiveMusicKawaiiSingles';
import ArchiveMusicKawaiiFeatures from './pages/archive/music/kawaiiry/ArchiveMusicKawaiiFeatures';

import ArchiveMusicLugosi from './pages/archive/music/lugosi/ArchiveMusicLugosi';
import ArchiveMusicLugosiEps from './pages/archive/music/lugosi/ArchiveMusicLugosiEps';
import ArchiveMusicLugosiAlbums from './pages/archive/music/lugosi/ArchiveMusicLugosiAlbums';
import ArchiveMusicLugosiSingles from './pages/archive/music/lugosi/ArchiveMusicLugosiSingles';
import ArchiveMusicLugosiFeatures from './pages/archive/music/lugosi/ArchiveMusicLugosiFeatures';

import ArchiveMusicMeauxminy from './pages/archive/music/meauxminy/ArchiveMusicMeauxminy';
import ArchiveMusicMeauxminyAlbums from './pages/archive/music/meauxminy/ArchiveMusicMeauxminyAlbums';
import ArchiveMusicMeauxminyEps from './pages/archive/music/meauxminy/ArchiveMusicMeauxminyEps';
import ArchiveMusicMeauxminySingles from './pages/archive/music/meauxminy/ArchiveMusicMeauxminySingles';
import ArchiveMusicMeauxminyCollabs from './pages/archive/music/meauxminy/ArchiveMusicMeauxminyCollabs';
import ArchiveMusicMeauxminyRemixes from './pages/archive/music/meauxminy/ArchiveMusicMeauxminyRemixes';
import ArchiveMusicMeauxminyPlacements from './pages/archive/music/meauxminy/ArchiveMusicMeauxminyPlacements';
import ArchiveMusicMeauxminyDjSets from './pages/archive/music/meauxminy/ArchiveMusicMeauxminyDjSets';

import ArchiveMusicJosen from './pages/archive/music/josen/ArchiveMusicJosen';
import ArchiveMusicJosenAlbums from './pages/archive/music/josen/ArchiveMusicJosenAlbums';
import ArchiveMusicJosenSingles from './pages/archive/music/josen/ArchiveMusicJosenSingles';
import ArchiveMusicJosenFeatures from './pages/archive/music/josen/ArchiveMusicJosenFeatures';

import ArchiveMusicNotamachine from './pages/archive/music/notamachine/ArchiveMusicNotamachine';
import ArchiveMusicNotamachineAlbums from './pages/archive/music/notamachine/ArchiveMusicNotamachineAlbums';
import ArchiveMusicNotamachineSingles from './pages/archive/music/notamachine/ArchiveMusicNotamachineSingles';
import ArchiveMusicNotamachinePlacements from './pages/archive/music/notamachine/ArchiveMusicNotamachinePlacements';
import ArchiveMusicNotamachineRemixes from './pages/archive/music/notamachine/ArchiveMusicNotamachineRemixes';
import ArchiveMusicNotamachineCollabs from './pages/archive/music/notamachine/ArchiveMusicNotamachineCollabs';

import ArchiveMusicRemy3d from './pages/archive/music/remy3d/ArchiveMusicRemy3d';
import ArchiveMusicRemy3dSingles from './pages/archive/music/remy3d/ArchiveMusicRemy3dSingles';
import ArchiveMusicRemy3dFeatures from './pages/archive/music/remy3d/ArchiveMusicRemy3dFeatures';
import ArchiveMusicRemy3dPlacements from './pages/archive/music/remy3d/ArchiveMusicRemy3dPlacements';

import ArchiveMusicRileylol from './pages/archive/music/rileylol/ArchiveMusicRileylol';
import ArchiveMusicRileylolEps from './pages/archive/music/rileylol/ArchiveMusicRileylolEps';
import ArchiveMusicRileylolSingles from './pages/archive/music/rileylol/ArchiveMusicRileylolSingles';
import ArchiveMusicRileylolFeatures from './pages/archive/music/rileylol/ArchiveMusicRileylolFeatures';

import ArchiveMusicSemaj from './pages/archive/music/semaj/ArchiveMusicSemaj';
import ArchiveMusicSemajSingles from './pages/archive/music/semaj/ArchiveMusicSemajSingles';
import ArchiveMusicSemajPlacements from './pages/archive/music/semaj/ArchiveMusicSemajPlacements';
import ArchiveMusicSemajFeatures from './pages/archive/music/semaj/ArchiveMusicSemajFeatures';

import ArchiveMusicVideos from './pages/archive/music/hellscape/ArchiveMusicVideos';
import ArchiveMusicVideos2021 from './pages/archive/music/hellscape/year/ArchiveMusicVideos2021';
import ArchiveMusicVideos2022 from './pages/archive/music/hellscape/year/ArchiveMusicVideos2022';
import ArchiveMusicHellscapeRadio from './pages/archive/music/hellscape/ArchiveMusicHellscapeRadio';

import ArchiveArtwork from './pages/archive/artwork/ArchiveArtwork';
import ArchiveArtworkAll from './pages/archive/artwork/ArchiveArtworkAll';

import ArchiveArtworkAnju from './pages/archive/artwork/anjuonline/ArchiveArtworkAnju';
import ArchiveArtworkAnjuIllustration from './pages/archive/artwork/anjuonline/ArchiveArtworkAnjuIllustration';
import ArchiveArtworkAnjuDesign from './pages/archive/artwork/anjuonline/ArchiveArtworkAnjuDesign';
import ArchiveArtworkAnjuMixedMedia from './pages/archive/artwork/anjuonline/ArchiveArtworkAnjuMixedMedia';

import ArchiveArtworkCloudiDaze from './pages/archive/artwork/cloudidaze/ArchiveArtworkCloudiDaze';

import ArchiveUpdates from './pages/archive/updates/ArchiveUpdates';
import ArchiveChangelog from './pages/archive/updates/ArchiveChangelog';
import Store from './pages/store/Store';

import AnjuHomepage from './pages/roster/anjuonline/AnjuHomepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='/artwork' element={<Artwork />} />
          <Route path='/archive' element={<Archive />} />
          <Route path='/archive/music' element={<ArchiveMusic />} />
          <Route path='/archive/music/all' element={<ArchiveMusicAll />} />          

          <Route path='/anjuonline/music/all' element={<ArchiveMusicAnju />} />
          <Route path='/anjuonline/music/singles' element={<ArchiveMusicAnjuSingles />} />
          <Route path='/anjuonline/music/remixes' element={<ArchiveMusicAnjuRemixes />} />
          <Route path='/anjuonline/music/placements' element={<ArchiveMusicAnjuPlacements />} />
          <Route path='/anjuonline/music/djsets' element={<ArchiveMusicAnjuDjSets />} />
          <Route path='/anjuonline/music/albums' element={<ArchiveMusicAnjuAlbums />} />
          <Route path='/anjuonline/music/videos' element={<ArchiveMusicAnjuMusicVideos />} />
          <Route path='/anjuonline/music/2018' element={<ArchiveMusicAnju2018 />} />
          <Route path='/anjuonline/music/2019' element={<ArchiveMusicAnju2019 />} />
          <Route path='/anjuonline/music/2020' element={<ArchiveMusicAnju2020 />} />
          <Route path='/anjuonline/music/2021' element={<ArchiveMusicAnju2021 />} />
          <Route path='/anjuonline/music/2022' element={<ArchiveMusicAnju2022 />} />

          <Route path='/kawaiiry/all' element={<ArchiveMusicKawaii />} />
          <Route path='/kawaiiry/albums' element={<ArchiveMusicKawaiiAlbums />} />
          <Route path='/kawaiiry/eps' element={<ArchiveMusicKawaiiEps />} />
          <Route path='/kawaiiry/singles' element={<ArchiveMusicKawaiiSingles />} />
          <Route path='/kawaiiry/features' element={<ArchiveMusicKawaiiFeatures />} />

          <Route path='/lugosi/all' element={<ArchiveMusicLugosi />} />
          <Route path='/lugosi/eps' element={<ArchiveMusicLugosiEps />} />
          <Route path='/lugosi/albums' element={<ArchiveMusicLugosiAlbums />} />
          <Route path='/lugosi/singles' element={<ArchiveMusicLugosiSingles />} />
          <Route path='/lugosi/features' element={<ArchiveMusicLugosiFeatures />} />

          <Route path='/meauxminy/all' element={<ArchiveMusicMeauxminy />} />
          <Route path='/meauxminy/albums' element={<ArchiveMusicMeauxminyAlbums />} />
          <Route path='/meauxminy/eps' element={<ArchiveMusicMeauxminyEps />} />
          <Route path='/meauxminy/singles' element={<ArchiveMusicMeauxminySingles />} />
          <Route path='/meauxminy/collabs' element={<ArchiveMusicMeauxminyCollabs />} />
          <Route path='/meauxminy/remixes' element={<ArchiveMusicMeauxminyRemixes />} />
          <Route path='/meauxminy/placements' element={<ArchiveMusicMeauxminyPlacements />} />
          <Route path='/meauxminy/djsets' element={<ArchiveMusicMeauxminyDjSets />} />

          <Route path='/josen/all' element={<ArchiveMusicJosen />} />
          <Route path='/josen/albums' element={<ArchiveMusicJosenAlbums />} />
          <Route path='/josen/singles' element={<ArchiveMusicJosenSingles />} />
          <Route path='/josen/features' element={<ArchiveMusicJosenFeatures />} />

          <Route path='/notamachine/all' element={<ArchiveMusicNotamachine />} />
          <Route path='/notamachine/albums' element={<ArchiveMusicNotamachineAlbums />} />
          <Route path='/notamachine/singles' element={<ArchiveMusicNotamachineSingles />} />
          <Route path='/notamachine/placements' element={<ArchiveMusicNotamachinePlacements />} />
          <Route path='/notamachine/remixes' element={<ArchiveMusicNotamachineRemixes />} />
          <Route path='/notamachine/collabs' element={<ArchiveMusicNotamachineCollabs />} />

          <Route path='/remy3d/all' element={<ArchiveMusicRemy3d />} />
          <Route path='/remy3d/singles' element={<ArchiveMusicRemy3dSingles />} />
          <Route path='/remy3d/features' element={<ArchiveMusicRemy3dFeatures />} />
          <Route path='/remy3d/placements' element={<ArchiveMusicRemy3dPlacements />} />

          <Route path='/rileylol/all' element={<ArchiveMusicRileylol />} />
          <Route path='/rileylol/eps' element={<ArchiveMusicRileylolEps />} />
          <Route path='/rileylol/singles' element={<ArchiveMusicRileylolSingles />} />
          <Route path='/rileylol/features' element={<ArchiveMusicRileylolFeatures />} />

          <Route path='/semaj/all' element={<ArchiveMusicSemaj />} />
          <Route path='/semaj/singles' element={<ArchiveMusicSemajSingles />} />
          <Route path='/semaj/placements' element={<ArchiveMusicSemajPlacements />} />
          <Route path='/semaj/features' element={<ArchiveMusicSemajFeatures />} />

          <Route path='/videos/all' element={<ArchiveMusicVideos />} />
          <Route path='/videos/2021' element={<ArchiveMusicVideos2021 />} />
          <Route path='/videos/2022' element={<ArchiveMusicVideos2022 />} />
          <Route path='/hellscaperadio' element={<ArchiveMusicHellscapeRadio />} />

          <Route path='/archive/artwork' element={<ArchiveArtwork />} />
          <Route path='/archive/artwork/all' element={<ArchiveArtworkAll />} />

          <Route path='/music' element={<Music />} />

          <Route path='/anjuonline/art/all' element={<ArchiveArtworkAnju />} />
          <Route path='/anjuonline/art/illustration' element={<ArchiveArtworkAnjuIllustration />} />
          <Route path='/anjuonline/art/design' element={<ArchiveArtworkAnjuDesign />} />
          <Route path='/anjuonline/art/misc' element={<ArchiveArtworkAnjuMixedMedia />} />

          <Route path='/cloudidaze/all' element={<ArchiveArtworkCloudiDaze />} />

          <Route path='/updates' element={<ArchiveUpdates />} />
          <Route path='/changelog' element={<ArchiveChangelog />} />
          <Route path='/store' element={<Store />} />

          <Route path='/anjuonline' element={<AnjuHomepage />} />

        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
