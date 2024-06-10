import { StyleSheet } from 'react-native'

import { colors } from 'theme/colors'
import { sizes } from 'theme/sizes'

export const styles = StyleSheet.create({
  block: {
    backgroundColor: colors.block,
    borderColor: colors.text,
    borderStyle: 'solid',
    borderRadius: sizes.blockBorderRadius,
    paddingVertical: sizes.blockPaddingVertical,
    paddingHorizontal: sizes.blockPaddingHorizontal,
  },
})
