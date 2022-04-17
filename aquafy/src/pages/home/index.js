import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {Button} from   '../../components'
const Home = () =>{
    const [token, setToken] = useState(null);
    const [tracks, setTracks] = useState(null)

    useEffect(()=>{
       const parameters = getHashParams()
       setToken(parameters.access_token)
       topTracksLorde()
    }, []);

    function getHashParams() {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
        e = r.exec(q)
        while (e) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
        e = r.exec(q);
        }
        return hashParams;
       }

       function topTracksLorde(){
        axios.get(`https://api.spotify.com/v1/artists/163tK9Wjr9P9DmM0AVK7lm/top-tracks?country=BR`,{
          headers:{
            'Authorization': `Bearer ${token}`
          }
        })
        .then(res =>{
          setTracks(res.data.tracks)
          console.log(res.data.tracks)
        })
      }
    if(tracks === null){
        return null
    }


    return(
        <div>
            <Button/>
            <a href="http://localhost:8888">PlaylistCreator</a>
            <p>{token}</p>
            <h4>Lista de músicas</h4>
            {tracks.map((track, index) => {
                return(
                    <p key={index}>{track.name}</p>
                )
            })}
        </div>
    )
}

export default Home;