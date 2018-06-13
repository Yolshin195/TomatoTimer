import { ACTION_SHOW_SETTINGS } from './actionConst';

export const actionShowSettings = function(show) {
  console.log('actionShowSettings: ', show);
  return {
    type: ACTION_SHOW_SETTINGS,
    payload: show
  }
}
