  //timerCounter: 0,
  //durationWorkCount: 4,
  //durationWork: 1800,
  //durationSmallBreak: 300,
  //durationBigBreak: 1500
function getDurationTaimer(timerCounter, durationWorkCount,durationWork,durationSmallBreak,durationBigBreak) {
  if(timerCounter === durationWorkCount*2) {
    return durationBigBreak;
  }

  if(!(timerCounter % 2)) {
    return durationSmallBreak;
  }

  return durationWork;
}

export default function startTimer(stopMesage, timer, timerCounter, durationWorkCount,durationWork,durationSmallBreak,durationBigBreak) {
  var counter = timerCounter === durationWorkCount*2 ? 0 : (timerCounter + 1)
  var time = getDurationTaimer(counter, durationWorkCount,durationWork,durationSmallBreak,durationBigBreak);

  if(timer.isTimer()) {
    timer.stop(stopMesage);   
  }
  timer.setDuration(time);
  timer.start();

  return counter;
}
