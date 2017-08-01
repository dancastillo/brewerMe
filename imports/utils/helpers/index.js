import { Meteor } from 'meteor/meteor';

export const formatSearch = function formatSearch(search) {
	// Trim string and set to lower case;
	let newSearch = search.trim().toLowerCase();
	
	// Remove extra spaces
	newSearch = newSearch.replace(/  +/g, ' ');
	
	return newSearch;
}

export const replaceSpaces = function replaceSpaces(url) {
	return url.split(' ').join('+');
}
