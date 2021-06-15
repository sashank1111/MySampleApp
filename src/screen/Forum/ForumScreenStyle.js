import { ScaledSheet } from 'react-native-size-matters';
import { spacing } from '../../styles/spacing';
import { colors } from '../../styles/colors';


const styles = ScaledSheet.create({

    itemSeparatorStyle: {
         height: 10,
        width: "95%",
        alignSelf: 'center',
        backgroundColor: 'black',

    },
    
    SignUp: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',

    },
    SignUpView: {
        backgroundColor: '#1338BE',
        height: 50,
        width: 50


    },
    Save: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    SaveView: {
        color: '#1338BE',
        height: 30,
        width: 30
    },
    loginBtn: {
        color: 'white',
        padding: 10,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'

    },
    profileImage: {
        backgroundColor: colors.TRANSPARENT,
        borderRadius: 75,
        height: 150,
        width: 150,
        justifyContent: "center",
        alignItems: "center",
        marginTop: -10,
        borderWidth: 2,
 

    }
    ,
    profilesImage: {
        padding: 20,
        backgroundColor: colors.TRANSPARENT,
        borderRadius: 75,
        height: spacing.HEIGHT_150,
        width: spacing.WIDTH_150,
        justifyContent: "center",
        alignItems: "center",
        marginTop: -10,
        borderWidth: 2,
 
    },
    textInput: {
        height: spacing.HEIGHT_50,
        paddingLeft: 15,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5
    },
    buttonStyle: {
        backgroundColor: '#ff5c5c',
        borderRadius: 5,
        margin: 10
    },
    textInputView: {
        margin: 10
    },
    textInputMainView: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    modalBoxView: {
        backgroundColor: 'white',
        width: '75%',
        maxHeight: 230
    },
    touchViewModal: {
        overflow: 'hidden',
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginTop: 20
    }






});

export default styles