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

function osszeallit(){
    //összeállítjuk azt a szöveget tartalmat, ami a HTML kódot jelenti 
let i=0;
for (let index = 0; index < kutyaLista.length; index++) {
    txt+=` 
<div>
    <p>
    ${kutyaLista[index]}
    </p>
    
</div>`
    
}
console.log(txt);
return txt
}
