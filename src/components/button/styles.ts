import { StyleSheet } from 'react-native'

import { colors } from 'theme/colors'
import { fonts } from 'theme/fonts'
import { sizes } from 'theme/sizes'

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: sizes.blockBorderRadius,
    paddingVertical: sizes.blockPaddingVertical,
    paddingHorizontal: sizes.blockPaddingHorizontal * 2,
  },
  text: {
    textAlign: 'center',
    color: colors.background,
    fontFamily: fonts.titleFontFamily,
  },
})
