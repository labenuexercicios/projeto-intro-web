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
 const clan1 = 'hataki';
 const idade1 = 28;
 const isninja1 = true;
 const ninjutsu1 = ["copiar habilidades","chidori"];

 const nome2 = 'jiraiya';
 const clan2 = 'sem clan';
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

const ninja0 = `Nome: ${nome7}\nClan: ${clan7}\nIdade: ${idade7}\nÉ Ninja: ${isninja7}\nSuas Habilidades: ${ninjutsu7}`;


 console.log(ninja0);