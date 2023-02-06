function on() {
	let mobilemenu = document.getElementsByClassName("mobilemenu")[0];
	mobilemenu.style.display = "inline-block";
}

function off() {
	let mobilemenu = document.getElementsByClassName("mobilemenu")[0];
	mobilemenu.style.display = "none";
}


function mars() {
		let europa = document.getElementsByClassName("containereuropa")[0];
	europa.style.display = "none";

	let mars = document.getElementsByClassName("containermars")[0];
	mars.style.display = "grid";

		let moon = document.getElementsByClassName("containermoon")[0];
	moon.style.display = "none";

	let titan = document.getElementsByClassName("containertitan")[0];
	titan.style.display = "none";

}

function moon() {
	let europa = document.getElementsByClassName("containereuropa")[0];
	europa.style.display = "none";

	let mars = document.getElementsByClassName("containermars")[0];
	mars.style.display = "none";

		let moon = document.getElementsByClassName("containermoon")[0];
	moon.style.display = "grid";

	let titan = document.getElementsByClassName("containertitan")[0];
	titan.style.display = "none";

}

function europa() {
	let europa = document.getElementsByClassName("containereuropa")[0];
	europa.style.display = "grid";

	let mars = document.getElementsByClassName("containermars")[0];
	mars.style.display = "none";

		let moon = document.getElementsByClassName("containermoon")[0];
	moon.style.display = "none";

	let titan = document.getElementsByClassName("containertitan")[0];
	titan.style.display = "none";

}

function titan() {
	let europa = document.getElementsByClassName("containereuropa")[0];
	europa.style.display = "none";

	let mars = document.getElementsByClassName("containermars")[0];
	mars.style.display = "none";

		let moon = document.getElementsByClassName("containermoon")[0];
	moon.style.display = "none";

	let titan = document.getElementsByClassName("containertitan")[0];
	titan.style.display = "grid";

}

function mobilemars() {
	let mobilemoon = document.getElementsByClassName("containermobilemoon")[0];
	mobilemoon.style.display = "none";

	let mobilemars = document.getElementsByClassName("containermobilemars")[0];
	mobilemars.style.display = "block";

		let mobileeuropa = document.getElementsByClassName("containermobileeuropa")[0];
	mobileeuropa.style.display = "none";

		let mobiletitan = document.getElementsByClassName("containermobiletitan")[0];
	mobiletitan.style.display = "none";
}

function mobilemoon() {
	let mobilemoon = document.getElementsByClassName("containermobilemoon")[0];
	mobilemoon.style.display = "block";

	let mobilemars = document.getElementsByClassName("containermobilemars")[0];
	mobilemars.style.display = "none";

		let mobileeuropa = document.getElementsByClassName("containermobileeuropa")[0];
	mobileeuropa.style.display = "none";

		let mobiletitan = document.getElementsByClassName("containermobiletitan")[0];
	mobiletitan.style.display = "none";
}

function mobileeuropa() {
	let mobilemoon = document.getElementsByClassName("containermobilemoon")[0];
	mobilemoon.style.display = "none";

	let mobilemars = document.getElementsByClassName("containermobilemars")[0];
	mobilemars.style.display = "none";

		let mobileeuropa = document.getElementsByClassName("containermobileeuropa")[0];
	mobileeuropa.style.display = "block";

		let mobiletitan = document.getElementsByClassName("containermobiletitan")[0];
	mobiletitan.style.display = "none";
}

function mobiletitan() {
	let mobilemoon = document.getElementsByClassName("containermobilemoon")[0];
	mobilemoon.style.display = "none";

	let mobilemars = document.getElementsByClassName("containermobilemars")[0];
	mobilemars.style.display = "none";

		let mobileeuropa = document.getElementsByClassName("containermobileeuropa")[0];
	mobileeuropa.style.display = "none";

		let mobiletitan = document.getElementsByClassName("containermobiletitan")[0];
	mobiletitan.style.display = "block";
}