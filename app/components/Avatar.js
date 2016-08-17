var React = require('react')
var ReactDOM = require('react-dom')

var USER_DATA = {
  username: "shanewignall",
  name: "Shane Wignall",
  imageUrl: "https://avatars2.githubusercontent.com/u/10188338?v=3&s=400"
}

var ProfilePic = React.createClass({
  render: function() {
    return (
      <div className="container">
        <img src={this.props.imageUrl} />
      </div>
    );
  }
});

var ProfileName = React.createClass({
  render: function() {
    return (
      <div className="container">
        <h3>{this.props.name}</h3>
      </div>
    );
  }
});

var ProfileLink = React.createClass({
  render: function() {
    return (
      <div className="container">
        <a href="http://www.github.com/" + {this.props.username} />
      </div>
    );
  }
});

var StartScreen = React.createClass({
  render: function() {
    return (
      <div className="container">
        <ProfilePic imageUrl={this.props.user.imageUrl}/>
        <ProfileName name={this.props.user.name}/>
        <ProfileLink username={this.props.user.username}/>
      </div>
    );
  }
});

ReactDOM.render(<StartScreen user=USER_DATA />, document.getElementById('app'));
