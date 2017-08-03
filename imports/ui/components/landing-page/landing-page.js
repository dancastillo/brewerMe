import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';
import { formatSearch,
         replaceSpaces } from '/imports/utils/helpers'

import './states/';
import './landing-page.html';

Template.LandingPage.onCreated(function() {
  this.stateOptions = new ReactiveVar(false);
});

Template.LandingPage.helpers({
  stateSelected() {
    return Template.instance().stateOptions.get();
  }
});

Template.LandingPage.events({
  'change #searchPreference'(event, template) {
    event.preventDefault();
    
    const selectedOption = template.find('#searchPreference').value;
    const stateSelect = (selectedOption === 'region') ? true : false;
    console.log(stateSelect);
    template.stateOptions.set(stateSelect);
  },
  
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
