import { ScaledSheet } from 'react-native-size-matters';
import { spacing } from '../../styles/spacing';


const styles = ScaledSheet.create({
    abuseTalkText: {
        fontWeight: '500',
        fontSize: 20,
        color: '#3FBA56',
    },
    itemSeparatorStyle: {
        // height: 1,
        height: 10,
        width: "95%",
        alignSelf: 'center',
        backgroundColor: 'black',

    },
    listMainView: {
        //     borderWidth: 1,
        borderRadius: 5,
        //  borderColor: '#ddd',
        borderColor: '#000',
        borderWidth: 1,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 1 },
        // shadowOpacity: 0.2,
        // shadowRadius: 1,
        // elevation: 1,
        marginTop: 10,
        padding: 10

    },
    listTitle: {
        color: '#ff5c5c',
        fontSize: 16,
        fontWeight: '400',
    },
    subText: {
        borderWidth: 0,
        color: 'grey',
        fontSize: 12,
        marginTop: 10,
    },
    formLinkView: {
        marginTop: 10,
        // borderTopColor:'#ddd',
        // borderTopWidth:1,
        flexDirection: 'row'
    },
    subformLinkView: {
        marginTop: 10,
        // borderTopColor:'#ddd',
        // borderTopWidth:1,
        flexDirection: 'row'
    },
    formLinkText: {
        color: '#ff5c5c',
        fontSize: 16,
        fontWeight: '400',
    },
    subformText: {
        marginTop: 10,
        color: 'grey',
        fontSize: 16,
        fontWeight: '400',
    },
    questionText: {
        marginTop: 10,
        color: '#ff5c5c',
        fontSize: 16,
        fontWeight: '300'
    },
    recentTopicsText: {
        marginTop: 10,
        color: '#3FBA56',
        fontSize: 16,
        fontWeight: '400'
    },
    topicsText: {
        marginTop: 10,
        color: 'grey',
        fontSize: 16,
        fontWeight: '400'
    },
    abuseTalkBy: {

        color: '#ff5c5c',
        fontSize: 12,
        padding: 5,

    },
    posts: {
        fontWeight: '500',
        fontSize: 12,
        color: 'grey',
        padding: 5,

    },
    logoutIcon: {
        height: spacing.MARGIN_20,
        width: spacing.MARGIN_20,
    },
    forumIconstyle: {
        height: spacing.HEIGHT_30,
        width: spacing.WIDTH_30,
        resizeMode: 'contain' 
    },
    SignUp:{
        color:'white',
        fontSize:16,
        fontWeight:'bold',
         
    },
    SignUpView:{
        backgroundColor:'#1338BE',
        height:50,
        width:50
         
        
    },
    Save:{
        color:'white',
        fontSize:16,
        fontWeight:'bold',
     },
    SaveView:{
         color:'#1338BE',
         height:30,
         width:30
    },
    loginBtn:{
        color:'white',
        padding:10,
        fontSize:16,
        fontWeight:'bold',
        textAlign:'center'
       
     },
     profileImage:{
             // padding: 20,
             //backgroundColor: colors.TRANSPARENT,
             borderRadius: 75,
             height: 150,
             width: 150,
             justifyContent: "center",
             alignItems: "center",
             marginTop: -10,
             borderWidth: 2,
             //borderColor: "#94b6d3"
         
           
     }






});

export default styles