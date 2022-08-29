import Description from "../src/components/Description/Description"
import Logo from "../src/components/Logo/Logo"
import Title from "../src/components/Title/Title"

export default function Home() {
  return (
    <>
      <Logo/>
      <Title text='Seu criador automático de playlists.'/>
      <Description text='Crie playlists de acordo com o que você mais escuta no Spotify com poucos cliques.'/>
    </>
  )
}
