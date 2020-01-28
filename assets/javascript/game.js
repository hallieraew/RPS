
var playerInput = ["Rock", "Paper", "Scissors"];
var wins = 0;
var loss = 0;
var tie = 0;
var player1 = "";
var player2 = "";

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

  var database = firebase.database();

  database.ref().set({
    player1: player1, 
    player2: player2
});


    for (i=0; i<playerInput.length; i++) {
        var a = $("<button>");
        a.addClass("btn");
        a.attr("data-name", playerInput[i]);
        a.text(playerInput[i]);
    }

    var textInstruction = $("#main-content").append("<p>");

    textInstruction.text("Player 1, select your choice!");
    textInstruction.addClass(".btn");


// add in click function for choice of player 1

$("#rock1").on("click", function(){
    console.log("clicked");
    player1 = "Rock";
    // log choice to the db
    // same click function would log choice to the DB
    database.ref().set({
        player1: player1
    });
})

$("#paper1").on("click", function(){
    console.log("clicked");
    player1 = "Paper";
    // log choice to the db
    // same click function would log choice to the DB
    database.ref().set({
        player1: player1
    });
})

$("#scissors1").on("click", function(){
    console.log("clicked");
    player1 = "Scissors";
    // log choice to the db
    // same click function would log choice to the DB
    database.ref().set({
        player1: player1
    });
})

$("#rock2").on("click", function(){
    console.log("clicked");
    player2 = "Rock";
    // log choice to the db
    // same click function would log choice to the DB
    database.ref().set({
        player2: player2
    });
})

$("#paper2").on("click", function(){
    console.log("clicked");
    player2 = "Paper";
    // log choice to the db
    // same click function would log choice to the DB
    database.ref().set({
        player2: player2
    });
})

$("#scissors2").on("click", function(){
    console.log("clicked");
    player2 = "Scissors";
    // log choice to the db
    // same click function would log choice to the DB
    database.ref().set({
        player2: player2
    });
})


$("#whoWonBtn").on("click", function() {
    $("#mainContent").val("");
    

})





//  click function for who won? button{

//   add in the if else stuff 
// if ((player1 === "Rock") || (player1 === "Paper") || (player1 === "Scissors")) {
    
//     if ((playerOneGuess === "r" && playerTwoGuess === "s") ||
//       (playerOneGuess === "s" && playerTwoGuess === "p") || 
//       (playerOneGuess === "p" && playerTwoGuess === "r")) {
//       wins++;
//     } else if (playerOneGuess === playerTwoGuess) {
//       ties++;
//     } else {
//       losses++;
//     }


// // display the wins losses 
//     $("#").text("Player 1 chose: " + playerOneGuess);
//     $("#").text("Player 2 chose: " + playerTwoGuess);
//     $("#").text("wins: " + wins);
//     $("#").text("losses: " + losses);
//     $("#").text("ties: " + ties);
    // reset(); havent created this function yet - it would go back to player 1 input screen so that they can keeo same game
//   }