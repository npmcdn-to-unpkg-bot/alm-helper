var React = require('react');

var Header = React.createClass({
  render: function() {
    return (
      <div className="jumbotron text-center">
        <h1>Tools</h1>
      </div>
    );
  }
});

var ToolsForm = React.createClass({
  render: function() {
    return (
      <div className="container">
        <form>
        <div className="checkboxes">
          <div className="form-group">
            <div className="checkbox">
            <label><input type="checkbox" defaultChecked/>Jira</label></div>
            <div className="checkbox">
            <label><input type="checkbox" defaultChecked/>Confluence</label></div>
            <div className="checkbox">
            <label><input type="checkbox" />Fisheye</label></div>
            <div className="checkbox">
            <label><input type="checkbox" />Crucible</label></div>
            <div className="checkbox">
            <label><input type="checkbox" />Bamboo</label></div>
          </div>
          </div>
          <a href="#" type="submit" id="next">
            <span className="glyphicon glyphicon-menu-left pull-left" aria-hidden="true"></span>
          </a>
          <a href="#/jira" type="submit" id="next">
            <span className="glyphicon glyphicon-menu-right pull-right" aria-hidden="true"></span>
          </a>
        </form>
      </div>
    );
  }
});

var Tools = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <ToolsForm />
      </div>
    );
  }
});

module.exports = Tools;
