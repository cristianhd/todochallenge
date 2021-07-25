
import { ITask, TaskAction } from "../actions";

const initialState= [
    
    {
        task: {} as ITask,
        complete: false
    }
]

type taskState = 
    {

        task: ITask,
        complete:boolean
    }





const TaskReducer = (state:Array<taskState> = initialState, action:TaskAction)=>{
    switch (action.type) {
        case 'ADD_TASK':
            return{
                
                    task: action.payload,
                    complete:false
                
            }
        default:
            return state;
    }
}

export {TaskReducer};