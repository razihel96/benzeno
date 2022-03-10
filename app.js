

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
var risposte_corrette = 0;
var risposte_sbagliate = 0;

let domanda_contatore = 0;
let domanda_corrente;
let domande_disponibili = [];
let risposte_disponibili = [];
let counter;
let time_value = 10;





function set_domanda_disponibile() {
  const domande_totali = quiz.length;
  for (let i=0; i<domande_totali; i++) {
    domande_disponibili.push(quiz[i]);
  }
}






function get_nuova_domanda() {
  numero_domanda.innerHTML = "Domanda " + (domanda_contatore + 1) + " di 3";
  const indice_domanda = domande_disponibili[Math.floor(Math.random() * domande_disponibili.length)];
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

  domanda_contatore ++;
  console.log(domanda_contatore)

  clearInterval(counter);
  start_timer(time_value);
  send.style.display = "none";


}




function getResult(element){
  send.style.display = "block";
  clearInterval(counter); //blocca il timer una volta aver risposto

  const id = parseInt(element.id);

  if(id === domanda_corrente.answer) {
    element.classList.add("corretto");
    score_count += 10;
    score.innerHTML = score_count;
    console.log(score_count);
    //record da aggiugere alla tabella dei risultati
    risposte_corrette += 1;
    console.log(risposte_corrette);
    }

  else {
    element.classList.add("sbagliato");
    //record da aggiugere alla tabella dei risultati
    risposte_sbagliate += 1;
    console.log(risposte_sbagliate);

    const risposte_rimaste = risposta.children.length;
    for(let i=0; i<risposte_rimaste; i++) {
        if(parseInt(risposta.children[i].id) === domanda_corrente.answer) {
          risposta.children[i].classList.add("corretto");
        }
  }

}
  unclickable_risposte();

}


//Restrizione utente: no pointer events dopo aver risposto
function unclickable_risposte() {
  const risposte_rimaste = risposta.children.length;
  for(let i=0; i<risposte_rimaste; i++) {
    risposta.children[i].classList.add("escludi");
    risposta.children[i].onclick = null;
  }
}





function invia() {
  //devono comparire al massimo due domande
  if (domanda_contatore === 3) {
      console.log("FINE");
      quiz_over();
  }
  else {
    get_nuova_domanda();
  }

}



//fine dei giochi
function quiz_over() {
  quiz_box.classList.add("hide");
  result_box.classList.remove("hide");
  risultati_quiz();
}


function risultati_quiz() {
  result_box.querySelector(".total-correct").innerHTML = risposte_corrette;
  result_box.querySelector(".total-wrong").innerHTML = risposte_sbagliate;
  result_box.querySelector(".total-score").innerHTML = score_count;
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
//se si fa scorrere il tempo, al suo termine mi viene mostrata la schermata dei risultati
    if (domanda_contatore === 4) {
      clearInterval(counter)
      quiz_over();
    }
  }
}






window.onload = function() {
  set_domanda_disponibile();
  get_nuova_domanda();
}
