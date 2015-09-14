var author = 'Jesse Eedrah';
var site = 'http://eedrah.com/me';
console.log('Created by ' + author +  ', visit me at ' + site);

/* Explaination of exploit */

// Initialize with a random key
var key = Math.random().toString().substring(2);

console.log(key);

var secretCompanyCDN = 'https://cdnjs.cloudflare.com/ajax/libs/jsSHA/2.0.1/sha.js';
var secretCompanyApiKey = '8601044367533177';

importExternalLibrary(secretCompanyCDN, secretCompanyApiKey);

function generateKey() {
	var input = document.querySelector('#user-input').value;
	var message;
	if (input.length === 0) {
		message = 'Please type some random characters';
	} else if (input.length < 20) {
		message = 'Keep going!';

		var shaObj = new jsSHA("SHA-512", "TEXT"); // SHA-512, with text as input
		shaObj.update(key + input.textContent);
		key = shaObj.getHash("B64"); // Compute the new key - Base 64 hash
	} else {
		message = 'Finished! Your key is: ' + key;
	}

	document.querySelector('#result').textContent = message;
}

function importExternalLibrary (site, key) {
	console.log('Downloading external library from ' + site + ' using API key ' + key);
	var script = document.createElement('script');
	script.setAttribute('type', 'text/javascript');
	script.setAttribute('src', site + "?apikey=" + key);
	var head = document.getElementsByTagName('head')[0];
	head.appendChild(script);
}