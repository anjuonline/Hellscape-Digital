import ArchiveIndex from 'components/archive/ArchiveIndex';
import ArchiveMusicSubindex from 'components/archive/ArchiveMusicSubindex';
import ArchiveMusicAnjuAll from 'components/archive/artist/anjuonline/ArchiveMusicAnjuAll';
import ArchiveMusicAnjuSubindex from 'components/archive/artist/anjuonline/ArchiveMusicAnjuSubindex';
import StatsMusicAnju from 'components/stats/StatsMusicAnju';
import { NavLink } from 'react-router-dom';
import {useEffect, useState} from "react";
import axios from "axios";

var data = JSON.stringify({
    "collection": "Music",
    "database": "Archive",
    "dataSource": "hellscape-digital",
    "projection": {
        "_id": 1
    }
});

var config = {
    method: 'get',
    url: 'http://localhost:3001/songs',
    // headers: {
    //   'Content-Type': 'application/json',
    //   'Access-Control-Request-Headers': '*',
    // },
    // data: data
};

const ArchiveMusicAnju = () => {
    
    const [currentSongs, setcurrentSongs] = useState([]);

    useEffect(() => {
        console.log("trying to request songs");
        // axios.get(url).then(res => {
        //     setMusic(res.data.music);
        //     console.log(music);
        // })
        axios(config)
        .then(function (response) {
            setcurrentSongs(response.data);
            console.log("received songs!", response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }, [])
            
    return (
      <div class="main-column">
        <ArchiveIndex/>
        <div class="card-container">
            <div class="title-wrap-rainbow2">
                <h2>Archive / Music</h2>
            </div>

            {/* <ArchiveMusicSubindex songs={currentSongs} /> */}
        </div>
        <div class="card-container">
            <div class="sticky">
                <div class="title-wrap-rainbow2">
                    <h2><NavLink to="/archive/music">Archive / Music</NavLink> / <NavLink to="#">ANJU Online!</NavLink></h2>
                </div> 
            </div>   
            <ArchiveMusicAnjuSubindex songs={currentSongs} />        
            <ArchiveMusicAnjuAll/>
        </div> 
  
      </div>
    );
  };
  export default ArchiveMusicAnju;
  