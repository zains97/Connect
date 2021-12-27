import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Fontisto';
import DatePicker from 'react-native-datepicker';

const UpdateProfile = () => {
  const [fName, setFName] = useState();
  const [lName, setLName] = useState();
  const [updatePassword, setUpdatePassword] = useState();
  const [gender, setGender] = useState();
  const [date, setDate] = useState();
  console.log(date);
  const _date = new Date();
  const genders = [
    {
      id: 1,
      gender: 'male',
    },
    {
      id: 2,
      gender: 'female',
    },
  ];
  return (
    <View style={{backgroundColor: 'white'}}>
      <TextInput
        onChangeText={text => setFName(text)}
        style={{
          width: '100%',
          height: 50,
          padding: 10,
          color: 'black',
          fontSize: 16,
          textAlign: 'center',
        }}
        placeholder="First Name"
        selectionColor={'orange'}
      />
      <TextInput
        onChangeText={text => setLName(text)}
        style={{
          width: '100%',
          height: 50,
          padding: 10,
          color: 'black',
          fontSize: 16,
          textAlign: 'center',
        }}
        placeholder="Last Name"
        selectionColor={'orange'}
      />
      <TextInput
        onChangeText={text => setUpdatePassword(text)}
        style={{
          width: '100%',
          height: 50,
          padding: 10,
          color: 'black',
          fontSize: 16,
          textAlign: 'center',
        }}
        placeholder="Update Password"
        selectionColor={'orange'}
        secureTextEntry={true}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        {genders.map(data => (
          <TouchableOpacity
            onPress={() => setGender(data.gender)}
            activeOpacity={0.6}
            style={{
              width: 45,
              height: 45,
              backgroundColor: 'black',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 40,
              marginHorizontal: 5,
              borderWidth: 3,
              borderColor: data.gender === gender ? 'orange' : null,
            }}>
            <Icon color={'white'} name={data.gender} size={24} />
          </TouchableOpacity>
        ))}
      </View>
      <View
        style={{
          marginVertical: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <DatePicker
          style={{
            width: 200,
            borderColor: 'transparent',
          }}
          date={date}
          mode="date"
          placeholder="Select Date of Birth"
          format="YYYY-MM-DD"
          minDate="1990-05-01"
          maxDate={_date}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          showIcon={false}
          onDateChange={date => setDate(date)}
        />
      </View>
    </View>
  );
};

export default UpdateProfile;
