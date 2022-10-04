
// // SEMANA 01/02

// const filme01 = "Meu amigo Totoro".toUpperCase();
// const anoDeLancamento01 = 1988
// const duracaoEmMinutos01 = 86;
// const RoteiroDeHayaoMiyazaki01 = true
// const elenco01 = ["Chika Sakamoto", "Noriko Hidaka", "Hitoshi Takagi"]

// const filme02 = "O Serviço de Entregas da Kiki".toUpperCase();
// const anoDeLancamento02 = 1989
// const duracaoEmMinutos02 = 103;
// const RoteiroDeHayaoMiyazaki02 = true
// const elenco02 = ["Minami Takayama", "Rei Sakuma", "Kappei Yamaguchi"]

// const filme03 = "Sussurros do Coração".toUpperCase();
// const anoDeLancamento03 = 1995
// const duracaoEmMinutos03 = 111;
// const RoteiroDeHayaoMiyazaki03 = true
// const elenco03 = ["Yoko Honna","Issei Takahashi", "Takashi Tachibana", "Shigeru Muroi", "Shigeru Tsuyuguchi", "Keiju Kobayashi"]

// const filme04 = "Mononoke Hime".toUpperCase();
// const anoDeLancamento04 = 1997
// const duracaoEmMinutos04 = 133;
// const RoteiroDeHayaoMiyazaki04 = true
// const elenco04 = ["Yoji Matsuda", "Yuriko Ishida","Yuko Tanaka","Kaoru Kobayashi",
//     "Masahiko Nishimura","Tsunehiko Kamijo","Akihiro Miwa"," Mitsuko Mori","Hisaya Morishige"]

// const filme05 = "A Viagem de Chihiro".toUpperCase();
// const anoDeLancamento05 = 2001
// const duracaoEmMinutos05 = 125;
// const RoteiroDeHayaoMiyazaki05 = true
// const elenco05 = [	"Rumi Hiiragi","Miyu Irino","Mari Natsuki","Takeshi Naito",
//     "Yasuko Sawaguchi","Tsunehiko Kamijo","Takehiko Ono","Bunta Sugawara"]

// const filme06 = "O Reino dos Gatos".toUpperCase();
// const anoDeLancamento06 = 2002
// const duracaoEmMinutos06 = 75;
// const RoteiroDeHayaoMiyazaki06 = true
// const elenco06 = ["	Chizuru Ikewaki","Yoshihiko Hakamada","Aki Maeda","Takayuki Yamada",
//     "Hitomi Sato",'Kenta Satoi',"Mari Hamada","Tetsu Watanabe"]

// const filme07 = "O Castelo Animado".toUpperCase();
// const anoDeLancamento07 = 2004
// const duracaoEmMinutos07 = 119;
// const RoteiroDeHayaoMiyazaki07 = true
// const elenco07 = ["Chieko Baisho", "Takuya Kimura", "Akihiro Miwa"]

// const filme08 = "Ponyo – Uma Amizade Que Veio do Mar".toUpperCase();
// const anoDeLancamento08 = 2008
// const duracaoEmMinutos08 = 101 ;
// const RoteiroDeHayaoMiyazaki08 = true
// const elenco08 = ["Tomoko Yamaguchi","Kazushige Nagashima","Yuki Amami","George Tokoro",
//     "Yuria Nara", "Hiroki Doi", "Rumi Hiiragi", "Akiko Yano", "Kazuko Yoshiyuki", "Tomoko Naraoka"]

// const filme09 = "Vidas ao Vento".toUpperCase();
// const anoDeLancamento09 = 2013
// const duracaoEmMinutos09 = 126 ;
// const RoteiroDeHayaoMiyazaki09 = true
// const elenco09 = ["Hideaki Anno", "Miori Takimoto", "Hidetoshi Nishijima","Masahiko Nishimura", "Morio Kazama", "Keiko Takeshita",
//     "Mirai Shida", "Jun Kunimura", "Shinobu Otake", "Mansai Nomura"]

// const media = (duracaoEmMinutos01 + duracaoEmMinutos02 + duracaoEmMinutos03 + duracaoEmMinutos04 + duracaoEmMinutos05 + duracaoEmMinutos06 + duracaoEmMinutos07 + duracaoEmMinutos08 + duracaoEmMinutos09) % 9
// console.log(media, "minutos");

// const verificarRoterista = (RoteiroDeHayaoMiyazaki01 && RoteiroDeHayaoMiyazaki02 && RoteiroDeHayaoMiyazaki03 && RoteiroDeHayaoMiyazaki04 && RoteiroDeHayaoMiyazaki05 && RoteiroDeHayaoMiyazaki06 && RoteiroDeHayaoMiyazaki07 && RoteiroDeHayaoMiyazaki08 && RoteiroDeHayaoMiyazaki09) 
// console.log(verificarRoterista);

