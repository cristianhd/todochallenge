import React, { Fragment } from "react";
import { View, TextInput,Text } from "react-native";
import { useForm, Controller } from "react-hook-form";

type AddTask ={
    title: string,
    deadline: string,
    startime: string,
    endtime: string,
    remind: string,
    repeat: string
}
const Form =()=>{

    const {control,handleSubmit} = useForm<AddTask>();

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
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="deadline"
                defaultValue=""
            />
            <View>
                <Text>Start time</Text>
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
                    name="startime"
                    defaultValue=""
                />

                <Text>End time</Text>
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
                    name="endtime"
                    defaultValue=""
                />
            </View>

            <Text>Remind</Text>
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
                name="remind"
                defaultValue=""
            />

            <Text>Repeat</Text>
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
                name="repeat"
                defaultValue=""
            />
        </Fragment>
    )
};

export default Form;