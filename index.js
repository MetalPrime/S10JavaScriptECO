const btnCandidate = document.querySelector('.vote__btnCandidate');
const btnVotation = document.querySelector('.vote__btnVotation');

const inputIdCand = document.querySelector('.vote__inputIdCand');
const inputNameCand = document.querySelector('.vote__inputNameCand');
const btnRegister = document.querySelector('.vote__btnRegister');

const inputIDvote = document.querySelector('.vote__inputIDvote');
const btnVote = document.querySelector('.vote__btnVote');


var firebaseConfig = {
  apiKey: "AIzaSyAJAb5xt0drUeCa2dBKMhHf3z8QMaHI2y4",
  authDomain: "s10project.firebaseapp.com",
  databaseURL: "https://s10project.firebaseio.com",
  projectId: "s10project",
  storageBucket: "s10project.appspot.com",
  messagingSenderId: "830069995055",
  appId: "1:830069995055:web:e554157ae77f0ee3dbf8da",
  measurementId: "G-B557F9P5NT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Get a reference to the database service
var database = firebase.database();



//Registrar a los candidatos
btnRegister.addEventListener("click", function () {

  objNewCandidate = {
    ID: inputIdCand.value,
    name: inputNameCand.value,
  }

  database.ref('candidates/' + objNewCandidate.ID).set(objNewCandidate);
  console.log(objNewCandidate);

});


//Votar por los candidatos
btnVote.addEventListener("click", function () {

  objVote = {
    IDVote: inputIDvote.value,
  }

  database.ref('votes/').push().set(objVote);

});




//Candidatos visibles
btnCandidate.addEventListener("click", function () {
  var listCandidate = [];

  database.ref('candidates').on('value',
    function (elem) {

      elem.forEach(
        function (i) {
          listCandidate.push(i.val().name + '\n');
        }
      );
    }

  );

  alert(listCandidate);
});

//Puntajes en porcentajes visibles
btnVotation.addEventListener("click", function () {
  var candidateID = [];
  var votesID = [];
  var listCurrentVotes = [];
  var totalVotes;
  var numberVotes;
  var porcentaje;

  database.ref('candidates').on('value', candidates => {
    candidates.forEach(
      candidate =>{
        candidateID.push(candidate.val());
      }
    )
   
  });

  database.ref('votes').on('value', votes => {
    votes.forEach(
      vote =>{
        votesID.push(vote.val());

      }
    );

    totalVotes =  votesID.length;
    
    candidateID.forEach(candidate=>{
      numberVotes = 0;
      console.log(candidate.ID);
      console.log(candidateID);
      votesID.forEach(vote=>{
        if(candidate.ID == vote.IDVote){
          numberVotes ++;
        }
      });

      if(numberVotes!=0){
        porcentaje = (numberVotes/totalVotes)*100;
      }

      listCurrentVotes.push(candidate.name +" "+porcentaje+"%"+"\n");
    });

    alert(listCurrentVotes);
  });
 

   
    

  
});




/*

database.ref('votes').set( {
  pepito: 0,
  juanito: 2
})
*/
