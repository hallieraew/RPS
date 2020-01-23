
var playerInput = ["Rock", "Paper", "Scissors"];
var wins = 0;
var loss = 0;
var tie = 0;

$("#start-button").on("click", function(){
    $("#main-content").remove();

    console.log("clicked");

    for (i=0; i<playerInput.length; i++) {
        var a = $("<button>");
        a.addClass("btn");
        a.attr("data-name", playerInput[i]);
        a.text(playerInput[i]);
    }

    // add in click function for choice of player 1
    // log choice to the db
    // when user clicks choice would then go to player2 screen - identical but replace player 1 with player 2
    // same click function would log choice to the DB
    database.ref().push({
        player1: player1,
        playerOneGuess: playerOneGuess,
      });
// next screen is who won? click function to display who won, choices and tallies and then click function to bring back to player 1 choice page to start again
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


//  click function for who won? button{

//   add in the if else stuff 
if ((playerOneGuess === "r") || (playerOneGuess === "p") || (playerOneGuess === "s")) {
    
    if ((playerOneGuess === "r" && playerTwoGuess === "s") ||
      (playerOneGuess === "s" && playerTwoGuess === "p") || 
      (playerOneGuess === "p" && playerTwoGuess === "r")) {
      wins++;
    } else if (playerOneGuess === playerTwoGuess) {
      ties++;
    } else {
      losses++;
    }

    // Hide the directions
    directionsText.textContent = "";

// display the wins losses 
    $("#").text("Player 1 chose: " + playerOneGuess);
    $("#").text("Player 2 chose: " + playerTwoGuess);
    $("#").text("wins: " + wins);
    $("#").text("losses: " + losses);
    $("#").text("ties: " + ties);
    // reset(); havent created this function yet - it would go back to player 1 input screen so that they can keeo same game
  }