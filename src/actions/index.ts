import { GenerateUUID } from "react-native-uuid";

export interface ITask {
  id: GenerateUUID,
  title: string,
  deadline: Date,
  startime: string,
  endtime: string,
  remind: string,
  repeat: string
}

export interface IAddTaskAction {
  readonly type: 'ADD_TASK';
  payload: ITask;
}

export interface ICompleteTodo {
  readonly type: 'COMPLETE_TODO';
  payload: number
}

export interface IChange_Tab {
  readonly type: 'CHANGE_TAB',
  payload: string
}


export type TaskAction = IAddTaskAction | ICompleteTodo | IChange_Tab ;