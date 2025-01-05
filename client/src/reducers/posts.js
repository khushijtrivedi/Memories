import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (action, state = []) => {
  console.log('Reducer received action:', action);
  if (!action || typeof action !== 'object' || !action.type) {
    console.error('Invalid action:', action);
    return state;
  }

  switch (action.type) {
    case FETCH_ALL:
      if (Array.isArray(action.payload)) {
        console.log('Updating state with new posts:', action.payload);
        return action.payload; // Set the state directly to the fetched data
      }
      console.error('Payload for FETCH_ALL is not an array:', action.payload);
      return state; // Return the current state unchanged if payload is not an array

    case LIKE:
      if (Array.isArray(state)) {
        return state.map((post) => (post._id === action.payload._id ? action.payload : post));
      }
      console.error('State is not an array during LIKE action');
      return state;

    case CREATE:
      if (Array.isArray(state)) {
        return [...state, action.payload];
      }
      console.error('State is not an array during CREATE action');
      return state;

    case UPDATE:
      if (Array.isArray(state)) {
        return state.map((post) => (post._id === action.payload._id ? action.payload : post));
      }
      console.error('State is not an array during UPDATE action');
      return state;

    case DELETE:
      if (Array.isArray(state)) {
        return state.filter((post) => post._id !== action.payload);
      }
      console.error('State is not an array during DELETE action');
      return state;

    default:
      return state;
  }
};
