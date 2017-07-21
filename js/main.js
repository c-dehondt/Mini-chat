var texte=["salut", "comment vas tu?", "tu as quel age?","tu fais quoi dans la vie?"];
var pseudo="";
var robot;


  $("#valider").click(function() {
  pseudo = $("#name").val();
  $("#chat").append("<p class='message'>" + "bonjour " +pseudo +"</p>");
  $("#discussion").show();
});


  $("#envoyer").click(function() {
    $("#chat").append("<div class='conversationU'>" +
      "<p class='message'>" +pseudo + "<br>"+ $("#message").val()+"</p>"+ "<img src='img/moi.png'>" + "</div>");

    setTimeout(function () {
      $("#chat").append("<img class='messageOrdi' src='img/points.gif'>");
    },600 );

    setTimeout(function () {
      $("#chat img:last").remove();
      robot= texte[Math.trunc(Math.random() * texte.length)];
      $("#chat").append("<div class='robot'>" + "<img src='img/Femme.png'>" +
      "<p class='messageOrdi'>"+ "robot dit: " + "<br>" + robot + "</p>" +"</div>");
    },3000 );

  });
