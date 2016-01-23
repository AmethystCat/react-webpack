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
//main();
 //function main(){
 //    ReactDOM.render(<Hello/>,document.getElementById('app'));
 //}

 // react-hot-loader practise
 var RootComponent = ReactDOM.render(<Hello/>,document.getElementById('app'));

 if (module.hot) {
     require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
        getRootInstances: function () {
            // help react hot loader figure out the root component instances on the page
            return [RootComponent];
        }
     });
 }
