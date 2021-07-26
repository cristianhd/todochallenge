
import { Reducer } from "react";
import { ITask, TaskAction } from "../actions";


interface taskState 
{
    
    tasks: any[]
}


const initialState= {
    tasks : []
    
}



const TaskReducer = (state:taskState = initialState, action:TaskAction)=>{
    switch (action.type) {
        case 'ADD_TASK':
            
                return{
                    ...state,
                    tasks: state.tasks.concat(action.payload)
                }
            
           
            
        default:
            return state;
    }
}

export {TaskReducer};