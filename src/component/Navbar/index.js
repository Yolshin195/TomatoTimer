import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actionShowSettings } from '../../store/actionSettings';

import Navbar from './Navbar';

class NavbatContainer extends React.Component {
  render() {
    return (
      <Navbar
        textLogo={this.props.textLogo}
        items={this.props.items} 
        onClick={this.eventOnClick.bind(this)}
      /> 
    )
  }
  
  eventOnClick(text) {
    if(text === 'Settings') {
      if(this.props.showSetting) {
        this.props[text](false);
      } else {
        this.props[text](true);
      }
    }
  }
}

const putStateProps = (state) => {
  return {
    items: state.navbarItems.split(','),
    textLogo: state.navbarTextLogo,
    showSetting: state.showSetting

  };
}

const putActionsToProps = (dispatch) => {
  return {
    'Settings': bindActionCreators(actionShowSettings,dispatch)
  }
}

export default connect(putStateProps, putActionsToProps)(NavbatContainer);
