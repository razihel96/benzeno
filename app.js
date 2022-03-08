

const numero_domanda = document.querySelector(".question_number");
const domanda = document.querySelector(".question");
const risposta = document.querySelector(".answers");

let domanda_contatore = 0;
let domanda_corrente;
let domande_disponibili = [];


function set_domanda_disponibile() {
  const domande_totali = quiz.length;
  for (let i=0; i<domande_totali; i++) {
    domande_disponibili.push(quiz[i])
  }
}

function get_nuova_domanda() {

}

window.onload = function() {
  set_domanda_disponibile();
  get_nuova_domanda();
}
