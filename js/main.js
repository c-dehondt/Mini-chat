var texte=["salut", "comment vas tu?", "tu as quel age?","tu fais quoi dans la vie?"];

var imgFemme= ["img/Femme.png","img/femme2.png","img/femme3.jpg","img/femme4.jpg",
            "img/femme5.jpg"];

var profil=document.getElementsByClassName("fille");
var pseudo="";
var robot;
var imgRobot;

// function melange(imgFemme) {
//     for (var i = imgFemme.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var temp = imgFemme[i];
//         imgFemme[i] = imgFemme[j];
//         imgFemme[j] = temp;
//     }
//     return carte;
// }

  $("#valider").click(function() {
  pseudo = $("#name").val();
  $("#chat").append("<p class='message'>" + "bonjour " +pseudo +"</p>");
  $("#Femme").val("src=imgFemme[i]");
  $("#discussion").show();
  $("#accueil").hide();
});

for (var i = 0; i < profil.length; i++) {
  $(".fille")[i].src=imgFemme[i];
  profil[i].onclick=function () {
    console.log(this);
    imgRobot=this;
    console.log(imgRobot);
}
}


  $("#envoyer").click(function() {

    $("#chat").append("<div class='conversationU'>" +
      "<p class='message'>" +pseudo + "<br>"+ $("#message").val()+"</p>"+ "<img src='img/moi.png'>" + "</div>");

    setTimeout(function () {
      $("#chat").append("<img class='messageOrdi' src='img/points.gif'>");
    },600 );

    setTimeout(function () {
      $("#chat img:last").remove();
      robot= texte[Math.trunc(Math.random() * texte.length)];
      $("#chat").append("<div class='robot'>" + imgRobot +
      "<p class='messageOrdi'>"+ "<br>" + robot + "</p>" +"</div>");
    },3000 );

  });
