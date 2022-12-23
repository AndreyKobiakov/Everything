import { ERRORS } from '../types';

export default function errorsReduser(state = '', action) {
  const { type, payload } = action;
  switch (type) {
    case ERRORS:
      return payload;
    default:
      return state;
  }
}
