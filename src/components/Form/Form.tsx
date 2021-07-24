import React, { Fragment, useState} from "react";
import { View, TextInput,Text, Pressable, GestureResponderEvent, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";
import {Picker} from '@react-native-picker/picker';
import DateTimePicker, { Event, AndroidEvent } from "@react-native-community/datetimepicker";
import { useEffect } from "react";

type AddTask ={
    title: string,
    deadline: Date,
    startime: string,
    endtime: string,
    remind: string,
    repeat: string
}
type AndroidMode = "date" | "time"

const currentTime = new Date().getHours().toString() + ":" + new Date().getMinutes().toString()


const Form =()=>{

    const {control,handleSubmit} = useForm<AddTask>();

    const [date, setDate] = useState<Date>(new Date());
    const [startime, setStartTime] = useState<string>(currentTime)
    const [endtime, setEndTime] = useState<string>(currentTime)
    const [showD, setShowD] = useState<boolean | undefined>(false);
    const [showS, setShowS] = useState<boolean | undefined>(false);
    const [showE,setShowE] = useState<boolean | undefined>(false);

  const handlerOnChangeDate = (e: Event | AndroidEvent, selectedDate?: Date | undefined) => {
      const currentDate = selectedDate || date
      setDate(currentDate)
        setShowD(false);
     
    
    };
const handlerOnChangeStartTime = (event: Event | AndroidEvent,  selectedDate?: Date | undefined) =>{
    console.log(selectedDate?.getUTCHours());
    
    if(selectedDate != undefined)
    {
    const currentTime = selectedDate.getHours().toString() + ":" + selectedDate.getMinutes().toString() 
    setStartTime(currentTime);
    }
};

const handlerOnChangeEndTime = (event: Event | AndroidEvent,  selectedDate?: Date | undefined) =>{
    console.log(selectedDate);
    
    if(selectedDate != undefined)
    {
    const currentTime = selectedDate.getHours().toString() + ":" + selectedDate.getMinutes().toString() 
    setEndTime(currentTime);
}
    setShowE(false);
};
 

    const showDatepicker = () => {
       
console.log("entre al showdatepicker");

       setShowD(true)
        
      
   
  };

  const showTimepicker = () => {
    setShowS(true)
  };

// useEffect(()=>{
//     (e:Event)=>handlerOnChangeDate(e,date)
// },[showDatepicker])

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
                render={() => (
                    <View>
                        <TouchableOpacity onPress={()=>showDatepicker()}>
                            <Text>
                                {`${date.toISOString().slice(0,10)  } `}
                            </Text>
                        </TouchableOpacity>
                        {showD && <DateTimePicker
                            value={date}
                            mode= "date"
                            is24Hour={true} 
                            display="calendar"
                            onChange={(e:Event | AndroidEvent, date?: Date | undefined)=>{
                                handlerOnChangeDate(e,date);
                            }
                        }/>}
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
                        <TouchableOpacity onPress={()=>showTimepicker()}>
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
                        <TouchableOpacity onPress={()=>showTimepicker()}>
                            <Text>
                                {`${endtime} `}
                            </Text>
                        </TouchableOpacity>
                        {showS && <DateTimePicker
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
                defaultValue=""
            />
        </Fragment>
    )
};

export default Form;