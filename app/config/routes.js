var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Start = require('../components/Start');
var Tools = require('../components/Tools');
var Jira = require('../components/Jira');
var Confluence = require('../components/Confluence');
var Fisheye = require('../components/Fisheye');
var Crucible = require('../components/Crucible');
var Bamboo = require('../components/Bamboo');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Start}></Route>
    <Route path='/tools' component={Tools}></Route>
    <Route path='/jira' component={Jira}></Route>
    <Route path='/confluence' component={Confluence}></Route>
    <Route path='/fisheye' component={Fisheye}></Route>
    <Route path='/crucible' component={Crucible}></Route>
    <Route path='/bamboo' component={Bamboo}></Route>
  </Router>
);

module.exports = routes;
