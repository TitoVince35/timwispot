# timwispot
Timwi code challenge based on Spotify Open API

## Startup

```bash
$ git clone https://github.com/TitoVince35/timwispot.git
$ cd timwispot
$ docker-compose up
```

- Open your brower at http://localhost:8088
- Get a Spotify API token from the *Console*, at https://developer.spotify.com/console/get-album/ 
- Paste your token on the Login form and hit "Valider"
- Browse to page "Search albums" and start playing

## Alternative

Since Docker environment is not fully functional yet.

- Start **timwispot-api** with `npm i && npm start`
- Start **timwispot-web** in another shell with `yarn && yarn start`

## Tests

> *To test is to doubt...*
