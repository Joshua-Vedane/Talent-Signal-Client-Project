import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import adminClientReducer from './adminClient.reducer';
import adminCoachReducer from './adminCoach.reducer';

import coachPaymentReducer from './coachPayment.reducer';

import payout from './payout.reducer'



// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  adminClientReducer, // contains clients and their info for the admin view
  adminCoachReducer, // contains coaches and their info for the admin view

  coachPaymentReducer, // contains coach payout info for coach dashboard view

  payout,//stores information for AdminPayouts Component


});

export default rootReducer;
