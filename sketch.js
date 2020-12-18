//user logs in - new player created
//total number of players
//gamestate 
//gamestate (0) (wait) - players to see the login form where they can register their names as players

//gamestate changes from (0 or wait) to (1 or play) when the desire number of players are reached

//gamestate play (1) = game will start 


//3 main objects = form, player, gamestate 

// form - input box and a button to login. if you press the button, player's name should be registered in the database and new player should be created 

// player = player object is created when user logs in. It should contain ALL the information about the player = name, position in the game. read and write the player's information to the database


//gamestate = when gamestate is 0, it should display the form. When gamestate is 1, game will start. gamestate is 2 (end) - leaderboard (rankings)

//add all the global variables 

//getState() - read the gamestate from database
    //update(state) - update the gamestate in the db to the value inside the bracket 
    //databaseReference.on() = creates a listener which keeps on listening to the gs in the db 

var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
  var cars,car1,car2,car3,car4

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
