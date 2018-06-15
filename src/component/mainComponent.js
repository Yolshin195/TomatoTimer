import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Timer from './Timer';
import Settings from './Settings';
import Navbar from './Navbar';
import Todo from './Todo';

class MainComponent extends React.Component {
  render() {
    const { showSetting } = this.props;
    const display1ClassName = (showSetting) ? 'col s12 l8' : 'col s12';
    const display1 = <div className={display1ClassName}><Timer/></div>;
    const display = [display1];

    if(showSetting) {
      display.push(<div className="col s12 l4"><Settings/></div>);
    }

    return (
      <div>
        <Navbar/>
        <div className="row">
          {display} 
        </div>
        <Todo/>
      </div>
    );
  }
};

const putStateProps = (state) => {
  return {
    showSetting: state.tomatoTimer.showSetting
  };
}

export default connect(putStateProps)(MainComponent);
