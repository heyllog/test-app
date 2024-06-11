import { Dimensions } from 'react-native'

import { sizes } from 'theme/sizes'

const dimensions = Dimensions.get('window')

export const imageWidth = dimensions.width - sizes.pagePaddingHorizontal * 2
export const imageHeight = imageWidth * 0.7
