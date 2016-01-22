 import React from 'react';
 import ReactDOM from 'react-dom';
 import Hello from './component.jsx'

//var React = require('react');
//var ReactDom = require('react-dom');
//var Hello = require('./component.jsx');
//
//React.render(<Hello/>,document.getElementById('app'));

//var Hello =  <div className="foo" />;
//render( Hello, document.getElementById('app'));

//var Hello = React.createClass({
//    render: function(){
//        return <h1>Hello World</h1>;
//    }
//});
main();
 function main(){
     ReactDOM.render(<Hello/>,document.getElementById('app'));
 }
