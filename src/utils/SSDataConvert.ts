import { keys, startsWith, range } from 'lodash'

export interface ISSConfig {
  current?: ISSCurrent
  nodes?: ISSNode[],
  subscription?: ISSSubscription
}

export interface ISSCurrent {
  ssEnable: boolean,
  currentKey: string,
  name: string,
  mode: string
}

export interface ISSNode {
  name: string,
  server: string,
  type: number,
  key: string,
  isSelected: boolean
}

export interface ISSSubscription {
  link: string
}

export const convertSSConfig = (ssConfig: any) => {
  const result = ssConfig.result[0]
  const data: ISSConfig = {}
  data.current = generateCurrentInfo(result)
  data.nodes = generateNodeInfo(result)
  data.subscription = generateSubscriptionInfo(result)
  return data
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

const generateCurrentInfo = (ssConfig: any) => {
  // const namesKey = keys(ssConfig).filter(key => startsWith(key, 'ssconf_basic_') && endsWith(key, ssConfig.ssconf_basic_node))
  // console.log(namesKey)
  const currentKey = ssConfig.ssconf_basic_node
  return {
    ssEnable: !!ssConfig.ss_basic_enable,
    currentKey,
    name: ssConfig[`ssconf_basic_name_${currentKey}`],
    mode: ssConfig[`ssconf_basic_mode_${currentKey}`],
  }
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

const generateSubscriptionInfo = (ssConfig: any) => {
  return {
    link: window.atob(ssConfig.ss_online_links),
  }
}

export const convertSSStatus = (statusString: string) => {
  const status = statusString.split('@@')
  const foreignTimeMatch = status[0].match(/【(.*?)】/i)
  const foreignPingMatch = status[0].match(/(\d+)\sms/i)
  const inlandTimeMatch = status[1].match(/【(.*?)】/i)
  const inlandPingMatch = status[1].match(/(\d+)\sms/i)

  return {
    foreign: {
      time: foreignTimeMatch ? foreignTimeMatch[1] : null,
      ping: foreignPingMatch ? +foreignPingMatch[1] : null,
    },
    inland: {
      time: inlandTimeMatch ? inlandTimeMatch[1] : null,
      ping: inlandPingMatch ? +inlandPingMatch[1] : null,
    },
  }
}

