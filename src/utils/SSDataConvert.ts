import { keys, startsWith, range } from 'lodash'

export interface ISSConfig {
  current?: ISSCurrent
  nodes?: ISSNode[]
}

export interface ISSCurrent {
  ssEnable: boolean,
  currentKey: string
}

export interface ISSNode {
  name: string,
  server: string,
  type: number,
  key: string,
  isSelected: boolean
}

export const convertSSType = (type: number) => {
  switch (type) {
    case 0:
      return 'ss'
    case 1:
      return 'ssr'
    case 2:
      return 'koolgame'
    case 3:
      return 'v2ray'
  }
}

export const convertSSConfig = (ssConfig: any) => {
  const result = ssConfig.result[0]
  const data: ISSConfig = {}
  data.current = {
    ssEnable: !!result.ss_basic_enable,
    currentKey: result.ssconf_basic_node,
  }
  data.nodes = generateNodeInfo(result)
  return data
}

const generateNodeInfo = (ssConfig: any) => {

  const getType = (index: number) => {
    if (ssConfig[`ssconf_basic_rss_protocol_${index}`]) {
      return 1
    }
    if (ssConfig[`ssconf_basic_koolgame_udp_${index}`]) {
      return 2
    }
    if (ssConfig[`ssconf_basic_v2ray_use_json_${index}`]) {
      return 3
    }
    return 0
  }

  const nodes: ISSNode[] = []
  const namesKey = keys(ssConfig).filter(key => startsWith(key, 'ssconf_basic_name_'))
  range(1, namesKey.length + 1).forEach((key) => {
    nodes.push({
      name: ssConfig[`ssconf_basic_name_${key}`],
      server: ssConfig[`ssconf_basic_server_${key}`],
      type: getType(key),
      key: `${key}`,
      isSelected: ssConfig.ssconf_basic_node === `${key}`,
    })
  })
  return nodes
}

