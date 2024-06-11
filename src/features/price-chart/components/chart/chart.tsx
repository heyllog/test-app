import React, { FC, useCallback, useMemo, useState } from 'react'

import { useFocusEffect } from 'expo-router'
import { View } from 'react-native'
import { GraphPoint, LineGraph } from 'react-native-graph'

import { AppText, AppTitle } from 'components/app-text'
import { colors } from 'theme/colors'
import { sizes } from 'theme/sizes'

import { styles } from './styles'
import { formatDate } from './utils'
import { binanceClient } from '../../clients/binance-client'
import { AggTradeMessage, SubscribeHandler } from '../../clients/binance-client/types'

export const Chart: FC = () => {
  const [points, setPoints] = useState<GraphPoint[]>([])

  const minMax = useMemo(
    () => ({
      min: points.length ? Math.min(...points.map((item) => item.value)) : 0,
      max: points.length ? Math.max(...points.map((item) => item.value)) : 0,
    }),
    [points],
  )

  const handleMessages: SubscribeHandler = useCallback((e) => {
    const data = JSON.parse(e.data) as AggTradeMessage

    if (data.T && data.p) {
      const value = Number(data.p)
      const date = new Date(data.T)

      console.log(date.toISOString())

      if (Number.isNaN(value) || Number.isNaN(date)) return

      const point: GraphPoint = {
        date: new Date(data.T),
        value: Number(data.p),
      }

      setPoints((state) => {
        // to limit max amount of points to 120
        if (state.length >= 120) {
          const newPoints = [...state]
          newPoints.shift()
          newPoints.push(point)

          return newPoints
        }

        return [...state, point]
      })
    }
  }, [])

  useFocusEffect(
    useCallback(() => {
      setPoints([])
      binanceClient.subscribe(handleMessages)

      return (): void => {
        binanceClient.unsubscribe()
      }
    }, [handleMessages]),
  )

  if (points.length < 2) {
    return <AppText style={styles.container}>Loading...</AppText>
  }

  return (
    <>
      <View style={styles.container}>
        <AppTitle>BTC price: {points[points.length - 1]?.value || ''} USDT</AppTitle>

        <AppText style={styles.minMax}>{minMax.max} USDT</AppText>
      </View>

      <LineGraph
        style={{ width: '100%', aspectRatio: 1 }}
        points={points}
        color={colors.primary}
        gradientFillColors={[`${colors.primary}3d`, `${colors.primary}00`]}
        verticalPadding={sizes.baseIndent}
        animated
      />

      <View style={styles.container}>
        <AppText style={styles.minMax}>{minMax.min} USDT</AppText>

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
      </View>
    </>
  )
}
