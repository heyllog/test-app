export const validateIpV4 = (ip: string): boolean => {
  const regex = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/

  return regex.test(ip)
}
