import { GenerateUUID } from "react-native-uuid";

export const ADD_TASK = "ADD_TASK";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const CHANGE_TAB = "CHANGE_TAB";

export interface ITask {
  id: GenerateUUID;
  title: string;
  deadline: Date;
  startime: string;
  endtime: string;
  remind: string;
  repeat: string;
}

export interface IAddTaskAction {
  readonly type: "ADD_TASK";
  payload: ITask;
}

export interface ICompleteTodo {
  readonly type: "COMPLETE_TODO";
  payload: number;
}

export interface IChange_Tab {
  readonly type: "CHANGE_TAB";
  payload: string;
}

export type TaskAction = IAddTaskAction | ICompleteTodo | IChange_Tab;
