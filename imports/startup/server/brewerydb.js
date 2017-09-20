import { Meteor } from 'meteor/meteor';

const brewerydb = Meteor.settings.public.brewerydb.url;
const api = Meteor.settings.private.brewerydb;

const future = require('fibers/future');

Meteor.methods({
	brewerySearch: function(location) {
		const url = `${brewerydb}${location}${api}`;
    const fut = new future();
		HTTP.call( 'GET', url, {}, (error, response) => {
      if(error) {
        fut.return(error);
      } else {
        if (response.statusCode === 200) {
            fut.return(response.content);
        } else {
          console.log('Status code = ' + response.statusCode)
        }
        
      }
		});
    
    const result = fut.wait();
    return result;
	}
});
