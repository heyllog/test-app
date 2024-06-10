import { StyleSheet } from 'react-native'

import { colors } from 'theme/colors'
import { sizes } from 'theme/sizes'

export const styles = StyleSheet.create({
  button: {
    maxWidth: '100%',
    textAlign: 'center',
    backgroundColor: colors.primary,
    borderRadius: sizes.blockBorderRadius,
    paddingVertical: sizes.blockPaddingVertical,
    paddingHorizontal: sizes.blockPaddingHorizontal * 2,
  },
  text: {
    color: colors.background,
    fontWeight: 'bold',
  },
})
