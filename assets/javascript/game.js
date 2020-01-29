
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
    player1: player1Select,
    player2: player2Select
});


for (i = 0; i < playerInput.length; i++) {
    var a = $("<button>");
    a.addClass("btn");
    a.attr("data-value", playerInput[i]);
    a.text(playerInput[i]);
}

var textInstruction = $("#main-content").append("<p>");

textInstruction.text("Player 1, select your choice!");
textInstruction.addClass(".btn");


// add in click function for choice of player 1

$("#cardLeft").on("click", function () {
    var player1Select = $(this).attr("data-value");

    database.ref().push({
        player1: player1Select
    })
});

$("#cardRight").on("click", function () {
    player2Select = $(this).attr("data-value");

    database.ref().push({
        player2Select: player2Value
    })
});
    // $("#rock1").on("click", function () {
    //     console.log("clicked");
    //     player1 = "Rock";
    //     // log choice to the db
    //     // same click function would log choice to the DB
    //     database.ref().set({
    //         player1: player1
    //     });
    // })

    // $("#paper1").on("click", function () {
    //     console.log("clicked");
    //     player1 = "Paper";
    //     // log choice to the db
    //     // same click function would log choice to the DB
    //     database.ref().set({
    //         player1: player1
    //     });
    // })

    // $("#scissors1").on("click", function () {
    //     console.log("clicked");
    //     player1 = "Scissors";
    //     // log choice to the db
    //     // same click function would log choice to the DB
    //     database.ref().set({
    //         player1: player1
    //     });
    // })

    // $("#rock2").on("click", function () {
    //     console.log("clicked");
    //     player2 = "Rock";
    //     // log choice to the db
    //     // same click function would log choice to the DB
    //     database.ref().set({
    //         player2: player2
    //     });
    // })

    // $("#paper2").on("click", function () {
    //     console.log("clicked");
    //     player2 = "Paper";
    //     // log choice to the db
    //     // same click function would log choice to the DB
    //     database.ref().set({
    //         player2: player2
    //     });
    // })

    // $("#scissors2").on("click", function () {
    //     console.log("clicked");
    //     player2 = "Scissors";
    //     // log choice to the db
    //     // same click function would log choice to the DB
    //     database.ref().set({
    //         player2: player2
    //     });
    // })


    $("#whoWonBtn").on("click", function () {
        $("#mainContent").val("");

        database.ref().on("child_added", function (childSnapshot) {
            console.log(childSnapshot.val());

            // Store everything into a variable.
            var player1Value = childSnapshot.val().player1Select;
            var player2Value = childSnapshot.val().player2Select;


            
            if ((player1Value === "Rock") || (player1Value === "Paper") || (player1Value === "Scissors")) {
                
                if ((player1Value === "Rock" && player2Value === "Scissors") ||
                (player1Value === "Scissors" && player2Value === "Paper") ||
                (player1Value === "Paper" && player2Value === "Rock")) {
                    wins++;
                } else if (player1Value === player2Value) {
                    ties++;
                } else {
                    losses++;
                }
                
                $("#").text("Player 1 chose: " + player1Value);
                $("#").text("Player 2 chose: " + player2Value);
                $("#").text("wins: " + wins);
                $("#").text("losses: " + losses);
                $("#").text("ties: " + ties);
                // reset(); havent created this function yet - it would go back to player 1 input screen so that they can keeo same game
                
            };
        });

});