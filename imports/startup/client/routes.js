import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// import components
import '../../ui/components/main/main.js';
import '../../ui/components/landing-page/landing-page.js';


// configure public routes
FlowRouter.route('/', {
  name: 'LandingPage',
  action() {
    BlazeLayout.render('Main', { main: 'LandingPage' });
  }
});
