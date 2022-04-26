import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import TextInputComponent from '../../components/textInput'
import ButtonComponent from '../../components/button'
import strings from '../../constants/lang'
import colors from '../../styles/colors'
import { useState } from 'react';
import imagePath from '../../constants/imagePath'
import navigationString from '../../navigations/navigationString'
import actions from '../../redux/actions'


export default function SignUp({ navigation }) {




    

    const [allValues, setAllValues] = useState({
        fisrt_name: '',
        last_name: '',
        email: '',
        phone: '',
        phone_code: '',
        country_code: '',
        device_token: '',
        device_type: '',
        password: '',
    });
    const { fisrt_name, last_name, email, phone, phone_code, country_code, device_token, device_type, password } = allValues
    const changeHandler = (val) => {
        setAllValues({ ...allValues, ...val })
    }


    const emailRegex = /^[\w-\.\_\$]+@([\w]{3,5}\.)[\w]{2,4}$/;
    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\^&\*])(?=.{8,})");

    const details = () => {
        if (emailRegex.test(emailEnter)) {
            setEmailEnter(false)

            if (strongRegex.test(passwordEnter)) {
                setPassword(false)
                SetcPass(false)
                if (passwordEnter === confirmPass) {
                    set
                }
            }
        }
    }
    const onSignup = async () => {
        let apiData = {
            first_name: fisrt_name,
            last_name: last_name,
            email: email,
            phone: phone,
            phone_code: phone_code,
            country_code: country_code,
            device_token: 'KDKFJDKFDFKDFDF',
            device_type: Platform.OS == 'ios' ? 'IOS' : 'ANDROID',
            password: password,
        }
        console.log("user Data", apiData)
        try {
            const res = await actions.signUp(apiData)
            console.log("SignUp api Data is *************", res)
            alert("User signup successfully....!!!")
        } catch (error) {
            console.log("error raised in signinup", error)
            alert(error?.message)
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={logInStyle.logInMain} >


                <Text style={logInStyle.logInHeading}>Create your Account</Text>
                <TextInputComponent
                    placeholder='Enter your first name'
                    placeholderTextColor={colors.blackC}
                    onchangeText={(fisrt_name) => changeHandler({ fisrt_name })}

                />

                <TextInputComponent
                    placeholder='Enter your last name'
                    placeholderTextColor={colors.blackC}
                    onchangeText={(last_name) => changeHandler({ last_name })}
                />
                <TextInputComponent
                    placeholder='enter your email'
                    placeholderTextColor={colors.blackC}
                    onchangeText={(email) => changeHandler({ email })} />

                <TextInputComponent
                    placeholder='enter your phone code'
                    placeholderTextColor={colors.blackC}
                    onchangeText={(phone_code) => changeHandler({ phone_code })}
                />
                <TextInputComponent
                    placeholder='enter your phone number'
                    placeholderTextColor={colors.blackC}
                    onchangeText={(phone) => changeHandler({ phone })}
                />




                <TextInputComponent
                    placeholder='enter your country code'
                    placeholderTextColor={colors.blackC}
                    onchangeText={(country_code) => changeHandler({ country_code })}
                />
                {/* <TextInputComponent
                    placeholder='enter your device token'
                    placeholderTextColor={colors.blackC}
                    onchangeText={(device_token) => changeHandler({ device_token})}
                />
                <TextInputComponent
                    placeholder='enter your device type'
                    placeholderTextColor={colors.blackC}
                    onchangeText={(device_type) => changeHandler({ device_type })}
                /> */}
                <TextInputComponent
                    placeholder='enter your password'
                    placeholderTextColor={colors.blackC}
                    onchangeText={(password) => changeHandler({ password })}
                />

                <ButtonComponent buttonText={strings.SIGN_UP} onpress={onSignup} dynamicStyle={true} />
            </View>
        </SafeAreaView>
    )
}