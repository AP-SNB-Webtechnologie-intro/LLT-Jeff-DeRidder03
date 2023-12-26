const client_id = 'b3bbcdc488f5477d99579f09c3c4a4d1'; 
const client_secret = '4b12e37e11094ec6a311030c931a45fe';

async function getToken() {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    body: new URLSearchParams({
      'grant_type': 'client_credentials',
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + (btoa(client_id + ':' + client_secret)),
    },
  });

  return await response.json();
}

async function getToptracks(access_token) {
    const response = await fetch("https://api.spotify.com/v1/artists/6lZ9MW0eEVePXdpa87Wag4/top-tracks?market=BE", {
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + access_token },
    });
  
    return await response.json();
  }

getToken().then(response => {
  getToptracks(response.access_token).then(tracks => {
    console.log(tracks)
    document.getElementById("trackinfo").textContent = tracks.tracks[0].name;
  })
  getToptracks(response.access_token).then(tracks => {
    console.log(tracks)
    document.getElementById("trackinfo2").textContent = tracks.tracks[1].name;
  })
  getToptracks(response.access_token).then(tracks => {
    console.log(tracks)
    document.getElementById("trackinfo3").textContent = tracks.tracks[2].name;
  })
  getToptracks(response.access_token).then(tracks => {
    console.log(tracks)
    document.getElementById("trackinfo4").textContent = tracks.tracks[3].name;
  })
  getToptracks(response.access_token).then(tracks => {
    console.log(tracks)
    document.getElementById("trackinfo5").textContent = tracks.tracks[4].name;
  })


  getToptracks(response.access_token).then(tracks => {
    console.log(tracks)
    document.getElementById("trackinfopopulair").textContent = tracks.tracks[0].popularity;
  })
  getToptracks(response.access_token).then(tracks => {
    console.log(tracks)
    document.getElementById("trackinfopopulair2").textContent = tracks.tracks[1].popularity;
  })
  getToptracks(response.access_token).then(tracks => {
    console.log(tracks)
    document.getElementById("trackinfopopulair3").textContent = tracks.tracks[2].popularity;
  })
  getToptracks(response.access_token).then(tracks => {
    console.log(tracks)
    document.getElementById("trackinfopopulair4").textContent = tracks.tracks[3].popularity;
  })
  getToptracks(response.access_token).then(tracks => {
    console.log(tracks)
    document.getElementById("trackinfopopulair5").textContent = tracks.tracks[4].popularity;
  })
});