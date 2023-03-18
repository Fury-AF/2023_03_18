window.addEventListener("load", init);

const kutyaLista = [
    "foxterrier",
    "kuvasz",
    "puli",
    "agár",
    "újfullandi",
    "keverék",
  ];


function init() {

  /*const article = document.getElementById("kutya-article");
const button = document.createElement("button");
button.innerText = "Kutya";
article.appendChild(button);


button.addEventListener("click", function() {
 
  article.innerText = kutyaLista[2];
});*/

  const ARTICLE = document.querySelectorAll("kutya-article");

  let txt = osszeallit();

  // itt helyezzük bele az article elembe
  ARTICLE[0].innerHTML = txt;
}

function osszeallit() {
  //összeállítjuk azt a szöveget tartalmat, ami a HTML kódot jelenti
  let txt = "";
  for (let index = 0; index < kutyaLista.length; index++) {
    txt += ` 
<div>
    <p>
    ${kutyaLista[index]}
    </p>
    
</div>`;
  }
  console.log(txt);
  return txt;
}
