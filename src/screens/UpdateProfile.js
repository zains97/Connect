import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Fontisto';
import DatePicker from 'react-native-datepicker';
import Header from '../components/Header';
import Footer from '../components/Footer';

const UpdateProfile = ({navigation}) => {
  const [fName, setFName] = useState();
  const [lName, setLName] = useState();
  const [email, setEmail] = useState();
  const [updatePassword, setUpdatePassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
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
    <View style={{flex: 1}}>
      <Header />
      <ScrollView style={{backgroundColor: 'white', flex: 0.875}}>
        <View style={{alignItems: 'center'}}>
          <TextInput
            onChangeText={text => setFName(text)}
            style={styles.textInput}
            placeholder="First Name"
            selectionColor={'orange'}
          />
          <TextInput
            onChangeText={text => setLName(text)}
            style={styles.textInput}
            placeholder="Last Name"
            selectionColor={'orange'}
          />
          <TextInput
            onChangeText={text => setEmail(text)}
            style={styles.textInput}
            placeholder="Email"
            selectionColor={'orange'}
          />
          <TextInput
            onChangeText={text => setUpdatePassword(text)}
            style={styles.textInput}
            placeholder="Update Password"
            selectionColor={'orange'}
            secureTextEntry={true}
          />
          <TextInput
            onChangeText={text => setConfirmPassword(text)}
            style={styles.textInput}
            placeholder="Confirm Password"
            selectionColor={'orange'}
            secureTextEntry={true}
          />
        </View>
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
                backgroundColor: '#3b82f6',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 40,
                marginHorizontal: 5,
                borderWidth: 3,
                borderColor: data.gender === gender ? '#1d4ed8' : '#3b82f6',
              }}>
              <Icon
                color={'white'}
                name={data.gender}
                size={data.gender === gender ? 28 : 24}
              />
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
            minDate="1950-01-01"
            maxDate={_date}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            showIcon={true}
            onDateChange={date => setDate(date)}
            color="white"
          />
        </View>
      </ScrollView>
      <Footer navigation={navigation} />
    </View>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    height: 50,
    padding: 10,
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    width: '85%',
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 2,
  },
});
