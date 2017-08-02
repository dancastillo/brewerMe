import { Meteor } from 'meteor/meteor';

const brewerydb = Meteor.settings.public.brewerydb.url;
const api = Meteor.settings.private.brewerydb;


Meteor.methods({
	brewerySearch: function(location) {
		const url = `${brewerydb}${location}${api}`;
		HTTP.call( 'GET', url, {}, (error, response) => {
			console.log(error);
			console.log(response);
		});
	}
});
