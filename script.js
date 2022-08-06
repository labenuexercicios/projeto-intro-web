        
        const searchBox = document.querySelector(".search-box");
        const searchBtn = document.querySelector(".search-icon");
        const cancelBtn = document.querySelector(".cancel-icon");
        const searchInput = document.querySelector("input");
        const searchData = document.querySelector(".search-data");
        searchBtn.onclick = () => {
            searchBox.classList.add("active");
            searchBtn.classList.add("active");
            searchInput.classList.add("active");
            cancelBtn.classList.add("active");
            searchInput.focus();
            if (searchInput.value != "") {
                let values = searchInput.value;
                searchData.classList.remove("active");
                searchData.innerHTML = `Você acabou de digitar <span style='font-weight: 500;'>${values}</span>`;
            } else {
                searchData.textContent = "";
            }
        }
        cancelBtn.onclick = () => {
            searchBox.classList.remove("active");
            searchBtn.classList.remove("active");
            searchInput.classList.remove("active");
            cancelBtn.classList.remove("active");
            searchData.classList.toggle("active");
            searchInput.value = "";
        }
/*
     
  */


 const nome = 'naruto';
 const clan = 'uzumaki';
 const idade = 17;
 const isninja = true;
 const ninjutsu = ["clones da sombras","jutsu sexy"];

 const nome1 = 'kakashi';
 const clan1 = 'Hatake';
 const idade1 = 28;
 const isninja1 = true;
 const ninjutsu1 = ["copiar habilidades","chidori"];

 const nome2 = 'jiraiya';
 const clan2 = 'Hatake';
 const idade2 = 51;
 const isninja2 = true;
 const ninjutsu2 = ["rasengan","odama rasengan"];
 
 const nome3 = 'maito-gai';
 const clan3 = 'sem clan';
 const idade3 = 27;
 const isninja3 = true;
 const ninjutsu3 = ["não tem"];

 const nome4 = 'rock-lee';
 const clan4 = 'sem clan';
 const idade4 = 27;
 const isninja4 = true;
 const ninjutsu4 = ["não tem"];

 const nome5 = 'neji';
 const clan5 = 'hyuga';
 const idade5 = 18;
 const isninja5 = true;
 const ninjutsu5 = ["oito trigamas","Emissão de chakara"];

 const nome6 = 'shikamaru';
 const clan6 = 'nara';
 const idade6 = 26;
 const isninja6 = true;
 const ninjutsu6 = ["técnica de Imitação pela Sombra","técnica da Captura pela Sombra"];

 const nome7 = 'nagato';
 const clan7 = 'uzumaki';
 const idade7 = 32;
 const isninja7 = true;
 const ninjutsu7 = ["Jutsus absorção da alma", "Técnica da vida celestial."];

const ninj = `Nome: ${nome7}\nClan: ${clan7}\nIdade: ${idade7}\nÉ Ninja: ${isninja7}\nSuas Habilidades: ${ninjutsu7}`;


const ninja0 = {
    nome:'Naruto',
    clan:'Uzumaki',
    idade:17,
    isninja:true,
    ninjutsus:['Clones das Sombras', 'Jutsu Sexy'],
 }

 const ninja1 = {
    nome:'kakashi',
    clan:'Hatake',
    idade: 28,
    isninja: true,
    ninjutsus:['copiar habilidades', 'chidori']
 }

 const ninja2 = {
    nome:'jiraiya',
    clan:'Hatake',
    idade: 51,
    isninja: true,
    ninjutsus:["rasengan", "odama rasengan"]
 }

 const ninja3 = {
    nome:'Maito Gai',
    clan:'Sem Clan',
    idade: 28,
    isninja: true,
    ninjutsus:["não tem"]
 }

 const ninja4 = {
    nome:'Rock Lee',
    clan:'Sem Clan',
    idade: 27,
    isninja: true,
    ninjutsus:["não tem"]
 }

 const ninja5 = {
    nome:'Neji Hyuga',
    clan:'Hyuga',
    idade: 17,
    isninja: true,
    ninjutsus:["oito trigamas", "Emissão de chakara"]
 }

 const ninja6 = {
    nome:'Shikamaru',
    clan:'Nara',
    idade: 26,
    isninja: true,
    ninjutsus:["técnica de Imitação pela Sombra", "técnica da Captura pela Sombra"]
 }

 const ninja7 = {
    nome:'Nagato Pain',
    clan:'Uzumaki',
    idade: 32,
    isninja: true,
    ninjutsus:["Jutsus absorção da alma", "Técnica da vida celestial."]
 }

 const ninjasarray = [];
 ninjasarray.push(ninja0,ninja1,ninja2,ninja3,ninja4,ninja5,ninja6,ninja7)

 console.log(ninjasarray)