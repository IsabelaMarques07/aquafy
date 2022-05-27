import React from 'react'
import {LoginButton} from   '../../components'
import logo from '../../assets/logo.png'
import './style.css'

const Home = () =>{

    return(
        <div className='container'>
          <div className="logo">
            <img src={logo} alt="Logo do Aquafy"/>
          </div>
          <div>
            <h2>Seu criador automático de playlists.</h2>
            <h3>Crie playlists de acordo com o que você mais escuta no Spotify com poucos cliques.</h3>
          </div>

          <LoginButton/>
        </div>
    )
}

export default Home;