window.addEventListener("load" ,init )

function init(){


const kutyaLista = ["foxterrier", "kuvasz", "puli", "agár", "újfullandi", "keverék"];


const article = document.getElementById("kutya-article");
const button = document.createElement("button");
button.innerText = "Kutya";
article.appendChild(button);


button.addEventListener("click", function() {
 
  article.innerText = kutyaLista[2];
});

}

