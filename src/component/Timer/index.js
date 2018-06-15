import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actionStartTimer, actionPauseTimer} from '../../store/tomatoTimer.actions';

class Timer extends React.Component {
  render() {
    //const dispatch = this.props.dispatch;
    const {minutes, seconds, startTimer, pauseTimer, timerWork} = this.props;
    return (
      <div className="timer-container">
        <div className="timer-next table">
          <div
            className="table-cll"
            onClick={() => {startTimer(this.props)}}
          >
            Next
          </div>
        </div>
        <div className="timer-time table">
          <div className="table-cll">
            <span class="minutes">{minutes}</span>
            <span class="delemit">:</span>
            <span class="second">{seconds}</span>
          </div>
        </div>
        <div className="timer-start table">
          <div 
            className={timerWork ? 'timer-puse__image table-cll timer_image':  'timer-start__image table-cll timer_image'}
            onClick={this.timerTogle.bind(this)}
          >
          </div>
        </div>
      </div>
    );
  }

  timerTogle() {
    if(this.props.timerWork) {
      this.props.pauseTimer()
    } else {
      this.props.startTimer(this.props);
    }
  }
};

const putStateProps = (state) => {
  return {
    minutes: state.tomatoTimer.minutes,
    seconds: state.tomatoTimer.seconds,
    timerWork: state.tomatoTimer.timerWork,
    timerCounter: state.tomatoTimer.timerCounter,
    durationWorkCount: state.tomatoTimer.durationWorkCount,
    durationWork: state.tomatoTimer.durationWork,
    durationSmallBreak: state.tomatoTimer.durationSmallBreak,
    durationBigBreak: state.tomatoTimer.durationBigBreak
  };
}

const putActionsToProps = (dispatch) => {
  return {
    startTimer: bindActionCreators(actionStartTimer, dispatch),
    pauseTimer: bindActionCreators(actionPauseTimer, dispatch),
  }
}

export default connect(putStateProps, putActionsToProps)(Timer);
