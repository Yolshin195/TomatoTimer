import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { link_navbar } from '../../store/navbar.actions';

import Navbar from './Navbar';

const putStateProps = (state) => {
  return {
    items: state.navbar.items.split(','),
    textLogo: state.navbar.textLogo,
    link: state.navbar.link
  };
}

const putActionsToProps = (dispatch) => {
  return {
    onLink: bindActionCreators(link_navbar, dispatch) 
  }
}

export default connect(putStateProps, putActionsToProps)(Navbar);
