// import AsyncStorage from '@react-native-community/async-storage';

import {showMessage} from 'react-native-flash-message'
// const getLocalUserData = () => AsyncStorage.getItem('userData').then((data) => JSON.parse(data));
// const setLocalUserData = (data) => AsyncStorage.setItem('userData', JSON.stringify(data));
// const deleteLocalUserData = () => AsyncStorage.removeItem('userData');
// const getDeviceToken = (data) => AsyncStorage.getItem('deviceToken').then((data) => data);
// const setDeviceToken = (data) => AsyncStorage.setItem('deviceToken', data)
// const deleteDeviceToken = () => AsyncStorage.removeItem('deviceToken');

const showError =(message)=>{
    showMessage({
        type:"danger",
        icon:'danger',
        message
    })
}

const showSuccess =(message)=>{
    showMessage({
        type:"success",
        icon:'success',
        message
    })
}
export {
    // getLocalUserData,
    // setLocalUserData,
    // deleteLocalUserData,
    // getDeviceToken,
    // setDeviceToken,
    // deleteDeviceToken,
    showError,
    showSuccess
};
