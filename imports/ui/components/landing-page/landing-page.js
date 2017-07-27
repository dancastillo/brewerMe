import { Meteor } from 'meteor/meteor';

import './landing-page.html';

Template.LandingPage.helpers({

});

Template.LandingPage.events({
  'click .js-search-brewerydb'(event, template) {
    event.preventDefault();
    
    console.log("submit");
  }
});
