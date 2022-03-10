

const numero_domanda = document.querySelector(".question_number");
const domanda = document.querySelector(".question");
const risposta = document.querySelector(".answers");
const send = document.querySelector(".next");
const home_box = document.querySelector(".animated.bounceInUp")
const quiz_box = document.querySelector(".container")
const result_box = document.querySelector(".result-box")

var score = document.getElementById('score');
var countdown = document.getElementById('countdown');
var score_count = 0;

let domanda_contatore = 0;
let domanda_corrente;
let domande_disponibili = [];
let risposte_disponibili = [];
let counter;
let time_value = 10;





function set_domanda_disponibile() {
  const domande_totali = quiz.length;
  for (let i=0; i<=2; i++) {
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
  risposta.innerHTML = ''; //serve per "nascondere" il box di risposte precedente

  let animationDelay = 0.2;

  for(let i=0; i<array_risposte; i++) {

    const indice_risposta = risposte_disponibili[Math.floor(Math.random()*risposte_disponibili.length)]
    const index2 = risposte_disponibili.indexOf(indice_risposta);
    risposte_disponibili.splice(index2, 1);

    const opzione = document.createElement("div");
    opzione.innerHTML = domanda_corrente.option[indice_risposta];
    opzione.style.animationDelay = animationDelay + 's';
    animationDelay = animationDelay + 0.2;
    opzione.id = indice_risposta;
    opzione.className = "row";
    risposta.appendChild(opzione);

    opzione.setAttribute("onclick", "getResult(this)");

  }

  //devono comparire al massimo due domande
  if(domanda_contatore === 2) {
    quiz_over();
  }


  console.log(domanda_contatore)
  domanda_contatore ++;

  clearInterval(counter);
  start_timer(time_value);
  send.style.display = "none";


}

function quiz_over() {
  quiz_box.classList.add("hide");
  result_box.classList.remove("hide");
}





function getResult(element){
  send.style.display = "block";
  clearInterval(counter); //blocca il timer una volta aver risposto

  const id = parseInt(element.id);

  if(id === domanda_corrente.answer) {
    element.classList.add("corretto");
    score_count += 10;
    score.innerHTML = score_count;
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
    risposta.children[i].onclick = null;
  }
}





function invia() {

  if (domanda_contatore === quiz.length) {
      console.log("FINE");
      quiz_over();
  }
  else {
    get_nuova_domanda();
  }

}




function start_timer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    countdown.innerHTML = time;
    time--;
    if (time < 0) {
      clearInterval(counter);
      countdown.innerHTML = 0;
      get_nuova_domanda();
    }
    if (domanda_contatore === 3) {
      time = 0;
    }
  }
}






window.onload = function() {
  set_domanda_disponibile();
  get_nuova_domanda();
}
