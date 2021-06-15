import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, ScrollView, Pressable, Alert } from 'react-native';
import styles from './ForumScreenStyle';
import { showSuccess, showError } from '../../utils/helperFunctions';
import { Images } from '../../constants/ImagesPath';
import { Button } from '../../components/molecules/Button';
import strings from '../../constants/LocalizedStrings'
import actions from '../../redux/actions';
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Loader from '../../utils/loader';
import { spacing } from '../../styles/spacing';

//let deviceWidth = Dimensions.get('window').width



export default class Forum extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setGifImage: "",
            counter: 0,
            passArray: [],
            isloading: false,
            subtopicShowHide: false,
            savedSessiom: '',
            formStats: [],
            formData: [],
            userFirstName: '',
            userLastName: '',
            userPhoneNo: '',
            avatarSource: null,
            selectedImages: [],
            selectedImage: [],
            v3Visible: false,
             SlotId: this.props.route.params.Id,
            data: ''
        }
    }

    componentDidMount() {
        this.GetForum('')
    }

    GetForum = () => {

        var forumdata = {
            id: this.state.SlotId
        }
        console.log(forumdata, 'forumdata***')
        this.setState({ isLoading: true });
        return (
            actions
                .getForums(forumdata)
                .then(res => {
                    if (__DEV__) { console.log('All Data', res) }
                    if (res.status_code == 200) {
                        this.setState({
                            data: res.forumDetails,
                            //formId: res.forums._id,
                            isLoading: false
                        });
                        console.log(res.forumDetails, '++++forumdatata')

                    } else {
                        showError(res.message)
                        this.setState({ isLoading: false });
                    }
                })
                .catch(this.errorMethod)
        )
    }
    errorMethod = (error) => {
        this.setState({ isLoading: false });
        showError(error.message);
    }


    login = () => {
        //this.userLogin()
        const { userFirstName, userLastName, userPhoneNo } = this.state;

        if (userFirstName || this.state.firstName != '') {

            if (userLastName || this.state.lastName != '') {

                if (userPhoneNo || this.state.phone != '') {

                    this.userLogin();

 
                } else {
                    showError('Please Enter PhoneNumber');
                }
            } else {
                showError('Please Enter Last Name');
            }
        } else {
            showError('Please Enter First Name');
        }
    };
    userLogin() {
        var loginInfo = {
            firstName: this.state.userFirstName,
            lastName: this.state.userLastName,
            phone: this.state.userPhoneNo,
            status: 'booked',
            id: this.state.SlotId

        };
        console.log('loginInfo')
        this.setState({ isLoading: true });
        console.log('loginInfo')

        actions
            .forums(loginInfo)
            .then(res => {
                console.log("redffgfg", res)
                if (res.status_code == 200) {
                    showSuccess(res.message)
                    this.setState({ isLoading: false });
                } else {
                    showError(res.message)
                }
            })
            .catch(this.errorMethod);
    }

    errorMethod = error => {
        this.setState({ isloading: false });
         showError(error.message);
    };


    ModalVisible() {
        this.setState({
            v3Visible: true
        })
    }

    _onLoadError = () => {
        if (Platform.OS == 'android') {
          ToastAndroid.show('Network Fail Error', ToastAndroid.SHORT);
        }
    
        this.setState({
          loadingImage: false
        })
      }

      showCamera() {
        ImagePicker.openCamera({
          // width: 300,
          // height: 400,
          // cropping: true,
        }).then(image => {
          console.log(image, 'cameracoming');
          //this.setState({ selectedImages: image })
    
          var res = image.path.split("/");
          console.log(res, 'response-->')
    
          var img = {
            name: res[res.length - 1],
            type: image.mime,
            uri: image.path
    
          }
          this.setState({
            selectedImage: img,
            selectedImages: image
          })
          console.log(img, 'yesno')
          console.log(image, 'yesnoT')
    
        });
    
      }
    
      showGallery() {
        ImagePicker.openPicker({
          //multiple:true
        }).then(image => {
          console.log(image, 'images-----=-=-=>')
          var res = image.path.split("/");
          console.log(res, 'response---||')
    
          var img = {
            name: res[res.length - 1],
            type: image.mime,
            uri: image.path
          }
          this.setState({
            selectedImage: img,
            selectedImages: image
          })
          console.log(img, 'imgg')
          console.log(image, 'image-->')
        });
      }


    render() {
        const { isloading } = this.state;
        return (
            <View style={{
                flex: 1,


            }}>

                 

                <ImageBackground source={Images.appbackgroundImage} style={{
                    flex: 1,
                    resizeMode: "cover",
                }}>


 




                    <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>


                        <View style={{ alignItems: 'center' }}>

                        </View>
                        <View style={{ margin: 10 }}>
                            <TextInput
                                style={{
                                    height: 50,
                                    // color: 'white',
                                    paddingLeft: 15,
                                    borderColor: 'grey',
                                    borderWidth: 1,
                                    borderRadius: 5
                                }}

                                onChangeText={userFirstName => this.setState({ userFirstName: userFirstName })}
                                //keyboardType="email-address"
                                defaultValue={this.state.data.firstName}
                                 placeholder={'FirstName'}
                                placeholderTextColor={'grey'}
                            //backgroundColor={colors.TEXTBOX_BACKGROUND}
                            />
                        </View>
                        <View
                            style={{ margin: 10 }}
                        >
                            <TextInput
                                style={{
                                    height: 50,
                                    // color: 'white',
                                    paddingLeft: 15,
                                    borderColor: 'grey',
                                    borderWidth: 1,
                                    borderRadius: 5
                                }}
                                onChangeText={userLastName => this.setState({ userLastName: userLastName })}
                                // keyboardType="number"
                                defaultValue={this.state.data.lastName}
                                placeholder={'LastName'}
                                placeholderTextColor={'grey'}
                            //backgroundColor={colors.TEXTBOX_BACKGROUND}
                            />
                        </View>

                        <View
                            style={{ margin:10  }}
                        >
                            <TextInput
                                style={{
                                    height: 50,
                                    // color: 'white',
                                    paddingLeft: 15,
                                    borderColor: 'black',
                                    borderWidth: 1,
                                    borderRadius: 5,
                                    color: 'black'
                                }}
                                onChangeText={userPhoneNo => this.setState({ userPhoneNo: userPhoneNo })}
                                defaultValue={this.state.data.phone}
                                keyboardType="number"
                                placeholder={'PhoneNo'}
                                placeholderTextColor={'grey'}
                            //backgroundColor={colors.TEXTBOX_BACKGROUND}
                            />
                        </View>
                        <Button btnStyle={{ backgroundColor: '#ff5c5c', borderRadius: 5, margin: 10 }} btnText={strings.save}
                            textStyle={styles.loginBtn} onPress={() => { this.login() }}
                        />
                        < Button btnStyle={{ backgroundColor: '#ff5c5c', borderRadius: 5, margin: 10 }} btnText={strings.cancel}
                            textStyle={styles.loginBtn}  onPress={() => this.props.navigation.goBack()}
                        />



                    </View>
                </ImageBackground>
                <Loader loading={isloading} />
            </View>
        )
    }
}

