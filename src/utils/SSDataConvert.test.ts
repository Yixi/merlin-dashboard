import { convertSSStatus } from '@root/utils/SSDataConvert'

describe('Test SS data convert functions', () => {
  test('should work correctly with convertSSStatus', () => {
    const str1 = '国外链接 【2020-05-29 12:45:36】 ✓&nbsp;&nbsp;291 ms@@国内链接 【2020-05-29 12:45:36】 ✓&nbsp;&nbsp;119 ms'
    const str2 = '国外链接 【2020-05-29 14:53:08】 <font color=#FF0000>X</font>@@国内链接 【2020-05-29 14:53:08】 ✓&nbsp;&nbsp;163 ms'
    expect(convertSSStatus(str1)).toEqual({
      foreign: {
        ping: 291,
        time: '2020-05-29 12:45:36',
      },
      inland: {
        ping: 119,
        time: '2020-05-29 12:45:36',
      },
    })
    expect(convertSSStatus(str2)).toEqual({
      foreign: {
        ping: null,
        time: '2020-05-29 14:53:08',
      },
      inland: {
        ping: 163,
        time: '2020-05-29 14:53:08',
      },
    })
  })
})
