
//GENERATORE DI LINK CASUALI//
let random_indice_post;
let post_selezionato;
let post_non_visualizzati;
var post_precedente = null;

var button = document.querySelector(".arrow")
random_post();





function random_post() {
//non mostrare il post già visualizzato
  if (post_precedente !== null) {
    post_precedente.classList.remove('active');
  }
  //raggruppo tutti i post non ancora visualizzati quindi senza il selected
  post_non_visualizzati = document.querySelectorAll(".corpo:not(.selected)");

  console.log(post_non_visualizzati)
//se esiste un post non visualizzato, lo estraggo tra quelli non selezionati
if (post_non_visualizzati.length > 0) {
  random_indice_post = [Math.floor(Math.random()*post_non_visualizzati.length)]
  post_selezionato = post_non_visualizzati[random_indice_post];

  //mostro il post post_selezionato
  post_selezionato.classList.add('active');
  post_selezionato.classList.add('selected');
  //aggiorno il post precedente
  post_precedente = post_selezionato

} else
  //altrimenti nascondo il button
  {
    button.style.display = 'none';
  }

}
