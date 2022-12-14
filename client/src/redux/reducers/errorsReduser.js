import { ERRORS } from '../types';

// eslint-disable-next-line default-param-last
export default function postsReducer(state = '', action) {
  const { type, payload } = action;
  switch (type) {
    case ERRORS:
      return payload;
    default:
      return state;
  }
}
