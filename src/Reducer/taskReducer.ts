import { Reducer } from "react";
import { ActionSheetIOS } from "react-native";
import { AnyAction } from "redux";
import { ADD_TASK, COMPLETE_TODO,CHANGE_TAB, ITask, TaskAction } from "../actions";

export interface taskState {
  tasks: any[];
  tab: number;
}

const initialState = {
  tasks: [],
  tab: 0,
};

const TaskReducer = (state: taskState = initialState, action: AnyAction) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: state.tasks.concat({
          task: action.payload,
          complete: false,
        }),
      };
    case COMPLETE_TODO:
      return {
        ...state,
        tasks: state.tasks.map((item) => {
          if (item.task.id == action.payload) {
            console.log("item", item.complete);

            return {
              task: item.task,
              complete: !item.complete,
            };
          } else {
            return item;
          }
        }),
      };

    case CHANGE_TAB:
      return {
        ...state,
        tab: action.payload,
      };

    default:
      return state;
  }
};

export { TaskReducer };
