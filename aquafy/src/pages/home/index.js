import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {Button} from   '../../components'
import microphone from '../../assets/microphone.png'
import headphone from '../../assets/headphone.png'
import './style.css'

const Home = () =>{
    const [token, setToken] = useState(null);
    const [tracks, setTracks] = useState(null);

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

      function renderMusic(){
        if(tracks !== null)
        return (
            tracks.map((track, index) => {
              return(
                  <p key={index}>{track.name}</p>
              )
          })
        )
      }

    return(
        <div>
          <div className="buttons">
            <Button image={microphone} text="Seus artistas mais escutados" />
            <Button image={headphone} text="Suas músicas mais escutadas" />
          </div>
            <a href="http://localhost:8888">Logar</a>
            <h4>Lista de músicas</h4>
            {renderMusic()}
        </div>
    )
}

export default Home;