import { StyleSheet } from 'react-native'

import { colors } from 'theme/colors'
import { fonts } from 'theme/fonts'
import { sizes } from 'theme/sizes'

export const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.textFontFamily,
    fontSize: fonts.textFontSize,
    color: colors.text,
  },
  title: {
    fontSize: fonts.titleFontSize,
    fontFamily: fonts.titleFontFamily,
    marginBottom: sizes.baseIndent,
  },
})
