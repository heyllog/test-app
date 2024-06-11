import { SubscribeHandler } from './types'

const baseUrl = 'wss://stream.binance.com:443/ws/btcusdt'
const stream = 'btcusdt@aggTrade'

export class BinanceClient {
  protected connection: WebSocket | null = null
  protected lastMessageTime: number = 0

  subscribe(handler: SubscribeHandler): void {
    const data = {
      method: 'SUBSCRIBE',
      // params: ['btcusdt@aggTrade'],
      params: [stream],
      id: 1,
    }

    this.connection = new WebSocket(baseUrl)

    this.connection.onopen = (): void => {
      if (this.connection) {
        this.connection.onmessage = (ev): void => {
          // to prevent to many updates
          if (Date.now() - this.lastMessageTime < 1000) return

          this.lastMessageTime = Date.now()
          handler(ev)
        }

        this.connection.send(JSON.stringify(data))
      }
    }
  }

  unsubscribe(): void {
    if (this.connection) {
      this.connection.close()
      this.connection = null
    }
  }
}
