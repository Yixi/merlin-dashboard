export const generateProcessId = () => {
  return parseInt(`${Math.random() * 100000000}`, 10)
}
