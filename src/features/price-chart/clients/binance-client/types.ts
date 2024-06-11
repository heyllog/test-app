// https://developers.binance.com/docs/binance-spot-api-docs/web-socket-streams#aggregate-trade-streams
export interface AggTradeMessage {
  e: string // Event type
  E: number // Event time
  s: string // Symbol
  a: number // Aggregate trade ID
  p: string // Price
  q: string // Quantity
  f: number // First trade ID
  l: number // Last trade ID
  T: number // Trade time
  m: boolean // Is the buyer the market maker?
  M: boolean // Ignore
}

export type MiniTickerMessage = AggTradeMessage[]

export type SubscribeHandler = (e: MessageEvent<string>) => void
