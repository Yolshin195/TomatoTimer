export function setStateInLocalStore(state) {
  if(!window.localStorage) {
    return;
  }
  localStorage.setItem('state', JSON.stringify(state));
}

export function getStateOfLocalStore() {
  if (!window.localStorage
  && !window.localStorage.length) {
    return undefined;
  }

  const state = window.localStorage['state'];

  if (!state) {
    return undefined;
  }

  return JSON.parse(state);
}

export function trackStorForLocalStore(store) {
  store.subscribe(() => {
    setStateInLocalStore(store.getState());
  })
}
