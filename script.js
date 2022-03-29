console.log('Script Enabled');

//Extract input from the form

let selected_engine = ("google");
const GOOGLE_ICON = document.getElementById("google");
const BING_ICON = document.getElementById("bing");

const GOOGLE_URL = "https://www.google.com/search?q=";
const BING_URL = "https://www.bing.com/search?q=";

function clear() {
	const ICONS = Array.from(document.querySelectorAll(".icon"));
	
	ICONS.map(elem => {
		elem.style.border = '3px white solid';
	  })
	// for (let i = 0; i <= ICONS.length; i++) {
    //    ICONS[i].style.border = '3px white solid';
	// }
}

function engine_select(engine) {
	if (engine === 'google') {
		clear();
		GOOGLE_ICON.style.border = '3px black solid';
		selected_engine = "google";
		console.log('google');
	} else {
		clear();
		BING_ICON.style.border = '3px black solid';
		console.log('bing');
		selected_engine = "bing";
	}
}

function search(event) {
	let key_pressed = event.key;

	if (key_pressed == "Enter" && selected_engine == "google") {
		const keywords = document.querySelector("#search").value;
		window.open(GOOGLE_URL + keywords);
		console.log(keywords);
	}
	else if (key_pressed == "Enter") {
		const keywords = document.querySelector("#search").value;
		window.open(BING_URL + keywords).value;
		console.log(keywords);
	}
}

