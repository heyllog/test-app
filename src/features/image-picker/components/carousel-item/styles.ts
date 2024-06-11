import { StyleSheet } from 'react-native'

import { colors } from 'theme/colors'
import { sizes } from 'theme/sizes'

export const borderWidth = 4

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: sizes.blockPaddingHorizontal,
    paddingVertical: sizes.blockPaddingVertical,
  },
  innerContainer: {
    borderRadius: sizes.blockBorderRadius,
    overflow: 'hidden',
  },
  selected: {
    borderWidth,
    borderStyle: 'solid',
    borderColor: colors.primary,
  },
})
