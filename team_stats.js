const team ={
  _players:[
    {firstName:'Ali' ,
    lastName:'Komik' ,
    age:33},
    {firstName:'Kevin' ,
    lastName:'Carmody' ,
    age:56},
    {firstName:'Rob' ,
    lastName:'Bold' ,
    age:22}
  ] ,
  _games:[
    {opponent: 'Broncos',teamPoints: 42, opponentPoints: 27},
     {opponent: 'Cocona',teamPoints: 20, opponentPoints: 7},
     {opponent: 'Didini',teamPoints: 4, opponentPoints: 32},
  ] ,
  
  get players (){return this._players;},
  get games (){return this._game;},
  addPlayer(firstName,lastName,age) {
  let player = {firstName: firstName,lastName:     lastName,age: age};
  this._players.push(player);},
  addGame(opponent,teamPoints,opponentPoints){
    let game = {opponent: opponent,teamPoints: teamPoints,opponentPoints: opponentPoints};
    this._games.push(game);}
};

team.addPlayer('Stephen','Curry',28);
team.addPlayer('Lisa','Leslie',44);
team.addPlayer('Bugs','Bunny',76);

team.addGame('Picano',2,4);
team.addGame('Cisano',20,4);
team.addGame('Pate',12,34);

console.log(team);


 
