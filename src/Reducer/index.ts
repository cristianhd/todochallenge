import { combineReducers } from 'redux';
import { TaskReducer } from './taskReducer';

const rootReducer = combineReducers({
  taskReducer: TaskReducer,
  //some more reducer will come
});

export type ApplicationState = ReturnType<typeof rootReducer>;

export { rootReducer };