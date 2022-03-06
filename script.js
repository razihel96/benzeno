
//GENERATORE DI LINK CASUALI//

var random_posts_chimica = new Array()

random_posts_chimica[0] = "index2.html"
random_posts_chimica[1] = "index3.html"
random_posts_chimica[2] = "index4.html"
random_posts_chimica[3] = "index5.html"

function random_post_chimica() {
  window.location=random_posts_chimica[Math.floor(Math.random()*random_posts_chimica.length)]
}
