import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Button } from "../../components";
import microphone from '../../assets/microphone.png'
import headphone from '../../assets/headphone.png'
import logo from '../../assets/logo.png'
import './style.css'

const ChooseOption = ()=>{
    const [token, setToken] = useState(null);
    const [tracks, setTracks] = useState(null);
    const [chosed, setChosed] = useState(false);

    useEffect(()=>{
        const parameters = getHashParams()
        setToken(parameters.access_token)  
    }, []);

    function getHashParams() {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
        console.log(window.location.hash)
        e = r.exec(q)
        while (e) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
        e = r.exec(q);
        }
        return hashParams;
       }

      function searchTracksBy(option){
        setChosed(true)
        axios.get(`https://api.spotify.com/v1/me/top/${option}`,{
          headers:{
            'Authorization': `Bearer ${token}`
          }
        })
        .then(res =>{
          setTracks(res.data.items)
          console.log(res.data.items)
        })
      }

      function renderOptionsButtons(){
        if(!token || chosed) return null
        return (
          <div className="buttons">
            <Button search = {searchTracksBy} option = {'artists'} image={microphone} text="Seus artistas mais escutados" />
            <Button search = {searchTracksBy} option = {'tracks'} image={headphone} text="Suas músicas mais escutadas" />
        </div>
        )
      }

      function renderTracks(){
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
          <div className='container'>
              <div className="logo">
            <img src={logo} alt="Logo do Aquafy"/>
          </div>
          <div>
            <h2>Selecione o que você deseja usar para gerar sua playlist:</h2>
            </div>
            {renderOptionsButtons()}
            {renderTracks()}
          </div>
      )
}

export default ChooseOption;