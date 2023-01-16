const music1 = {
  nome: "Cardigan",
  artist: "Taylor Swift",
  album: "Folklore",
  dur: 3.59,
  genre: "Folk-pop",
  saved: false,
  relatedArtists: ["Gracie Abrams", "Olivia Rodrigo", "Lizzie McAlpine"],
};

const music2 = {
  nome: "Scott Street",
  artist: "Phoebe Bridgers",
  album: "Stranger in the Alps",
  dur: 5.05,
  genre: "Indie-folk",
  saved: true,
  relatedArtists: ["Boygenius", "Big Thief", "Angel Olsen"],
};

const music3 = {
  nome: "Everything in Its Right Place",
  artist: "Radiohead",
  album: "Kid A",
  dur: 4.11,
  genre: "Alternative Rock",
  saved: true,
  relatedArtists: ["Alt-J", "Bon Iver", "Arcade Fire"],
};

const saved = [];

function isSaved(music) {
  if (music.saved == true) {
    saved.push(music);
  } else {
    console.log(`${music.nome} - ${music.artist} is not saved 🎼💔`); ////////inserir alert
  }
}

isSaved(music1);
isSaved(music2);
isSaved(music3);

const average = (music) => {
  let calcAverage = 0;
  for (i in music) {
    calcAverage += music[i].dur;
  }
  calcAverage = calcAverage / music.length;
  return calcAverage.toFixed(2);
};

const favArtists = [
  "Taylor Swift",
  "Phoebe Bridgers",
  "Tamino",
  "Gracie Abrams",
  "Radiohead",
];

// console.log(`\n🔊⏯️ This is your recently played songs 🔊⏯️ \n`);
// console.table(music1);

// console.table(music2);

// console.table(music3);

const music = [];

music.push(music1);
music.push(music2);
music.push(music3);

console.log(
  `\nThe average of listened minutes today was ${average(music)} 🎧🎶\n`
);

console.log(`\n💖🎵 This is your saved songs 🎵💖\n`);
console.table(saved);

console.log(`\n🌟🎵 This is your top favorite artists from last month 🎵🌟\n`);
console.table(favArtists);

// console.log(`\n🔊⏯️ This is your recently played songs 🔊⏯️ \n`);
// console.table(music);

const arrayToString = (music) => {
  for (let i in music) {
    music[i].relatedArtists = music[i].relatedArtists.toString();
  }
};

arrayToString(music);

console.log(`\n🔊⏯️ This is your recently played songs 🔊⏯️ \n`);
console.table(music);

const printData = (music) => {
  for (song of music) {
    for (data in song) {
      console.log(`${data}: ${song[data]}`);
    }
  }
};

// printData(music);

const searchMusic = (music, search) => {
  let a = "";
  for (i in music) {
    if (music[i].nome.includes(search)) {
      a = music[i].nome;
      console.log(a);
      break;
    }
  }
  if (a == "") {
    console.log(`No results found`);
  }
};
searchMusic(music, "Scott");
