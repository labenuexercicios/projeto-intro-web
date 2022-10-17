const palmeiras = {
    nome: "palmeiras",
    pontos: 70,
    mundial: true,
    jogadores: ["Gomez", "Gustavo Scarpa", " Raphael Veiga", " Endrick"],
    img: "./midia/pal.png",
    site: "palmeiras.com.br"
  };
  
  const flamengo = {
    nome: "Flamengo",
    pontos: 60,
    mundial: true,
    jogadores: ["Everton Ribeiro", " Arrascaeta", " Gabigol", " Bruno Henrique"],
    img: "./midia/fla.png",
    site: "https://www.flamengo.com.br/"
  };
  
  const atletico = {
    nome: "atlético",
    pontos: 58,
    mundial: false,
    jogadores: ["Hulk", " Nacho Fernandez", " Nathan"],
    img: "./midia/atl.png",
    site: "https://atletico.com.br/"
  };
  
  const arrayDeTodos = [palmeiras, flamengo, atletico ];
  
  function buscar(event) { 
    event.preventDefault();
    let input = document.getElementById("input").value.toLowerCase();
    if (input === "") {
      alert("Digite alguma coisa para que a busca aconteça!");
    } else {
      document.getElementById("times").remove();
      recriar(arrayDeTodos, input);
    }
  }
    
  const mediaIdade = (palmeiras.pontos + flamengo.pontos + atletico.pontos) / 6;
  
  console.log("Média de pontos: ", mediaIdade);

  
  const mundial = palmeiras.mundial && flamengo.mundial && atletico.mundial;
  
  console.log("Todos possuem mundial? ", mundial);
    
  const arrayMundial = [];
    
  const verificaMundial = (obj) => {
    if (obj.hokage) {
      arrayMundial.push(obj);
    } else {
      console.log(`Erro!`);
    }
  };
  
  verificaMundial(palmeiras);
  verificaMundial(flamengo);
  verificaMundial(atletico);
 
  
  for (let i in arrayMundial) {
    let str = ``;
    for (j of arrayMundial[i].jogadores) {
      str += `${j},`;
    }
    console.log(`Nome: ${arrayMundial[i].nome.toUpperCase()} \nIdade: ${arrayMundial[i].pontos}\nCampeão mundial? ${arrayMundial[i].mundial
      }\nJogadores: ${str}`
    );
  }

  const relatorio = (obj) => {
    let string = `Nome: ${obj.nome.toUpperCase()}\nIdade: ${obj.idade}\nCampeão mundial? ${obj.hokage}\nJogadores: ${obj.jogadores}`;
    console.log(string);
  };
  
  relatorio(palmeiras);
  relatorio(flamengo);
  relatorio(atletico);

  
  function criarLista(obj) {  
    let div = document.getElementById("times");
    for (let i = 0; i < obj.length; i++) {
      let sessao = document.createElement("section");
      let ul = document.createElement("ul");
      let link = document.createElement("a");
      let li1 = document.createElement("li");
      let li2 = document.createElement("li");
      let li3 = document.createElement("li");
      let imagem = document.createElement("img");
      sessao.classList.add("sessao");
      ul.classList.add("lista");
      link.setAttribute("target", "_blank");
      link.setAttribute("href", obj[i].site);
      link.innerHTML = `${obj[i].nome.toUpperCase()}`;
      imagem.setAttribute("src", obj[i].img);
      li1.innerHTML = `Time: `;
      li2.innerHTML = `PTS: ${obj[i].pontos}`;
      li3.innerHTML = `Principais Jogadores: ${obj[i].jogadores}`;
      li1.appendChild(link);
      ul.appendChild(imagem);
      ul.appendChild(li1);
      ul.appendChild(li2);
      ul.appendChild(li3);
      sessao.appendChild(ul);
      div.insertAdjacentElement("beforeend", sessao);
      sessao.insertAdjacentElement("afterbegin", imagem);
    }
  }
  criarLista(arrayDeTodos);
  
  const recriar = (obj, string) => {  
    for (i in obj) {
      for (j in obj[i]) {
        if (obj[i][j] === string) {
          let main = document.getElementById("main");
          let div = document.createElement("div");
          let sessao = document.createElement("section");
          let ul = document.createElement("ul");
          let link = document.createElement("a");
          let li1 = document.createElement("li");
          let li2 = document.createElement("li");
          let li3 = document.createElement("li");
          let imagem = document.createElement("img");
          sessao.classList.add("sessao");
          ul.classList.add("lista");
          div.setAttribute("id", "times");
          link.setAttribute("target", "_blank");
          link.setAttribute("href", obj[i].site);
          link.innerHTML = `${obj[i].nome.toUpperCase()}`;
          imagem.setAttribute("src", obj[i].img);
          li1.innerHTML = `Nome: `;
          li2.innerHTML = `Pts: ${obj[i].pontos}`;
          li3.innerHTML = `Principais jogadores: ${obj[i].jogadores}`;
          li1.appendChild(link);
          ul.appendChild(imagem);
          ul.appendChild(li1);
          ul.appendChild(li2);
          ul.appendChild(li3);
          sessao.appendChild(ul);
          div.appendChild(sessao);
          main.appendChild(div);
          sessao.insertAdjacentElement("afterbegin", imagem);
          main.insertAdjacentElement("beforeend", div);
        }
      }
    }
  };
  
