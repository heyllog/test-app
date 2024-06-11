import { StyleSheet } from 'react-native'

import { colors } from 'theme/colors'

export const styles = StyleSheet.create({
  container: {
    marginBottom: 40,
  },
  carousel: {
    gap: 20,
  },
  pagination: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dot: {
    color: colors.text,
    opacity: 0.3,
    fontSize: 50,
  },
  activeDot: {
    color: colors.primary,
    fontSize: 50,
  },
})
