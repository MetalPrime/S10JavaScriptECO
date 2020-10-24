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
btnRegister.addEventListener("click",function(){
    
});


//Votar por los candidatos
btnVotation.addEventListener("click",function(){
    
});




//Candidatos visibles
btnCandidate.addEventListener("click",function(){
    alert("estoy vivo");
});

//Puntajes en porcentajes visibles
btnVotation.addEventListener("click",function(){
    
});




database.ref('votes').transaction( candidates => {
  candidate && (candidates['pepito'] += 1);
  return candidates;
})

database.ref('votes').set( {
  pepito: 0,
  juanito: 2
})
