import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';
import { formatSearch,
         replaceSpaces,
         cityStateFormat } from '/imports/utils/helpers'
import { Template } from 'meteor/templating';

import './stateselect/';
import './landing-page.html';

Template.LandingPage.onCreated(function() {
  this.stateOptions = new ReactiveVar(false);
  this.zipOptions = new ReactiveVar(false);
  this.displayResults = new ReactiveVar(false);
  
  const instance = Template.instance();
  instance.data.response = {};
});

Template.LandingPage.helpers({
  stateSelected() {
    return Template.instance().stateOptions.get();
  },

  zipSelected() {
    return Template.instance().zipOptions.get();
  },
  
  showResults() {
    return Template.instance().displayResults.get();
  },
  
  brewery() {
    return Template.instance().data.response.data;
  }
});

Template.LandingPage.events({
  'change #searchPreference'(event, template) {
    event.preventDefault();
    
    const selectedOption = template.find('#searchPreference').value;
    const stateSelect = (selectedOption === 'region') ? true : false;
    const zipSelect = (selectedOption === 'postalCode') ? true : false;
    
    template.stateOptions.set(stateSelect);
    template.zipOptions.set(zipSelect);
  },
  
  'click .js-search-brewerydb'(event, template) {
    event.preventDefault();

    // Reset displaying results
    template.displayResults.set(false);

    const state = template.stateOptions.get();
    const zip = template.zipOptions.get();
    const search = (zip) ? template.find('#searchInput').value : 
      (state) ? template.find('#state').value : 
      cityStateFormat(template.find('#searchInput').value, template.find('#state').value) ;
    // const search = (state) ? template.find('#state').value : template.find('#searchInput').value ;
    
    const preference = template.find('#searchPreference').value;
    let searchFormat = "";
    if(preference != "locality") {
      searchFormat = formatSearch(search);
    } else {
      searchFormat = search;
    }

    const searchUrl = `locations?${preference}=${searchFormat}`;
    const url = replaceSpaces(searchUrl);

    Meteor.call('brewerySearch', url, (error, response) => {
      if (error) {
        throw new Meteor.Error();
      }
      
      // store response from brewerydb
      template.data.response = JSON.parse(response);
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
