import { ADD_TODO } from '../types';

export const addPost = (payload) => ({ type: ADD_TODO, payload });

export const submitToDo = (e, input) => (dispatch) => {
  e.preventDefault();
  dispatch(addPost(input));
};
