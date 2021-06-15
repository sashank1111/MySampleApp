import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, SafeAreaView, ScrollView, Pressable, Alert } from 'react-native';
import styles from './ForumScreenStyle';
import { colors } from '../../styles/colors';
import { showSuccess, showError } from '../../utils/helperFunctions';
import { Images } from '../../constants/ImagesPath';
import { Button } from '../../components/molecules/Button';
import strings from '../../constants/LocalizedStrings'
import actions from '../../redux/actions';
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Loader from '../../utils/loader';
import { spacing } from '../../styles/spacing';
import ImagePicker from 'react-native-image-crop-picker';
import Modalbox from 'react-native-modalbox'

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
            data: '',
            fileName: '',
            fileType: '',

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
        console.log('hihihihih')
        ImagePicker.openCamera({
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
        console.log('hahahaahahah')
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
            <SafeAreaView style={{ flex: 1 }}>

                <Modalbox isOpen={this.state.v3Visible} style={styles.modalBoxView}
                    backdropPressToClose={false}
                >
                    <View style={{ height: 250, width: "100%", justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => { this.showGallery() }} >
                            <Text style={{ fontSize: 20, color: 'blue', fontWeight: "500" }}>Choose From Gallery</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.showCamera() }}>
                            <Text style={{ fontSize: 20, color: 'blue', fontWeight: "500" }}>Open Camera</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({
                                    v3Visible: false,
                                })
                            }}
                        >
                            <Text style={{ fontSize: 17, fontWeight: "500", color: 'black' }}>
                                Cancel
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Modalbox>



                <ImageBackground source={Images.appbackgroundImage} style={{
                    flex: 1,
                    resizeMode: "cover",
                }}>

                    {this.state.avatarSource == null ?
                        (<View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', marginTop: 20 }}>
                            {this.state.selectedImages.path == null ?
                                <Image source={Images.profile_img} style={[styles.profileImage]} />
                                :
                                <Image source={{ uri: this.state.selectedImages.path }}
                                    style={[styles.profilesImage]} />

                            }

                             <View style={{ justifyContent: 'flex-end', marginBottom: 10, right: 40 }}>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    onPress={() => this.ModalVisible()}
                                     style={styles.touchViewModal}
                                    >
                                    <Image style={{ width: 30, height: 30, tintColor: colors.BLACK, backgroundColor: '#ff5c5c' }}
                                        source={Images.cameraIcon} />
                                </TouchableOpacity>
                            </View>
                        </View>)
                        :
                        (
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', bottom: 10 }}>
                                <Image source={this.state.avatarSource}
                                    style={{
                                        height: 140,
                                        width: 140,
                                        borderRadius: 140 / 2,
                                    }}

                                    onError={this._onLoadError}
                                />
                                <View style={{ justifyContent: 'flex-end', marginBottom: 10, right: 40 }}>

                                </View>
                            </View>
                        )}

                    <View style={styles.textInputMainView}>
                        <View style={{ alignItems: 'center' }}>
                        </View>
                        <View style={styles.textInputView}>
                            <TextInput
                                style={styles.textInput}
                                onChangeText={userFirstName => this.setState({ userFirstName: userFirstName })}
                                defaultValue={this.state.data.firstName}
                                placeholder={'FirstName'}
                                placeholderTextColor={'grey'}
                            />
                        </View>
                        <View style={styles.textInputView}>
                            <TextInput
                                style={styles.textInput}
                                onChangeText={userLastName => this.setState({ userLastName: userLastName })}
                                defaultValue={this.state.data.lastName}
                                placeholder={'LastName'}
                                placeholderTextColor={'grey'}
                            />
                        </View>

                        <View style={styles.textInputView}>
                            <TextInput
                                style={styles.textInput}
                                onChangeText={userPhoneNo => this.setState({ userPhoneNo: userPhoneNo })}
                                defaultValue={this.state.data.phone}
                                keyboardType="number"
                                placeholder={'PhoneNo'}
                                placeholderTextColor={'grey'}
                            />
                        </View>
                        <Button btnStyle={styles.buttonStyle} btnText={strings.save}
                            textStyle={styles.loginBtn} onPress={() => { this.login() }}
                        />
                        < Button btnStyle={styles.buttonStyle} btnText={strings.cancel}
                            textStyle={styles.loginBtn} onPress={() => this.props.navigation.goBack()}
                        />

                    </View>
                </ImageBackground>
                <Loader loading={isloading} />
            </SafeAreaView>
        )
    }
}

