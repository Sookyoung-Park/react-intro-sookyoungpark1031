/* eslint-disable no-param-reassign */
import { produce } from 'immer';
import { ActionTypes } from '../actions';

const initialState = {
  selected: null,
  list: [],
};

// simple version that returns new object manually
// const VideoReducer = (state = initialState, action = {}) => {
//   switch (action.type) {
//     case ActionTypes.SELECT_VIDEO:
//       return { selected: action.payload, list: state.list };
//     case ActionTypes.SET_VIDEOS:
//       return { selected: state.selected, list: action.payload };
//     default:
//       return state;
//   }
// };

// better version that uses a curried immer function
// note: initialState is passed in as second argument rather than default parameter, and no need to return as produce handles that
const VideoReducer = produce((draftState, action = {}) => {
  switch (action.type) {
    case ActionTypes.SELECT_VIDEO:
      draftState.selected = action.payload;
      break;
    case ActionTypes.SET_VIDEOS:
      // eslint-disable-next-line prefer-destructuring
      draftState.selected = action.payload[0];
      draftState.list = action.payload;
      break;
    default:
      break;
  }
}, initialState);

export default VideoReducer;
