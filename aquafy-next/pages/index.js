import LoginButton from "../src/components/LoginButton"

const logoUrl = '/images/logo.png';

export default function HomePage(){
    return (
        <div className="container">
        <div className="logo">
          <img src={logoUrl} alt="Logo do Aquafy"/>
        </div>
        <div>
          <h2>Seu criador automático de playlists.</h2>
          <h3>Crie playlists de acordo com o que você mais escuta no Spotify com poucos cliques.</h3>
        </div>
        <LoginButton/>
        
      </div>
    )
}