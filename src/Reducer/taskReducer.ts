
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
                    tasks: state.tasks.concat({
                        task: action.payload,
                        complete:false
                    })
                    
                }
        case 'COMPLETE_TODO':
            return {
                ...state,
                tasks: 
                   
                     state.tasks.map((item => {
                    
                    if(item.task.id==action.payload){
                        
                        console.log("item",item.complete);

                        return {
                            task:item.task,
                            complete:!item.complete
                            }
                        }else{
                            return item;
                        }

                  
                    }
                
                ))
                
            }
            
           
            
        default:
            return state;
    }
    
}

export {TaskReducer};