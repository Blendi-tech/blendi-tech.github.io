function first() {
	let vehicle = document.getElementsByClassName("container-vehicle")[0];
	vehicle.style.display = "grid";

	let capsule = document.getElementsByClassName("container-capsule")[0];
	capsule.style.display = "none";

	let spaceport = document.getElementsByClassName("container-spaceport")[0];
	spaceport.style.display = "none";
}

function second() {
	let vehicle = document.getElementsByClassName("container-vehicle")[0];
	vehicle.style.display = "none";

	let capsule = document.getElementsByClassName("container-capsule")[0];
	capsule.style.display = "grid";

	let spaceport = document.getElementsByClassName("container-spaceport")[0];
	spaceport.style.display = "none";
}

function third() {
	let vehicle = document.getElementsByClassName("container-vehicle")[0];
	vehicle.style.display = "none";

	let capsule = document.getElementsByClassName("container-capsule")[0];
	capsule.style.display = "none";

	let spaceport = document.getElementsByClassName("container-spaceport")[0];
	spaceport.style.display = "grid";
}








function myFunction(x) {
	let vehicle = document.getElementsByClassName("container-vehicle")[0];
	let capsule = document.getElementsByClassName("container-capsule")[0];
	let spaceport = document.getElementsByClassName("container-spaceport")[0];


 if (x.matches) {
 	vehicle.style = "width: 90%; left: 5%; height: 80%; top: 10% !important;";
    capsule.style = "width: 90%; left: 5%; height: 80%; top: 10% !important;";
    spaceport.style = "width: 90%; left: 5%; height: 80%; top: 10% !important;";
  
  } else {
  	capsule.style = "width: 85%; height: 70%; top: 25% !important;";
    spaceport.style = "width: 85%; height: 70%; top: 25% !important;";
  } 

}

var x = window.matchMedia("(max-width: 1100px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction)



