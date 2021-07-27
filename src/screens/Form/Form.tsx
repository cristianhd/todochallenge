import React, { Fragment, useState } from "react";
import {
  View,
  TextInput,
  Text,
  Button,
  Alert,
  Pressable,
  GestureResponderEvent,
  TouchableOpacity,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker, {
  Event,
  AndroidEvent,
} from "@react-native-community/datetimepicker";
import { useEffect } from "react";
import { ITask, IAddTaskAction, ADD_TASK } from "../../actions";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import uuid from "react-native-uuid";
import ButtonPrimary from "../../components/Buttons/ButtonPrimary";
import { FontAwesome5 } from "@expo/vector-icons";

import {
  Container,
  Input,
  StyleText,
  TimePickerContainer,
  WrapperButton,
  WrapperField,
  WrapperPicker,
  WrapperTime,
} from "./Styled";
import { WrapperForm } from "./Styled";
import Label from "../../components/Label/Label";

type AndroidMode = "date" | "time";

const currentTime = new Date().getHours() + ":" + new Date().getMinutes();

const Form = () => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const { control, handleSubmit, setValue } = useForm<ITask>();
  const id = uuid.v4();
  const onSubmit = handleSubmit((data) => {
    dispatch({ type: ADD_TASK, payload: { ...data, id } });
    navigate("Home");
  });

  const [date, setDate] = useState<Date>(new Date());
  const [startime, setStartTime] = useState<string>(currentTime);
  const [endtime, setEndTime] = useState<string>(currentTime);
  const [showD, setShowD] = useState<boolean | undefined>(false);
  const [showS, setShowS] = useState<boolean | undefined>(false);
  const [showE, setShowE] = useState<boolean | undefined>(false);

  const handlerOnChangeDate = (
    e: Event | AndroidEvent,
    selectedDate?: Date | undefined
  ) => {
    const currentDate = selectedDate || date;
    console.log("date", selectedDate);

    if (e.type === "set") {
      setShowD(false);
      setDate(currentDate);
      setValue("deadline", currentDate);
    }
  };
  const handlerOnChangeStartTime = (
    event: Event | AndroidEvent,
    selectedDate?: Date | undefined
  ) => {
    console.log(selectedDate?.getUTCHours());

    const currentTime =
      selectedDate?.getHours().toString() +
      ":" +
      selectedDate?.getMinutes().toString();
    if (event.type === "set") {
      setShowS(false);
      setStartTime(currentTime);
    }
    // setValue
  };

  const handlerOnChangeEndTime = (
    event: Event | AndroidEvent,
    selectedDate?: Date | undefined
  ) => {
    console.log(selectedDate);
    const currentTime =
      selectedDate?.getHours().toString() +
      ":" +
      selectedDate?.getMinutes().toString();

    if (event.type === "set") {
      setShowE(false);
      setEndTime(currentTime);
    }
    //SetValue
  };

  const showDatepicker = () => {
    console.log("entre al showdatepicker");

    setShowD(true);
  };

  const showStarTimepicker = () => {
    setShowS(true);
  };
  const showEndTimepicker = () => {
    setShowE(true);
  };

  return (
    <Container>
      <WrapperForm>
        <Label title="Title" />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <WrapperField>
              <Input
                style={{ fontFamily: "Lexend-Regular" }}
                placeholder="Design team meeting"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </WrapperField>
          )}
          name="title"
          defaultValue=""
        />

        <Label title="Deadline" />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { value } }) => (
            <TouchableOpacity onPress={() => showDatepicker()}>
              <WrapperField>
                <StyleText>{`${date.toISOString().slice(0, 10)}`}</StyleText>
                <FontAwesome5 name="chevron-down" size={20} color="gray" />
                {showD && (
                  <DateTimePicker
                    value={value}
                    mode="date"
                    is24Hour={true}
                    display="calendar"
                    onChange={(
                      e: Event | AndroidEvent,
                      date?: Date | undefined
                    ) => {
                      handlerOnChangeDate(e, date);
                    }}
                  />
                )}
              </WrapperField>
            </TouchableOpacity>
          )}
          name="deadline"
          defaultValue={date}
        />

        <WrapperTime>
          <TimePickerContainer>
            <Label title="Start time" />
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={() => (
                <TouchableOpacity onPress={() => showStarTimepicker()}>
                  <WrapperField>
                    <StyleText>{`${startime} `}</StyleText>
                    <FontAwesome5 name="clock" size={20} color="#808B96" />
                  </WrapperField>
                  {showS && (
                    <DateTimePicker
                      value={date}
                      mode="time"
                      is24Hour={false}
                      display="clock"
                      onChange={(
                        e: Event | AndroidEvent,
                        date?: Date | undefined
                      ) => {
                        handlerOnChangeStartTime(e, date);
                      }}
                    />
                  )}
                </TouchableOpacity>
              )}
              name="startime"
              defaultValue={startime}
            />
          </TimePickerContainer>
          <TimePickerContainer>
            <Label title="End time" />
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={() => (
                <TouchableOpacity onPress={() => showEndTimepicker()}>
                  <WrapperField>
                    <StyleText>{`${endtime}`}</StyleText>
                    <FontAwesome5 name="clock" size={20} color="#808B96" />
                  </WrapperField>
                  {showE && (
                    <DateTimePicker
                      value={date}
                      mode="time"
                      is24Hour={false}
                      display="clock"
                      onChange={(
                        e: Event | AndroidEvent,
                        date?: Date | undefined
                      ) => {
                        handlerOnChangeEndTime(e, date);
                      }}
                    />
                  )}
                </TouchableOpacity>
              )}
              name="endtime"
              defaultValue={endtime}
            />
          </TimePickerContainer>
        </WrapperTime>

        <Label title="Remind" />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <WrapperPicker>
              <Picker selectedValue={value} onValueChange={onChange}>
                <Picker.Item
                  color="#808B96"
                  label="  10 minutes early"
                  value="10min"
                />
                <Picker.Item
                  color="#808B96"
                  label="  1 hour early"
                  value="1hr"
                />
                <Picker.Item
                  color="#808B96"
                  label="  24 hours early"
                  value="24hr"
                />
              </Picker>
            </WrapperPicker>
          )}
          name="remind"
          defaultValue="10min"
        />

        <Label title="Repeat" />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <WrapperPicker>
              <Picker selectedValue={value} onValueChange={onChange}>
                <Picker.Item color="#808B96" label="  Weekly" value="week" />
                <Picker.Item
                  color="#808B96"
                  label="  Byweekly"
                  value="byweek"
                />
                <Picker.Item color="#808B96" label="  Monthly" value="month" />
              </Picker>
            </WrapperPicker>
          )}
          name="repeat"
          defaultValue="week"
        />
        <WrapperButton>
          <ButtonPrimary title="Create a Task" onPress={onSubmit} />
        </WrapperButton>
      </WrapperForm>
    </Container>
  );
};

export default Form;
