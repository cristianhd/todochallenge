export interface ITask {
  title: string,
  deadline: Date,
  startime: string,
  endtime: string,
  remind: string,
  repeat: string
}
type AddTask ={

}
export interface IAddTaskAction {
  readonly type: 'ADD_TASK';
  payload: ITask;
}


export type TaskAction = IAddTaskAction