var React = require('react');

var Header = React.createClass({
  render: function() {
    return (
      <div className="jumbotron text-center">
        <h1>ALM Helper</h1>
      </div>
    );
  }
});

var ProjectInfo = React.createClass({
  render: function() {
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Project name" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Project key" />
          </div>
          <a href="#/Tools" type="submit" id="next">
            <span className="glyphicon glyphicon-menu-right pull-right" aria-hidden="true"></span>
          </a>
        </form>
      </div>
    );
  }
});

var StartScreen = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <ProjectInfo />
      </div>
    );
  }
});

module.exports = StartScreen;
