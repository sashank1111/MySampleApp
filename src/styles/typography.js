import { moderateScale } from 'react-native-size-matters';
// import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { textScale } from './responsiveStyles';


export const fontNames = {
    regularFont: "Poppins-Regular",
    boldFont: "Poppins-Bold",
    extraBold: "Poppins-ExtraBold",
    semiBold: "Poppins-SemiBold",
    semiBoldItalic: "Poppins-SemiBoldItalic",

}

export const typography = {
    FONT_SIZE_32: textScale(32),
    FONT_SIZE_24: textScale(24),
    FONT_SIZE_22: textScale(22),
    FONT_SIZE_20: textScale(20),
    FONT_SIZE_18: textScale(18),
    FONT_SIZE_16: textScale(16),
    FONT_SIZE_15: textScale(15),
    FONT_SIZE_14: textScale(14),
    FONT_SIZE_12: textScale(12),
    FONT_SIZE_10: textScale(10),
    FONT_SIZE_8: textScale(8),
    FONT_SIZE_6: textScale(6),
    FONT_SIZE_5: textScale(5),


    LINE_HEIGHT_14: moderateScale(14),
    LINE_HEIGHT_16: moderateScale(16),
    LINE_HEIGHT_18: moderateScale(18),
    LINE_HEIGHT_20: moderateScale(20),
    LINE_HEIGHT_22: moderateScale(22),
    LINE_HEIGHT_24: moderateScale(24),
    LINE_HEIGHT_28: moderateScale(28),
    LINE_HEIGHT_30: moderateScale(30),
    LINE_HEIGHT_32: moderateScale(32),
    LINE_HEIGHT_40: moderateScale(40),
}
