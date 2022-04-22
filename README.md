# Aquafy

<p  align="center">
  <img src="https://github.com/IsabelaMarques07/aquafy/blob/master/aquafy/public/images/banner.png" width="1000px">
</p>

### Aplicação web de geração de playlists automaticamente

## 🚧 Projeto em desenvolvimento 🚧

### Tecnologias utilizadas:
* React JS
* Node

### Design das telas principais
<p  align="left">
  <img src="https://github.com/IsabelaMarques07/aquafy/blob/master/aquafy/public/images/design-telas.png" width="500px">
</p>

### Como rodar o projeto
1. Clone o projeto 
```
git clone https://github.com/IsabelaMarques07/aquafy.git
```
2. Rode o Aquafy
Dentro da pasta /aquafy rode o seguinte comando
```
npm start
```
3. Crie o projeto no Spotify
Na página do Spotify para Developers, crie o projeto para a aplicação no seguinte link
link: https://developer.spotify.com/dashboard/login 

4. Configure o servidor
No arquivo app.js, nas linhas 16 e 17, adicione o client_id, client_secret e o redirect_uri encontrados na dashboard do projeto no site do Spotify.

Obs: use o seguinte redirect_uri no seu projeto e configure a mesma uri em 'edit settings' na dashboard do projeto.
```
var client_id = ''; // Your client id
var client_secret = ''; // Your secret
var redirect_uri = 'http://localhost:8888/callback';
```
5. Rode o projeto de autorização da API
Dentro da pasta /web-api-auth-examples/authorization_code/ rode o seguinte comando
```
node app.js
```
