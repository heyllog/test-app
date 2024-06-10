import { StyleSheet } from 'react-native'

import { colors } from 'theme/colors'
import { fonts } from 'theme/fonts'
import { sizes } from 'theme/sizes'

export const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.block,
    borderColor: colors.text,
    borderStyle: 'solid',
    borderRadius: sizes.blockBorderRadius,
    paddingVertical: sizes.blockPaddingVertical,
    paddingHorizontal: sizes.blockPaddingHorizontal,
    color: colors.text,
    fontFamily: fonts.textFontFamily,
    fontSize: fonts.textFontSize,
  },
})
