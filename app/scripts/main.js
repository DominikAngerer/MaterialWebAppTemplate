if (typeof console !== 'undefined' && typeof console.log !== 'undefined') {
	console.log('Crafted with ♡ by Dominik Angerer - www.adtime.at');
} else {
	console = {};
	console.log = console.error = function() {};
}
