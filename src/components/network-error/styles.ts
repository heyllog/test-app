import { StyleSheet } from 'react-native'

import { colors } from 'theme/colors'
import { sizes } from 'theme/sizes'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: sizes.blockBorderRadius,
    backgroundColor: colors.error,
    marginBottom: sizes.baseIndent,
  },
  text: {
    marginLeft: 12,
    color: colors.background,
    fontFamily: 'Poppins-SemiBold',
  },
})
