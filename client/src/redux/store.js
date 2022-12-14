import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import errorsReduser from './reducers/errorsReduser';

export default configureStore({
  reducer: {
    user: userReducer,
    errors: errorsReduser,
    },
});
