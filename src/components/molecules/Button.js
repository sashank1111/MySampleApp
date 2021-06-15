
import React from 'react';
import {
    Text,
    TouchableOpacity,
    Image,
    View,
    StyleSheet
} from 'react-native';

import { spacing } from '../../styles/spacing';
import { fontNames, typography } from '../../styles/typography';
import { colors } from '../../styles/colors';
export const Button = ({
    onPress,
    buttonIcon,
    btnRightIcon,
    btnStyle = {},
    btnText = "",
    textStyle = {}
}) => {
    return (
        <TouchableOpacity
            style={{
                ...styles.touchableButton,
                ...btnStyle
            }}
            activeOpacity={0.8}
            onPress={onPress}
        >
            {buttonIcon ? <Image style={{ height: 25, width: 25, marginLeft: spacing.MARGIN_20 }} source={buttonIcon} /> : <View />}

            <Text style={{ ...styles.textStyle, ...textStyle }}>{btnText}</Text>
            {btnRightIcon ? <Image source={btnRightIcon} /> : <View />}
        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    touchableButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: spacing.BUTTON_HEIGHT,
        backgroundColor: colors.LOGINBUTTON,
        // marginBottom:5,
        alignItems: "center",
        borderRadius: spacing.RADIUS_50,
        paddingHorizontal: spacing.PADDING_16
    },

    textStyle: {
        fontFamily: fontNames.semiBold,
        color: colors.WHITE,
        fontSize: typography.FONT_SIZE_14,
        //textAlign: "center",

    },
})

