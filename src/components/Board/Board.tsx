import React, { useState } from "react";
import { View , Text,SafeAreaView,FlatList, GestureResponderEvent} from "react-native";
import { CheckBox} from "react-native-elements";
import { useDispatch } from "react-redux";

import { ITask } from "../../actions";



interface BoardProps {
	tasks: any[];
	
}




const Board = ({tasks}:BoardProps)=>{
    console.log("board",tasks);

    const dispatch = useDispatch();
    const [toggleCheckBox, setToggleCheckBox] = useState<boolean>(false)

    const onCheck =(id:string) =>{
        dispatch({type:"COMPLETE_TODO",payload:id})
        
    }
    


    return(

        <View>
            <FlatList
                data={tasks}
               
                keyExtractor={(item,index) => index.toString()}
                renderItem={({item,index})=>{
                    console.log("render",item);
                    
                    return(
                        <View>
                            <CheckBox
  
  title={item.task.title}
 
  checked={item.complete}
  onPress={()=>onCheck(item.task.id)}
/>

  
                            
                        </View>
                    )
                }}
            />
    </View>

      
    )
};

export default Board;