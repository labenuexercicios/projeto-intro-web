const recomendedContainer = (obj) => {
  const divContainer = document.createElement("div");
  divContainer.setAttribute("class", "recomended");
  recomendedDiv.appendChild(divContainer);

  const imgContainer = document.createElement("img");
  imgContainer.setAttribute("src", obj.img);
  divContainer.appendChild(imgContainer);

  const albumName = document.createElement("p");
  albumName.setAttribute("class", "music-name");
  albumName.innerText = obj.album;
  divContainer.appendChild(albumName);

  const artistName = document.createElement("p");
  artistName.setAttribute("style", "font-size: 14px; color: #b2b2b2");
  artistName.innerText = obj.artist;
  divContainer.appendChild(artistName);

  const playButtonDiv = document.createElement("div");
  playButtonDiv.setAttribute("class", "play-button-2");
  divContainer.appendChild(playButtonDiv);

  const playButtonSpan = document.createElement("span");
  playButtonSpan.setAttribute("style", "font-size: 34px");
  playButtonSpan.setAttribute("class", "material-symbols-outlined");
  playButtonSpan.innerText = "play_arrow";
  playButtonDiv.appendChild(playButtonSpan);
};

const missedContainer = (obj) => {
  const divContainer = document.createElement("div");
  divContainer.setAttribute("class", "missed");
  missedDiv.appendChild(divContainer);

  const imgContainer = document.createElement("img");
  imgContainer.setAttribute("src", obj.img);
  divContainer.appendChild(imgContainer);

  const albumName = document.createElement("p");
  albumName.setAttribute("class", "music-name");
  albumName.innerText = obj.album;
  divContainer.appendChild(albumName);

  const artistName = document.createElement("p");
  artistName.setAttribute("style", "font-size: 14px; color: #b2b2b2");
  artistName.innerText = obj.artist;
  divContainer.appendChild(artistName);

  const playButtonDiv = document.createElement("div");
  playButtonDiv.setAttribute("class", "play-button-2");
  divContainer.appendChild(playButtonDiv);

  const playButtonSpan = document.createElement("span");
  playButtonSpan.setAttribute("style", "font-size: 34px");
  playButtonSpan.setAttribute("class", "material-symbols-outlined");
  playButtonSpan.innerText = "play_arrow";
  playButtonDiv.appendChild(playButtonSpan);
};

const friendsContainer = (obj) => {
  const divContainer = document.createElement("div");
  divContainer.setAttribute("class", "friends");
  friendsDiv.appendChild(divContainer);

  const imgContainer = document.createElement("img");
  imgContainer.setAttribute("src", obj.img);
  divContainer.appendChild(imgContainer);

  const artistName = document.createElement("p");
  artistName.setAttribute("class", "music-name");
  artistName.innerText = obj.artist;
  divContainer.appendChild(artistName);

  const containerType = document.createElement("p");
  containerType.setAttribute("style", "font-size: 14px; color: #b2b2b2");
  containerType.innerText = "Artista";
  divContainer.appendChild(containerType);

  const playButtonDiv = document.createElement("div");
  playButtonDiv.setAttribute("class", "play-button-2");
  divContainer.appendChild(playButtonDiv);

  const playButtonSpan = document.createElement("span");
  playButtonSpan.setAttribute("style", "font-size: 34px");
  playButtonSpan.setAttribute("class", "material-symbols-outlined");
  playButtonSpan.innerText = "play_arrow";
  playButtonDiv.appendChild(playButtonSpan);
};

const mapRecomendedArray = (obj) => {
  obj.map((x) => {
    recomendedContainer(x);
  });
};

const mapMissedArray = (obj) => {
  obj.map((x) => {
    missedContainer(x);
  });
};

const mapFriendsArray = (obj) => {
  obj.map((x) => {
    friendsContainer(x);
  });
};

const recomended = [
  {
    album: "dont smile at me",
    artist: "Billie Eilish",
    img: "./assets/dont-smile.png",
  },
  ,
  { album: "Evermore", artist: "Taylor Swift", img: "./assets/evermore.png" },

  {
    album: "This Is What It Feels Like",
    artist: "Gracie Abrams",
    img: "./assets/feels-like.jpg",
  },
  ,
  {
    album: "Punisher",
    artist: "Phoebe Bridgers",
    img: "./assets/punisher.png",
  },
  ,
  { album: "Sling", artist: "Clairo", img: "./assets/sling.png" },
];

const missed = [
  {
    album: "Miss Anthropocene",
    artist: "Grimes",
    img: "./assets/miss-anthropocene.png",
  },
  ,
  { album: "Pang", artist: "Caroline Polacheck", img: "./assets/pang.png" },

  {
    album: "Red (Taylor's version)",
    artist: "Taylor Swift",
    img: "./assets/red.png",
  },
  ,
  {
    album: "Refuge",
    artist: "Devendra Banhart",
    img: "./assets/refuge.png",
  },

  {
    album: "Titanic Rising",
    artist: "Weyes Blood",
    img: "./assets/titanic-rising.jpg",
  },
];
const friends = [
  { album: "", artist: "girl in red", img: "./assets/girlinred.png" },
  { album: "", artist: "Lana Del Rey", img: "./assets/lanadelrey.jpg" },
  { album: "", artist: "Phoebe Bridgers", img: "./assets/phoebe.png" },
  { album: "", artist: "The Marías", img: "./assets/themarias.png" },
  { album: "", artist: "Wet Leg", img: "./assets/wetleg.png" },
];

const recomendedDiv = document.getElementById("recomended-container");

const missedDiv = document.getElementById("missed-container");

const friendsDiv = document.getElementById("friends-container");

mapRecomendedArray(recomended);

mapMissedArray(missed);

mapFriendsArray(friends);
