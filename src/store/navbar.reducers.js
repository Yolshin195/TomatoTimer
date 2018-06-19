import { LINK_NAVBAR } from './navbar.actions';

const initializationState = {
  items: 'ToDo,Settings',
  textLogo: 'Tomato Timer',
  link: '/'
}

function navBarReducer(state = initializationState, action) {
  switch(action.type) {
    case LINK_NAVBAR:
      return {
        ...state,
        link: action.url
      };
    default:
      return state;
  }
}

export default navBarReducer;
