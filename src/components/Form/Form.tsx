import React, { Fragment, useState} from "react";
import { View, TextInput,Text, Button, Alert, Pressable, GestureResponderEvent, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";
import {Picker} from '@react-native-picker/picker';
import DateTimePicker, { Event, AndroidEvent } from "@react-native-community/datetimepicker";
import { useEffect } from "react";
import { ITask, IAddTaskAction } from "../../actions";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import uuid from 'react-native-uuid';


// type AddTask ={
//     title: string,
//     deadline: Date,
//     startime: string,
//     endtime: string,
//     remind: string,
//     repeat: string
// }
type AndroidMode = "date" | "time"

const currentTime = new Date().getHours() + ":" + new Date().getMinutes()

const Form =()=>{
const {navigate} = useNavigation()
     const dispatch = useDispatch();
    const {control,handleSubmit,setValue} = useForm<ITask>();
    const id =uuid.v4()
     const onSubmit = handleSubmit(data => {
         dispatch({type:"ADD_TASK",payload:{...data,id}})
         navigate("Home")
        });
   
     
    
    const [date, setDate] = useState<Date>(new Date());
    const [startime, setStartTime] = useState<string>(currentTime)
    const [endtime, setEndTime] = useState<string>(currentTime)
    const [showD, setShowD] = useState<boolean | undefined>(false);
    const [showS, setShowS] = useState<boolean | undefined>(false);
    const [showE,setShowE] = useState<boolean | undefined>(false);

  const handlerOnChangeDate = (e: Event | AndroidEvent, selectedDate?: Date | undefined) => {
      const currentDate = selectedDate || date
        console.log("date",selectedDate);
        
      if(e.type==="set") {setShowD(false);
      setDate(currentDate)
      setValue("deadline",currentDate)
    }
        
     
    
    };
const handlerOnChangeStartTime = (event: Event | AndroidEvent,  selectedDate?: Date | undefined) =>{
    console.log(selectedDate?.getUTCHours());
    
    const currentTime = selectedDate?.getHours().toString() + ":" + selectedDate?.getMinutes().toString() 
    if(event.type==="set"){setShowS(false);
    setStartTime(currentTime);}
    // setValue
};

const handlerOnChangeEndTime = (event: Event | AndroidEvent,  selectedDate?: Date | undefined) =>{
    console.log(selectedDate);
    const currentTime = selectedDate?.getHours().toString() + ":" + selectedDate?.getMinutes().toString() 
    
    if(event.type==="set"){setShowE(false);
   setEndTime(currentTime)}
   //SetValue
};
 

    const showDatepicker = () => {
       
console.log("entre al showdatepicker");

       setShowD(true)
        
      
   
  };

  const showStarTimepicker = () => {
    setShowS(true)
  };
  const showEndTimepicker = () => {
    setShowE(true)
  };

// useEffect(()=>{
//     navigate("Home")
// },[handleSubmit])

    return (
        <Fragment>
            <Text>Title</Text>
            <Controller
                control={control}
                rules={{
                required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="title"
                defaultValue=""
            />

            <Text>Deadline</Text>
            <Controller
                control={control}
                rules={{
                required: true,
                }}
                render={({field:{value}}) => (
                    <View>
                        <TouchableOpacity onPress={()=>showDatepicker()}>
                            <Text>
                                {`${date.toISOString().slice(0,10)  } `}
                            </Text>
                        {showD && <DateTimePicker
                            value={value}
                            mode= "date"
                            is24Hour={true} 
                            display="calendar"
                            onChange={(e:Event | AndroidEvent, date?: Date | undefined)=>{
                                handlerOnChangeDate(e,date);
                            }
                        }/>}
                        </TouchableOpacity>
                    </View>)}
                name="deadline"
                defaultValue= {date}
            />

            <Text>Star time</Text>
            <Controller
                control={control}
                rules={{
                required: true,
                }}
                render={() => (
                    <View>
                        <TouchableOpacity onPress={()=>showStarTimepicker()}>
                            <Text>
                                {`${startime} `}
                            </Text>
                        </TouchableOpacity>
                        {showS && <DateTimePicker
                            value={date}
                            mode= "time"
                            is24Hour={false} 
                            display="clock"
                            onChange={(e:Event | AndroidEvent, date?: Date | undefined)=>{
                                handlerOnChangeStartTime(e,date);
                            }
                        }/>}
                    </View>)}
                name="startime"
                defaultValue= {startime}
            />

            <Text>End time</Text>
            <Controller
                control={control}
                rules={{
                required: true,
                }}
                render={() => (
                    <View>
                        <TouchableOpacity onPress={()=>showEndTimepicker()}>
                            <Text>
                                {`${endtime} `}
                            </Text>
                        </TouchableOpacity>
                        {showE && <DateTimePicker
                            value={date}
                            mode= "time"
                            is24Hour={false} 
                            display="clock"
                            onChange={(e:Event | AndroidEvent, date?: Date | undefined)=>{
                                handlerOnChangeEndTime(e,date);
                            }
                        }/>}
                    </View>)}
                name="endtime"
                defaultValue= {endtime}
            />
            



            <Text>Remind</Text>
            <Controller
                control={control}
                rules={{
                required: true,
                }}
                render={({ field: { onChange, value } }) => (
                    <Picker
                        selectedValue={value}
                        onValueChange={onChange}>
                        <Picker.Item label="10 minutes early" value="10min" />
                        <Picker.Item label="1 hour early" value="1hr" />
                        <Picker.Item label ="24 hours early" value ="24hr"/>
                    </Picker>
                )}
                name="remind"
                defaultValue=""
            />

            <Text>Repeat</Text>
            <Controller
                control={control}
                rules={{
                required: true,
                }}
                render={({ field: { onChange, value } }) => (
                    <Picker
                        selectedValue={value}
                        onValueChange={onChange}>
                        <Picker.Item label="Weekly" value="week" />
                        <Picker.Item label="Byweekly" value="byweek" />
                        <Picker.Item label="Monthly" value="month" />
                    </Picker>
                )}
                name="repeat"
                
            />
             <Button
        title="Create a Task"
        onPress={onSubmit}
      />
        
        </Fragment>
    )
};

export default Form;