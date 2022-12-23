import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import errorsReduser from './reducers/errorsReduser';
import toDoReducer from './reducers/toDoRedcuer';

export default configureStore({
  reducer: {
    user: userReducer,
    errors: errorsReduser,
    toDo: toDoReducer,
  },
});
