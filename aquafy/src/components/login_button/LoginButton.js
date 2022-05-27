import React from 'react';
import "./style.css"
import login from '../../assets/login.png'

const LoginButton = ({})=>{
    function loginSpotify(){
        window.location.href = "http://localhost:8888";
    }

    return(
        <div onClick={loginSpotify} className="login-button">
             <img src={login} alt="Logo do Spotify"/>
                <p>Login com Spotify</p>
        </div>
    )
}

export default LoginButton;