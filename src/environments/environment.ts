export const environment = {
    production: false
  };
  
  export const SpotifyConfiguration = {
    clientId: '81d922acd1914c5781338d9fe4e1b07a',
    authEndpoint: 'https://accounts.spotify.com/authorize',
    redirectUrl: 'http://localhost:4200/login/',
    scopes: [
      "user-read-currently-playing", // musica tocando agora.
      "user-read-recently-played", // ler musicas tocadas recentemente
      "user-read-playback-state", // ler estado do player do usuario
      "user-top-read", // top artistas e musicas do usuario
      "user-modify-playback-state", // alterar do player do usuario.
      "user-library-read", // ler biblioteca dos usuarios
      "playlist-read-private", // ler playlists privads
      "playlist-read-collaborative" // ler playlists colaborativas
    ]
  }