import { SET_CATEGORIES } from '../types';

export default function categoryReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case SET_CATEGORIES:
      return payload;
    default:
      return state;
  }
}