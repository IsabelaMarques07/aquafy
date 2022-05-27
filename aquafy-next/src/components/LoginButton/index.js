import React from 'react';
import styles from '../LoginButton'
const loginImageUrl = '/images/login.png'

const LoginButton = ({})=>{
    function loginSpotify(){
        window.location.href = "http://localhost:8888";
    }

    return(
        <div onClick={loginSpotify}>
             <img src={loginImageUrl} alt="Logo do Spotify"/>
                <p>Login com Spotify</p>
        </div>
    )
}

export default LoginButton;