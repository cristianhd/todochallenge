import { combineReducers } from 'redux';
import { TaskReducer } from './taskReducer';

const rootReducer = combineReducers({
  taskReducer: TaskReducer
});

export type ApplicationState = ReturnType<typeof rootReducer>;

export { rootReducer };