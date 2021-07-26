import React, { useState } from "react";
import { View , Text,SafeAreaView,FlatList} from "react-native";
import { CheckBox} from "react-native-elements";

import { ITask } from "../../actions";



interface BoardProps {
	tasks: any[];
	
}




const Board = ({tasks}:BoardProps)=>{
    console.log("board",tasks);
    const [toggleCheckBox, setToggleCheckBox] = useState<boolean>(true)

    


    return(

        <View>
            <FlatList
                data={tasks}
                renderItem={({item})=>{
                    return(
                        <View>
                            <CheckBox
  
  title={item.title}
 
  checked={toggleCheckBox}
  onPress={(e)=>setToggleCheckBox(e)}
/>

  
                            
                        </View>
                    )
                }}
                keyExtractor={(item,index) => index.toString()}
            />
    </View>

      
    )
};

export default Board;