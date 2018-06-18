import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Timer from './Timer';
import Navbar from './Navbar';
import Router from './Router';

class MainComponent extends React.Component {
  render() {
    return (
      <div>
        <Router/>
      </div>
    );
  }
};


export default MainComponent;