// console.log(filme01, "\n", anoDeLancamento01,"\n", duracaoEmMinutos01, "\n", RoteiroDeHayaoMiyazaki01, "\n", elenco01);
// console.log(filme02, "\n", anoDeLancamento02,"\n", duracaoEmMinutos02, "\n", RoteiroDeHayaoMiyazaki02, "\n", elenco02);
// console.log(filme03, "\n", anoDeLancamento03,"\n", duracaoEmMinutos03, "\n", RoteiroDeHayaoMiyazaki03, "\n", elenco03);
// console.log(filme04, "\n", anoDeLancamento04,"\n", duracaoEmMinutos04, "\n", RoteiroDeHayaoMiyazaki04, "\n", elenco04);
// console.log(filme05, "\n", anoDeLancamento05,"\n", duracaoEmMinutos05, "\n", RoteiroDeHayaoMiyazaki05, "\n", elenco05);
// console.log(filme06, "\n", anoDeLancamento06,"\n", duracaoEmMinutos06, "\n", RoteiroDeHayaoMiyazaki06, "\n", elenco06);
// console.log(filme07, "\n", anoDeLancamento07,"\n", duracaoEmMinutos07, "\n", RoteiroDeHayaoMiyazaki07, "\n", elenco07);
// console.log(filme08, "\n", anoDeLancamento08,"\n", duracaoEmMinutos08, "\n", RoteiroDeHayaoMiyazaki08, "\n", elenco08);
// console.log(filme09, "\n", anoDeLancamento09,"\n", duracaoEmMinutos09, "\n", RoteiroDeHayaoMiyazaki09, "\n", elenco09);

//SEMANA 03

const studioGhibliFilmografia = [];

objeto01 = {
 filme01 : "Meu amigo Totoro".toUpperCase(),
 anoDeLancamento01 : 1988,
 duracaoEmMinutos01 : 86,
 RoteiroDeHayaoMiyazaki01 : true,
 elenco01 : ["Chika Sakamoto", "Noriko Hidaka", "Hitoshi Takagi"]
}

objeto02 = { 
 filme02 : "O Serviço de Entregas da Kiki".toUpperCase(),
 anoDeLancamento02 : 1989,
 duracaoEmMinutos02 : 103,
 RoteiroDeHayaoMiyazaki02 : true,
 elenco02 : ["Minami Takayama", "Rei Sakuma", "Kappei Yamaguchi"]
}

objeto03 = {
 filme03 : "Sussurros do Coração".toUpperCase(),
 anoDeLancamento03 : 1995,
 duracaoEmMinutos03 : 111,
 RoteiroDeHayaoMiyazaki03 : true,
 elenco03 : ["Yoko Honna","Issei Takahashi", "Takashi Tachibana", "Shigeru Muroi", 
 "Shigeru Tsuyuguchi", "Keiju Kobayashi"]
}

objeto04 = {
 filme04 : "Mononoke Hime".toUpperCase(),
 anoDeLancamento04 : 1997,
 duracaoEmMinutos04 : 133,
 RoteiroDeHayaoMiyazaki04 : true,
 elenco04 : ["Yoji Matsuda", "Yuriko Ishida","Yuko Tanaka","Kaoru Kobayashi",
    "Masahiko Nishimura","Tsunehiko Kamijo","Akihiro Miwa"," Mitsuko Mori","Hisaya Morishige"]
}

objeto05 = {
 filme05 : "A Viagem de Chihiro".toUpperCase(),
 anoDeLancamento05 : 2001,
 duracaoEmMinutos05 : 125,
 RoteiroDeHayaoMiyazaki05 : true,
 elenco05 : [	"Rumi Hiiragi","Miyu Irino","Mari Natsuki","Takeshi Naito",
    "Yasuko Sawaguchi","Tsunehiko Kamijo","Takehiko Ono","Bunta Sugawara"]
}

objeto06 = { 
filme06 : "O Reino dos Gatos".toUpperCase(),
 anoDeLancamento06 : 2002,
 duracaoEmMinutos06 : 75,
 RoteiroDeHayaoMiyazaki06 : true,
 elenco06 : ["	Chizuru Ikewaki","Yoshihiko Hakamada","Aki Maeda","Takayuki Yamada",
    "Hitomi Sato",'Kenta Satoi',"Mari Hamada","Tetsu Watanabe"]
}


objeto07 = {
 filme07 : "O Castelo Animado".toUpperCase(),
 anoDeLancamento07 : 2004,
 duracaoEmMinutos07 : 119,
 RoteiroDeHayaoMiyazaki07 : true,
 elenco07 : ["Chieko Baisho", "Takuya Kimura", "Akihiro Miwa"]
}

objeto08 = {
 filme08 : "Ponyo – Uma Amizade Que Veio do Mar".toUpperCase(),
 anoDeLancamento08 : 2008,
 duracaoEmMinutos08 : 101 ,
 RoteiroDeHayaoMiyazaki08 : true,
 elenco08 : ["Tomoko Yamaguchi","Kazushige Nagashima","Yuki Amami","George Tokoro",
    "Yuria Nara", "Hiroki Doi", "Rumi Hiiragi", "Akiko Yano", "Kazuko Yoshiyuki", "Tomoko Naraoka"]
}


objeto09 = {
 filme09 : "Vidas ao Vento".toUpperCase(),
 anoDeLancamento09 : 2013,
 duracaoEmMinutos09 : 126,
 RoteiroDeHayaoMiyazaki09 : true,
 elenco09 : ["Hideaki Anno", "Miori Takimoto", "Hidetoshi Nishijima","Masahiko Nishimura", "Morio Kazama", "Keiko Takeshita",
    "Mirai Shida", "Jun Kunimura", "Shinobu Otake", "Mansai Nomura"]
}

studioGhibliFilmografia.push(objeto01, objeto02, objeto03, objeto04, objeto05, objeto06, objeto07, objeto08, objeto09)

console.log(studioGhibliFilmografia);