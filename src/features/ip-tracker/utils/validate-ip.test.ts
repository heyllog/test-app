import { validateIpV4 } from './validate-ip'

describe('validateIpV4', () => {
  it('validates correct IPv4 addresses', () => {
    expect(validateIpV4('192.168.1.1')).toBe(true)
    expect(validateIpV4('255.255.255.255')).toBe(true)
    expect(validateIpV4('0.0.0.0')).toBe(true)
    expect(validateIpV4('127.0.0.1')).toBe(true)
  })

  it('invalidates incorrect IPv4 addresses', () => {
    expect(validateIpV4('256.256.256.256')).toBe(false)
    expect(validateIpV4('192.168.1.1.1')).toBe(false)
    expect(validateIpV4('192.168.1')).toBe(false)
    expect(validateIpV4('abc.def.ghi.jkl')).toBe(false)
    expect(validateIpV4('123.456.789.0')).toBe(false)
    expect(validateIpV4('123')).toBe(false)

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(validateIpV4(undefined)).toBe(false)
  })
})
