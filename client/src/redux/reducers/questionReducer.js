import { SET_QUESTIONS } from '../types';

export default function questionReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case SET_QUESTIONS:
      return payload;
    default:
      return state;
  }
}
