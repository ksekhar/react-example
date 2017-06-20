var React = require('react');
var ReactDOM = require('react-dom');
class HelloWorld extends React.Component {
  render() {
    return (
      <p>Hello World!</p>
    )
  }
}
ReactDOM.render(<HelloWorld />, document.getElementById('app'));
