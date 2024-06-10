import { StyleSheet } from 'react-native'

import { colors } from 'theme/colors'

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    height: 180,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: colors.text,
    opacity: 0.1,
    borderRadius: 20,
  },
  fieldContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fieldTitle: {
    opacity: 0.5,
  },
  messageBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMessage: {
    textAlign: 'center',
    color: colors.error,
  },
})
