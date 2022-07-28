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
    url: 'https://data.mongodb-api.com/app/data-pkdrs/endpoint/data/v1/action/findOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'oR6xiClryCLh011u0LA61gXZ1YutTIV7AM45UJYQ7qRCYe6lLbKYPuKOjICkKJtZ',
    },
    // data: data
};

const ArchiveMusicAnju = () => {
    
    const url = 'https://data.mongodb-api.com/app/data-pkdrs/endpoint/getMusic';
    const [music, setMusic] = useState([]);

    useEffect(() => {
        // axios.get(url).then(res => {
        //     setMusic(res.data.music);
        //     console.log(music);
        // })
        axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
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
            <ArchiveMusicSubindex/>
        </div> 
        <div class="card-container">
            <div class="sticky">
                <div class="title-wrap-rainbow2">
                    <h2><NavLink to="/archive/music">Archive / Music</NavLink> / <NavLink to="#">ANJU Online!</NavLink></h2>
                </div> 
            </div>   
            <ArchiveMusicAnjuSubindex/>        
            <ArchiveMusicAnjuAll/>
        </div> 
  
      </div>
    );
  };
  export default ArchiveMusicAnju;
  