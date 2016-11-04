require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ReactDOM from 'react-dom';

import ChatComponent from './ChatComponent'


class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <div className="left"> 
        <ChatComponent author={"Krzyś"}/>
        </div>
        <div className="right"> 
        <ChatComponent author={"Ala"}/>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
