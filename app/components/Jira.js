var React = require('react');

var Header = React.createClass({
  render: function() {
    return (
      <div className="jumbotron text-center">
        <h1>Jira</h1>
      </div>
    );
  }
});

var JiraForm = React.createClass({
  render: function() {
    return (
      <div className="container">
        <form>
        <div className="form-group dropdown">
          <label>Project type:</label>
          <select className="form-control">
            <option default>Standard</option>
            <option>TDE</option>
            <option>PPM</option>
          </select>
        </div>
          <a href="#/Tools" type="submit" id="next">
            <span className="glyphicon glyphicon-menu-left pull-left" aria-hidden="true"></span>
          </a>
          <a href="#" type="submit" id="next">
            <span className="glyphicon glyphicon-menu-right pull-right" aria-hidden="true"></span>
          </a>
        </form>
      </div>
    );
  }
});

var Jira = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <JiraForm />
      </div>
    );
  }
});

module.exports = Jira;
