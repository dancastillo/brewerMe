import { Meteor } from 'meteor/meteor';
import { formatSearch,
         replaceSpaces } from '/imports/utils/helpers'
import './landing-page.html';

Template.LandingPage.helpers({

});

Template.LandingPage.events({
  'click .js-search-brewerydb'(event, template) {
    event.preventDefault();
    
    let search = template.find('#searchInput').value;
    const preference = template.find('#searchPreference').value;
		const searchFormat = formatSearch(search);
		
		const searchUrl = `locations?${preference}=${searchFormat}`;
		const url = replaceSpaces(searchUrl);
		
		console.log(url)
		Meteor.call('brewerySearch', url, (error, response) => {
			console.log(error);
			console.log(reponse);
		});
  }
});
