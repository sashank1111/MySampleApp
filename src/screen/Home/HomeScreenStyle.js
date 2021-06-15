import { ScaledSheet } from 'react-native-size-matters';
import { spacing } from '../../styles/spacing';

const styles = ScaledSheet.create({
    // inputLabelStyle: {
        flatliststyle:{
            marginTop: 40
        },
        slotView:{
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            margin: spacing.MARGIN_12, 
            padding: spacing.PADDING_10, 
            borderWidth: 2, 
            borderColor: 'black', 
            backgroundColor: '#ADD8E6',
            height:spacing.HEIGHT_74
        },
        freeView:{
            backgroundColor: 'green', 
             height: spacing.HEIGHT_45, 
             width: spacing.WIDTH_55,
             flexDirection:'row'
        },
        textFreeSlot:{
            color: 'white', 
            marginLeft: spacing.MARGIN_14, 
            // flexDirection: 'row' 
        },
        bookedSlot:{
            color: 'white', 
            padding: 5
        },
        bookedView:{
            backgroundColor: 'red', 
            height: spacing.HEIGHT_35, 
            width: spacing.WIDTH_55
        },
        textMainViews:{
            justifyContent:'center',
            alignItems:'center',
            marginTop:20
        },
        slotTimeText:{
            color:'black',
            fontWeight:'700',
            fontSize:20
        }

});

export default styles