import { Meteor } from 'meteor/meteor';

import './landing-page.html';

Template.LandingPage.helpers({

});

Template.LandingPage.events({
  'click .js-search-brewerydb'(event, template) {
    event.preventDefault();
    
    const search = template.find('#searchInput').value;
    const preference = template.find('#searchPreference').value;
		
		const searchUrl = `locations?${preference}=${search}`

		Meteor.call('brewerySearch', (error, response) => {
			console.log(error);
			console.log(reponse);
		});
  }
});
