// import React from 'react';

// export default class Hello extends React.Component {
//     render() {
//         return <h1>Hello worlds</h1>;
//     }
// }

//import React from 'react';
//
//export default class Hello extends React.Component {
//  render() {
//    return <h1>Hello world</h1>;
//  }
//}

var React = require('react');

var Hello = React.createClass({
  render: function () {
    return <h1>Hello world!</h1>;
  }
});

module.exports = Hello;