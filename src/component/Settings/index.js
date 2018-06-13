import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Setting from './Setting'; 

class Settings extends React.Component {
  render() {
    const settings = [];
    for(let key in this.props) {
      console.log(key, this.props[key]);
      settings.push(<Setting name={key} value={this.props[key]}/>);
    }
    return (
      <table>
        <thead>
          <tr>
              <th>Name</th>
              <th>Value</th>
          </tr>
        </thead>

        <tbody>
          {settings}
        </tbody>
      </table>
    );
  }
};

const putStateProps = (state) => {
  return {
    durationWorkCount: state.durationWorkCount,
    durationWork: state.durationWork,
    durationSmallBreak: state.durationSmallBreak,
    durationBigBreak: state.durationBigBreak
  };
}

const putActionsToProps = (dispatch) => {
  return {
  }
}

export default connect(putStateProps, putActionsToProps)(Settings);
