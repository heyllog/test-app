import { StyleSheet } from 'react-native'

import { sizes } from 'theme/sizes'

export const styles = StyleSheet.create({
  container: {
    borderRadius: sizes.blockBorderRadius,
    overflow: 'hidden',
    resizeMode: 'cover',
  },
})
