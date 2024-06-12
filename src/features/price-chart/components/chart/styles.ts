import { StyleSheet } from 'react-native'

import { sizes } from 'theme/sizes'

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: sizes.pagePaddingHorizontal,
  },
  loaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 64,
  },
  loaderText: {
    marginTop: sizes.baseIndent,
    opacity: 0.5,
  },
  errorContainer: {
    marginTop: 64,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorMessage: {
    textAlign: 'center',
  },
  minMax: {
    textAlign: 'right',
    opacity: 0.3,
  },
})
