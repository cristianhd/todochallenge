
import { Reducer } from "react";
import { ActionSheetIOS } from "react-native";
import { ITask, TaskAction } from "../actions";


interface taskState 
{
    
    tasks: any[],
    tab: string
}


const initialState= {
    tasks : [],
    tab:"all"
}



const TaskReducer = (state:taskState = initialState, action:TaskAction)=>{
    switch (action.type) {
        case 'ADD_TASK':
            
                return{
                    ...state,
                    tasks: state.tasks.concat({
                        task: action.payload,
                        complete:false
                    })
                    
                }
        case 'COMPLETE_TODO':
            return {
                ...state,
                tasks: state.tasks.map((item => {
                    
                    if(item.task.id==action.payload){
                        
                        console.log("item",item.complete);

                        return {
                            task:item.task,
                            complete:!item.complete
                            }
                        }else{
                            return item;
                        }
                    }))
                
            }
            
            case 'CHANGE_TAB':
                return   {
                    ...state,
                    tab: action.payload
                }
            
           
            
        default:
            return state;
    }
    
}

export {TaskReducer};