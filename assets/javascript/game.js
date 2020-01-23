var playerInput = ["r", "p", "s"];
var wins = 0;
var loss = 0;
var tie = 0;

$("start-button").on("click", function(){
    $("main-content").remove();

    console.log("clicked");
    
    for (i=0; i<playerInput.length; i++) {
        var a = $("<button>");
        a.addClass("btn");
        a.attr("data-name", playerInput[i]);
        a.text(playerInput[i]);
    }

})



var firebaseConfig = {
    apiKey: "AIzaSyBKRA-loH0z9xQIrVIIK41PH2gRiNQrPhg",
    authDomain: "rockpaperscissors-31fb0.firebaseapp.com",
    databaseURL: "https://rockpaperscissors-31fb0.firebaseio.com",
    projectId: "rockpaperscissors-31fb0",
    storageBucket: "rockpaperscissors-31fb0.appspot.com",
    messagingSenderId: "495768658180",
    appId: "1:495768658180:web:1c61029e73cc47d4763051",
    measurementId: "G-NJWCEK0ESS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);