declare global {
  interface Window {
    GlobalData: any
  }
}

export const generateProcessId = () => {
  return parseInt(`${Math.random() * 100000000}`, 10)
}

export const getGlobalData = () => {
  return window.GlobalData || {}
}
