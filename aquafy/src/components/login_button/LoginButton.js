import React from 'react';
import "./style.css"
import login from '../../assets/login.png'

const LoginButton = ({})=>{
    function loginSpotify(){
        window.location.href = "http://localhost:8888";
    }

    return(
        <div className="login-button">
             <img src={login} alt="Logo do Spotify"/>
            <a onClick={loginSpotify}>Login com Spotify</a>
        </div>
    )
}

export default LoginButton;