import { StyleSheet } from 'react-native'

import { colors } from 'theme/colors'
import { sizes } from 'theme/sizes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingVertical: sizes.pagePaddingVertical,
    paddingHorizontal: sizes.pagePaddingHorizontal,
  },
})
