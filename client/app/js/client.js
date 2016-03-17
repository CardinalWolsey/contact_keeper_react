const React = require('react');
const ReactDOM = require('react-dom');

//
// //component class
// var Test = React.createClass({
//   render: function() {
//     return (
//       <h2>Hello World!</h2>
//     );
//   }
// });
//
// //Render Functions
// function renderTest() {
//   ReactDOM.render(React.createElement(Test, null), document.getElementById('myDiv'));
// }
//
// //render the applicaiton
// renderTest();

var TweetBox = React.createClass({
  getInitialState: function() {
    return {
      text: "",
      photoAdded: false
    };
  },
  handleChange: function(event) {
    this.setState({ text: event.target.value });
  },
  togglePhoto: function(event) {
    this.setState({ photoAdded: !this.state.photoAdded});
  },
  remainingCharacters: function() {
    if (this.state.photoAdded) {
      return 140 - 23 - this.state.text.length;
    } else {
      return 140 - this.state.text.length;
    }
  },
  overflowAlert: function() {
    if (this.remainingCharacters() < 0) {
      if (this.state.photoAdded) {
        var beforeOverflowText = this.state.text.substring(140 - 23 - 10, 140 - 23);
        var overflowText = this.state.text.substring(140 - 23);
      } else {
        var beforeOverflowText = this.state.text.substring(140 - 10, 140);
        var overflowText = this.state.text.substring(140);
      }

  return (
    <div className="alert alert-warning">
      <strong>Oops! Too Long:</strong>
      &nbsp;...{beforeOverflowText}
      <strong className="bg-danger">{overflowText}</strong>
    </div>
  );
    } else {
      return "";
    }
  },
  render: function() {
    return (
      <div className="well clearfix">
        {this.overflowAlert()}
        <textarea className="form-control"
                  onChange={this.handleChange}>
        </textarea>
        <br/>
        <button className="btn btn-primary pull-right"
                disabled={this.state.text.length === 0 && !this.state.photoAdded}>Tweet</button>
        <button className="btn btn-default pull-right"
        onClick={this.togglePhoto}>
        {this.state.photoAdded ? "Photo Added" : "Add Photo"}</button>
        <br/>
        <span>{ this.remainingCharacters() }</span>
      </div>
    );
  }
});

ReactDOM.render(
  <TweetBox />,
  document.getElementById("container")
);
