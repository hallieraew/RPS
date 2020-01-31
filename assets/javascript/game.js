
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

$(".card-body-left").find("button").on("click", function () {
    console.log("clicked")
    player1 = $(this).text();

    database.ref("player1/choice").set(player1)
});

$("#cardRight").find("button").on("click", function () {
    player2 = $(this).text();

    database.ref("player2").set({
        choice: player2
    })
});

database.ref("player1/choice").on("value", function(snapshot) {
    console.log(snapshot.val());
    player1 = snapshot.val();

    if (player2) {
        console.log("Player 2 Selected")
    } else {
        console.log("waiting on player 2");
    }
})

database.ref("player2/choice").on("value", function(snapshot) {
    console.log(snapshot.val());
    player2 = snapshot.val();

    if (player1) {
        console.log("Player 1 Selected")
    } else {
        console.log("waiting on player 1");
    }
})


    $("#whoWonBtn").on("click", function () {
        $("#mainContent").val("");

        database.ref().on("value", function (snapshot) {

            // Store everything into a variable.
            player1 = snapshot.val();
            player2 = snapshot.val();


            
            if ((player1 === "Rock") || (player1 === "Paper") || (player1 === "Scissors")) {
                
                if ((player1 === "Rock" && player2 === "Scissors") ||
                (player1 === "Scissors" && player2 === "Paper") ||
                (player1 === "Paper" && player2 === "Rock")) {
                    wins++;
                } else if (player1 === player2) {
                    ties++;
                } else {
                    losses++;
                }
                
                $("#").text("Player 1 chose: " + player1);
                $("#").text("Player 2 chose: " + player2);
                $("#").text("wins: " + wins);
                $("#").text("losses: " + losses);
                $("#").text("ties: " + ties);
                // reset(); havent created this function yet - this would reset values in the db so that players can go again - need to maybe have a different view or button for reset AFTER we determine won is the winner
                
            };
        });

});