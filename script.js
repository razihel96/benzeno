
//GENERATORE DI LINK CASUALI//

var random_posts_chimica = new Array()

//random_posts_chimica[0] = "index2.html"
//random_posts_chimica[1] = "index3.html"
//random_posts_chimica[2] = "index4.html"
//random_posts_chimica[3] = "index5.html"

function random_post_chimica() {
  window.location=random_posts_chimica[Math.floor(Math.random()*random_posts_chimica.length)]
}

var random_posts_biologia = new Array()

random_posts_biologia[0] = "index_blob.html"
random_posts_biologia[1] = "index_seahorse.html"
//random_posts_biologia[2] = "index4.html"
//random_posts_biologia[3] = "index5.html"

function random_post_biologia() {
  window.location=random_posts_biologia[Math.floor(Math.random()*random_posts_biologia.length)]
}

var random_posts_curiosita = new Array()

random_posts_curiosita[0] = "index_dog.html"
random_posts_curiosita[1] = "index_coral.html"
//random_posts_curiosita[2] = "index4.html"
//random_posts_curiosita[3] = "index5.html"

function random_post_curiosita() {
  window.location=random_posts_curiosita[Math.floor(Math.random()*random_posts_curiosita.length)]
}
