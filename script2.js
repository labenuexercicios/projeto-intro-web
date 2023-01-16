const albumContainer = (obj) => {
  const divContainer = document.createElement("div");
  divContainer.setAttribute("class", "music");
  divContainer.setAttribute("class", "album");
  searchContainer.appendChild(divContainer);

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

const artistContainer = (obj) => {
  const divContainer = document.createElement("div");
  divContainer.setAttribute("class", "music");
  divContainer.setAttribute("class", "artist");
  searchContainer.appendChild(divContainer);

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

const musics = [
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
    artist: "Devendra Banhart feat. Noah Georgeson",
    img: "./assets/refuge.png",
  },

  {
    album: "Titanic Rising",
    artist: "Weyes Blood",
    img: "./assets/titanic-rising.jpg",
  },
  ,
  { album: "", artist: "girl in red", img: "./assets/girlinred.png" },
  { album: "", artist: "Lana Del Rey", img: "./assets/lanadelrey.jpg" },
  { album: "", artist: "Phoebe Bridgers", img: "./assets/phoebe.png" },
  { album: "", artist: "The Marías", img: "./assets/themarias.png" },
  { album: "", artist: "Wet Leg", img: "./assets/wetleg.png" },
];

const searchMusic = (event) => {
  let filteredMusics = [];
  const search = input.value;

  if (event.key === "Enter") {
    event.preventDefault();
    searchContainer.innerHTML = "";

    filteredMusics = musics.filter((music) => {
      if (
        music.artist.toLowerCase().includes(search.toLowerCase()) ||
        music.album.toLowerCase().includes(search.toLowerCase())
      ) {
        return music;
      }
    });
    for (let i in filteredMusics) {
      if (filteredMusics[i].album === "") {
        console.log(filteredMusics[i]);
        artistContainer(filteredMusics[i]);
      } else {
        console.log(filteredMusics[i]);
        albumContainer(filteredMusics[i]);
      }
    }

    if (filteredMusics.length === 0) {
      const noResults = document.createElement("h1");
      noResults.innerText = `Resultado não encontrado`;
      searchContainer.appendChild(noResults);
    }
  }
};

const styleContainers = () => {
  const sectionContainer = document.querySelectorAll(".section-container");
  for (let i in sectionContainer) {
    sectionContainer[i].style.background =
      "rgb(" +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      ")";
  }
};

const goBack = () => {
  window.history.back();
};

const goForward = () => {
  winddow.history.forward();
};

const searchContainer = document.getElementById("search-results");

const input = document.getElementById("search-input");

input.addEventListener("keypress", searchMusic);

const allSectionsDiv = document.createElement("div");
allSectionsDiv.setAttribute("class", "all-sections-div");

allSectionsDiv.innerHTML = `<h1>Navegar por todas as seções</h1><div class="all-sections"><div class="section-container" id="c-18"><p>Podcasts</p></div>
<div class="section-container" id="c-1"><p>Feito para você</p></div>
<div class="section-container" id="c-2"><p>Lançamentos</p></div>
<div class="section-container" id="c-3"><p>Brasil</p></div>
<div class="section-container" id="c-4"><p>Funk</p></div>
<div class="section-container" id="c-5"><p>Pop</p></div>
<div class="section-container" id="c-6"><p>Paradas</p></div>
<div class="section-container" id="c-7"><p>Hip Hop</p></div>
<div class="section-container" id="c-8"><p>Samba e pagode</p></div>
<div class="section-container" id="c-9"><p>MPB</p></div>
<div class="section-container" id="c-10"><p>Descobrir</p></div>
<div class="section-container" id="c-11"><p>Foco</p></div>
<div class="section-container" id="c-12"><p>Rock</p></div>
<div class="section-container" id="c-13"><p>Indie</p></div>
<div class="section-container" id="c-14"><p>RADAR</p></div>
<div class="section-container" id="c-15"><p>LGBTQ+</p></div>
<div class="section-container" id="c-16"><p>Seu astral</p></div>
<div class="section-container" id="c-17"><p>Relax</p></div>
<div class="section-container" id="c-17"><p>Clássico</p></div>
<div class="section-container" id="c-17"><p>Instrumental</p></div>
<div class="section-container" id="c-17"><p>Blues</p></div>
<div class="section-container" id="c-17"><p>Punk</p></div>
<div class="section-container" id="c-17"><p>Jazz</p></div>
<div class="section-container" id="c-17"><p>Afro</p></div>
</div>

`;

searchContainer.appendChild(allSectionsDiv);

styleContainers();
