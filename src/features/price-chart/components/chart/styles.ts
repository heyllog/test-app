import { StyleSheet } from 'react-native'

import { sizes } from 'theme/sizes'

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: sizes.pagePaddingHorizontal,
  },
  minMax: {
    textAlign: 'right',
    opacity: 0.3,
  },
  logs: {
    marginTop: sizes.baseIndent,
    marginBottom: sizes.baseIndent,
  },
})
