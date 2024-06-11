import React, { FC } from 'react'

import { View } from 'react-native'
import { GraphPoint } from 'react-native-graph'

import { AppText } from 'components/app-text'

import { styles } from './styles'
import { formatDate } from './utils'

interface Props {
  points: GraphPoint[]
}

export const ChartLogs: FC<Props> = ({ points }) => {
  return (
    <View style={styles.logs}>
      {points
        .slice(0)
        .reverse()
        .slice(0, 10)
        .map(({ date, value }) => (
          <AppText key={date.toISOString()}>
            At {formatDate(date)} BTC price was {value} USDT
          </AppText>
        ))}
    </View>
  )
}
