

const numero_domanda = document.querySelector(".question_number");
const domanda = document.querySelector(".question");
const risposta = document.querySelector(".answers");

let domanda_contatore = 0;
let domanda_corrente;
let domande_disponibili = [];
let risposte_disponibili = [];


function set_domanda_disponibile() {
  const domande_totali = quiz.length;
  for (let i=0; i<domande_totali; i++) {
    domande_disponibili.push(quiz[i])
  }
}

function get_nuova_domanda() {
  numero_domanda.innerHTML = "Domanda " + (domanda_contatore + 1) + " di " + quiz.length;
  const indice_domanda = domande_disponibili[Math.floor(Math.random() * domande_disponibili.length)]
  domanda_corrente = indice_domanda;
  domanda.innerHTML = domanda_corrente.q;

  const index1 = domande_disponibili.indexOf(indice_domanda);
  domande_disponibili.splice(index1, 1);

  const array_risposte = domanda_corrente.option.length;
  for(let i=0; i<array_risposte; i++) {
    risposte_disponibili.push(i);
}
  let animationDelay = 0.2;

  for(let i=0; i<array_risposte; i++) {

    const indice_risposta = risposte_disponibili[Math.floor(Math.random()*risposte_disponibili.length)]
    const index2 = risposte_disponibili.indexOf(indice_risposta);
    risposte_disponibili.splice(index2, 1);
    console.log(indice_risposta)
    console.log(risposte_disponibili)

    const opzione = document.createElement("div");
    opzione.innerHTML = domanda_corrente.option[indice_risposta];
    opzione.style.animationDelay = animationDelay + 's';
    animationDelay = animationDelay + 0.2;
    opzione.id = indice_risposta;
    opzione.className = "row";
    risposta.appendChild(opzione);

    opzione.setAttribute("onclick", "getResult(this)");
  }



  domanda_contatore ++;

}

function getResult(element){
  const id = parseInt(element.id);

  if(id === domanda_corrente.answer) {
    element.classList.add("corretto");
    }
  else {
    element.classList.add("sbagliato");

    const risposte_rimaste = risposta.children.length;
    for(let i=0; i<risposte_rimaste; i++) {
        if(parseInt(risposta.children[i].id) === domanda_corrente.answer) {
          risposta.children[i].classList.add("corretto");
        }

  }
}


  unclickable_risposte();


}
function unclickable_risposte() {
  const risposte_rimaste = risposta.children.length;
  for(let i=0; i<risposte_rimaste; i++) {
    risposta.children[i].classList.add("escludi");
  }
}



function invia() {
  if (domanda_contatore === quiz.length) {
      console.log("FINE");
  }
  else {
    get_nuova_domanda();
  }
}

window.onload = function() {
  set_domanda_disponibile();
  get_nuova_domanda();
}
