import React, { FC, useCallback, useMemo, useState } from 'react'

import { useFocusEffect } from 'expo-router'
import { View } from 'react-native'
import { GraphPoint, LineGraph } from 'react-native-graph'

import { AppText, AppTitle } from 'components/app-text'
import { Button } from 'components/button'
import { LoaderCircle } from 'components/loader-circle'
import { ChartLogs } from 'features/price-chart/components/chart-logs'
import { colors } from 'theme/colors'

import { styles } from './styles'
import { binanceClient } from '../../clients/binance-client'
import { AggTradeMessage, SubscribeHandler } from '../../clients/binance-client/types'

export const Chart: FC = () => {
  const [points, setPoints] = useState<GraphPoint[]>([])
  const [isSocketClosed, setIsSocketClosed] = useState(false)

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

      if (Number.isNaN(value) || Number.isNaN(date)) return

      const point: GraphPoint = {
        date: new Date(data.T),
        value: Number(data.p),
      }

      setPoints((state) => {
        // to limit max amount of points to 60
        if (state.length >= 60) {
          const newPoints = [...state]
          newPoints.shift()
          newPoints.push(point)

          return newPoints
        }

        return [...state, point]
      })
    }
  }, [])

  const handleSocketClosed = useCallback((): void => {
    setIsSocketClosed(true)
    setPoints([])
    binanceClient.unsubscribe()
  }, [])

  useFocusEffect(
    useCallback(() => {
      binanceClient.subscribe(handleMessages, handleSocketClosed, handleSocketClosed)

      return (): void => binanceClient.unsubscribe()
    }, [handleMessages, handleSocketClosed]),
  )

  if (isSocketClosed) {
    return (
      <View style={[styles.container, styles.errorContainer]}>
        <AppTitle style={styles.errorMessage}>Something went wrong, connection lost</AppTitle>
        <Button
          text='Reconnect'
          onPress={() => {
            setPoints([])
            setIsSocketClosed(false)
            binanceClient.subscribe(handleMessages, handleSocketClosed, handleSocketClosed)
          }}
        />
      </View>
    )
  }

  if (points.length < 3) {
    return (
      <View style={styles.loaderContainer}>
        <LoaderCircle />
        <AppText style={styles.loaderText}>Loading chart data...</AppText>
      </View>
    )
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
        animated
      />

      <View style={styles.container}>
        <AppText style={styles.minMax}>{minMax.min} USDT</AppText>

        <ChartLogs points={points} />
      </View>
    </>
  )
}
