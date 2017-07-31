import { Meteor } from 'meteor/meteor';

const brewerydb = Meteor.settings.public.brewerydb.url;
const api = Meteor.settings.private.brewerydb;

// Testing
const barNewHaven = "locations?postalCode=06511&key=9519c7293d178720517f726335e7ba34&format=json";

Meteor.methods({
	brewerySearch: function() {
		HTTP.call( 'GET' , brewerydb+barNewHaven, {}, (error, response) => {
			console.log(error);
			console.log(response);
		});
	}
});
