fetch('https://api.chucknorris.io/jokes/random',{
"method": "GET",
	"headers": {
		"accept": "application/json",
		"X-RapidAPI-Key": "cea762cd40mshc14dd64ac515bdep1b39cajsnf36dd82639cc",
		'X-RapidAPI-Host': "matchilling-chuck-norris-jokes-v1.p.rapidapi.com"
	}  
})
console.clear();

const displayJoke = document.getElementById("display-joke");

async function fetchJoke() {
const errorMessage = `"DO NOT DISTURB!" Chuck Norris is currently entertaining guests in his hotel room.`;
  
	try {
		const results = await fetch(`https://api.chucknorris.io/jokes/random`);
  
		if (!results.ok) {
      displayJoke.textContent = errorMessage;
			throw new Error("Request failed.");
		}    
    
		const data = await results.json();
    displayJoke.textContent = data.value;
      console.log(data.value);
	} catch (error) {
    displayJoke.textContent = errorMessage;
		console.error(error);
	}
}
fetchJoke();
    