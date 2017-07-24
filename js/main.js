var texte=["salut", "comment vas tu?", "tu as quel age?","tu fais quoi dans la vie?"];

var imgFemme= ["img/Femme.png","img/femme2.png","img/femme3.jpg","img/femme4.jpg",
            "img/femme5.jpg","img/femme6.png","img/femme7.jpeg","img/femme8.jpeg","img/femme9.jpg","img/femme10.png"];

var profil=document.getElementsByClassName("fille");
var pseudo="";
var robot;
var imgRobot=[];

function melange(imgFemme) {
    for (var i = imgFemme.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = imgFemme[i];
        imgFemme[i] = imgFemme[j];
        imgFemme[j] = temp;
    }
}

$("#imgAccueil").click(function () {
  $("#inscription").show();
  $("#femme").show();
  $("#imgAccueil").hide();
});

  $("#valider").click(function() {
  pseudo = $("#name").val();
  $("#choix").append("<p class='message'>"+ "<img src='img/moi.png'>" + "Bonjour " +pseudo + "</p>");
  $("#Femme").val("src=imgFemme[i]");
  $("#discussion").show().css("display", "flex");
  $("#accueil").hide();
});


melange(imgFemme);
for (var i = 0; i < profil.length; i++) {
  $(".fille")[i].src=imgFemme[i];
  profil[i].onclick=function () {
    imgRobot.push(this);
    console.log(imgRobot);
    $("#chat").append("<div class='robot'>" + "<img src='" + imgRobot[0].src +"' >" +
    "<p class='messageOrdi'>"+ "</div>");
}
}

  $("#envoyer").click(function() {

    $("#chat").append("<div class='conversationU'>" +
      "<p class='message'>" + $("#message").val()+"</p>"+ "<img src='img/moi.png'>" + "</div>");
      $("#chat").scrollTop($("#chat").height());

    setTimeout(function () {
      $("#chat").append("<img class='messageOrdi' src='img/points.gif'>");
    },600 );

    setTimeout(function () {
      $("#chat img:last").remove();
      robot= texte[Math.trunc(Math.random() * texte.length)];
      $("#chat").append("<div class='robot'>" + "<img src='" + imgRobot[0].src +"' >" +
      "<p class='messageOrdi'>"+ robot + "</p>" +"</div>");
      $("#chat").scrollTop($("#chat").height());
    },3000 );
  });
