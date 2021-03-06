import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import adminClients from './adminClient.reducer';
import adminCoaches from './adminCoach.reducer';
import payout from './payout.reducer';
import clientDetails from './clientDetails.reducer';
import coachPayments from './coachPayment.reducer';
import coachPaymentDetails from './coachPaymentDetails.reducer';
import coachDetails from './coachDetails.reducer';
import payoutsHistory from './payoutsHistory.reducer'
import coachClients from './coachClient.reducer'
import adminChart from './adminChart.reducer'
import adminDonut from './adminDonut.reducer'
import coachDonut from './coachDonut.reducer'
import coachChart from './coachChart.reducer'


// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  adminClients, // contains clients and their info for the admin view
  adminCoaches, // contains coaches and their info for the admin view
  coachPayments, // contains coach payout info for coach dashboard view
  coachPaymentDetails, // contains coach payment details for a specific month/confirmation number
  coachClients, // contains coaches' client info
  payout,//stores information for AdminPayouts Component
  clientDetails, // stores a selected client's information for the admin client details view
  payoutsHistory, //stores details for all completed payouts for ADMIN view
  coachDetails, // stores a selected coach's information for the admin coach details view
  adminChart,
  adminDonut,
  coachDonut, //holds data for coach dashboard, donut chart
  coachChart, //holds data for coach dashboard, bar chart


});

export default rootReducer;
