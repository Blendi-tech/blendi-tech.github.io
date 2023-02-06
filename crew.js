
let myIndex = 0;
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName("sl");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "grid";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}



  
// function myFunction(x) {

//                 if (x.matches) { 
//                 // If media query matches
//                       let myIndex = 0;
//                       carousel();

//                       function carousel() {
//                         let i;
//                         let x = document.getElementsByClassName("sl");
//                         for (i = 0; i < x.length; i++) {
//                           x[i].style.display = "none";  
//                         }
//                         myIndex++;
//                         if (myIndex > x.length) {myIndex = 1}    
//                         x[myIndex-1].style.display = "block";  
//                         setTimeout(carousel, 2000); // Change image every 2 seconds
//                       }

//                 } else {

//                         let myIndex = 0;
//                         carousel();

//                         function carousel() {
//                           let i;
//                           let x = document.getElementsByClassName("sl");
//                           for (i = 0; i < x.length; i++) {
//                             x[i].style.display = "none";  
//                           }
//                           myIndex++;
//                           if (myIndex > x.length) {myIndex = 1}    
//                           x[myIndex-1].style.display = "grid";  
//                           setTimeout(carousel, 2000); // Change image every 2 seconds
//                         }
                 
//                 }
//               }

// var x = window.matchMedia("(max-width: 700px)")
// myFunction(x) // Call listener function at run time
// x.addListener(myFunction)




// function c() {
// 	let commander = document.getElementById("crewcontainer-commander");
// 	commander.style.display = "grid";

// 	let pilot = document.getElementById("crewcontainer-pilot");
// 	pilot.style.display = "none";

// 	let specialist = document.getElementById("crewcontainer-specialist");
// 	specialist.style.display = "none";

// 	let engineer = document.getElementById("crewcontainer-engineer");
// 	engineer.style.display = "none"

// };

// function p() {
// 	let commander = document.getElementById("crewcontainer-commander");
// 	commander.style.display = "none";

// 	let pilot = document.getElementById("crewcontainer-pilot");
// 	pilot.style.display = "grid";

// 	let specialist = document.getElementById("crewcontainer-specialist");
// 	specialist.style.display = "none";

// 	let engineer = document.getElementById("crewcontainer-engineer");
// 	engineer.style.display = "none"
// };

// function s() {
// 	let commander = document.getElementById("crewcontainer-commander");
// 	commander.style.display = "none";

// 	let pilot = document.getElementById("crewcontainer-pilot");
// 	pilot.style.display = "none";

// 	let specialist = document.getElementById("crewcontainer-specialist");
// 	specialist.style.display = "grid";

// 	let engineer = document.getElementById("crewcontainer-engineer");
// 	engineer.style.display = "none"
// };

// function e() {
// 	let commander = document.getElementById("crewcontainer-commander");
// 	commander.style.display = "none";

// 	let pilot = document.getElementById("crewcontainer-pilot");
// 	pilot.style.display = "none";

// 	let specialist = document.getElementById("crewcontainer-specialist");
// 	specialist.style.display = "none";

// 	let engineer = document.getElementById("crewcontainer-engineer");
// 	engineer.style.display = "grid"
// };