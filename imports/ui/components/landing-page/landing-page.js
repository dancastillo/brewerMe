import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';
import { formatSearch,
         replaceSpaces } from '/imports/utils/helpers'
import { Template } from 'meteor/templating';

import './stateselect/';
import './landing-page.html';

Template.LandingPage.onCreated(function() {
  this.stateOptions = new ReactiveVar(false);
  this.displayResults = new ReactiveVar(false);
  
  const instance = Template.instance();
  console.log(instance)
  instance.data.response = {};
});

Template.LandingPage.helpers({
  stateSelected() {
    return Template.instance().stateOptions.get();
  },
  
  showResults() {
    return Template.instance().displayResults.get();
  },
  
  brewery() {
    console.log(Template.instance().data.response.data)
    return Template.instance().data.response.data;
  }
});

Template.LandingPage.events({
  'change #searchPreference'(event, template) {
    event.preventDefault();
    
    const selectedOption = template.find('#searchPreference').value;
    const stateSelect = (selectedOption === 'region') ? true : false;
    
    template.stateOptions.set(stateSelect);
  },
  
  'click .js-search-brewerydb'(event, template) {
    event.preventDefault();
    
    let search = template.find('#searchInput').value;
    const preference = template.find('#searchPreference').value;
    const searchFormat = formatSearch(search);

    const searchUrl = `locations?${preference}=${searchFormat}`;
    const url = replaceSpaces(searchUrl);

    Meteor.call('brewerySearch', url, (error, response) => {
      if (error) {
        console.log(error);
        throw new Meteor.Error();
      }
      
      // store response from brewerydb
      template.data.response = JSON.parse(response);
      console.log(template.data.response)
      template.displayResults.set(true);
    });
  },
  
  'focusout #searchInput'(event, template) {
    event.preventDefault();
    const search = template.find('#searchInput').value;
    
    if(search.trim() !== "") {
      
      // When no input is added disable button and add has-danger class to input
      $(event.target.parentElement).removeClass('has-danger');
      $('.js-search-brewerydb').removeClass('disabled');
      
    } else {
      
      // When input is added remove disable class and remove has-danger class
      $(event.target.parentElement).addClass('has-danger');
      $('.js-search-brewerydb').addClass('disabled');
      
    }
  },
  
  'change #state'(event, template) {
    const state = template.find('#state').value;
    
    if(state !== "") {
      $('.js-search-brewerydb').removeClass('disabled');
    } else {
      $('.js-search-brewerydb').addClass('disabled');
    }
  }
});
