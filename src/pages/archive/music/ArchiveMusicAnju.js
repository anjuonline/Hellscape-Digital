import ArchiveIndex from 'components/archive/ArchiveIndex';
import ArchiveMusicAnjuSubindex from 'components/archive/artist/anjuonline/ArchiveMusicAnjuSubindex';
import { NavLink } from 'react-router-dom';
import ArchiveMusicSubindex from 'components/archive/ArchiveMusicSubindex';
import MusicAnjuData from 'data/music/AnjuData';
import AnjuAlbumsStatic from 'components/archive/artist/anjuonline/AnjuAlbumsStatic';

// var config = {
//   method: 'get',
//   url: 'http://localhost:3001/songs'
// };

const ArchiveMusicAnju = () => {

  // const [currentSongs, setcurrentSongs] = useState([]);

  // useEffect(() => {
  //   console.log("trying to request songs");
  //   // axios.get(url).then(res => {
  //   //     setMusic(res.data.music);
  //   //     console.log(music);
  //   // })
  //   axios(config)
  //     .then(function (response) {
  //       setcurrentSongs(response.data);
  //       console.log("received songs!", response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <div class="main-column">
      
      <ArchiveIndex />
      
      <div class="card-container">
        <div class="title-wrap-rainbow2">
          <h2>Archive / Music</h2>
        </div>
        <ArchiveMusicSubindex/>
      </div>
      
      <div class="card-container">
        <div class="sticky">
          <div class="title-wrap-rainbow">
            <h2>ANJU Online! / Albums</h2>
          </div>
          <AnjuAlbumsStatic/>
        </div>
      </div>
      
      <div class="card-container">
        <div class="sticky">
          <div class="title-wrap-rainbow2">
            <h2><NavLink to="/archive/music">Archive / Music</NavLink> / <NavLink to="#">ANJU Online!</NavLink></h2>
          </div>
        </div>
        <ArchiveMusicAnjuSubindex songs={MusicAnjuData} />
        {/* <ArchiveMusicAnjuSubindex songs={currentSongs} /> */}
        {/* <ArchiveMusicAnjuAll /> */}
      </div>

    </div>
  );
};
export default ArchiveMusicAnju;
