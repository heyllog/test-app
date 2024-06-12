import { StyleSheet } from 'react-native'

import { colors } from 'theme/colors'
import {sizes} from "theme/sizes";

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
  reloadButton: {
    marginTop: 10,
    backgroundColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: sizes.blockBorderRadius,
  },
  reloadButtonText: {
    color: colors.background,
  },
})
