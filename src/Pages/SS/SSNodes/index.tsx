import * as React from 'react'
import { convertSSType, ISSNode } from '@root/utils/SSDataConvert'
import './index.scss'
import { CheckCircleFilled, MinusCircleFilled } from '@ant-design/icons'
import { httpRequest } from '@root/hooks/useRequest'
import { generateProcessId } from '@root/utils/tools'
import Spin from '@root/components/Spin'
import { forEach, isNumber, chunk } from 'lodash'
import cls from 'classnames'


const SSNodes: React.FC<{ nodes: ISSNode[] }> = (props) => {

  const [ping, setPing] = React.useState<{ [key: string]: string[] }>({})

  React.useEffect(() => {
    httpRequest.post('/_api/', {
      id: generateProcessId(), method: 'ss_ping.sh', params: [], fields: '',
    }).then(res => {
      const result = res.data.result
      if (result.length > 2) {
        const _p = JSON.parse(window.atob(result))
        const pingObj: any = {}
        forEach(_p, (value) => {
          pingObj[value[0]] = [value[1], value[2]]
        })
        setPing(pingObj)
      }
    })
  }, [])

  return (
    <div className="SSNodes">
      {chunk(props.nodes, 2).map((nodes, index) => (
        <div key={index} className="SSNodes_row">
          {nodes.map(node => (
            <SSNode node={node} key={node.key} ping={ping[node.key]}/>
          ))}
        </div>
      ))}
    </div>
  )
}

const SSNode: React.FC<{ node: ISSNode, ping: string[] }> = (props) => {

  let ping: number | string
  let color: string
  let lost: string
  let isFailed = false

  if (props.ping) {
    if (props.ping[0]) {
      ping = parseInt(props.ping[0], 10)
    } else {
      ping = 'Failed'
      isFailed = true
    }
    if (ping <= 50) {
      color = '#1bbf35'
    } else if (ping > 50 && ping <= 100) {
      color = '#3399FF'
    } else if (ping > 100) {
      color = '#f36c21'
    } else {
      color = '#92526a'
    }
    lost = props.ping[1]
  }

  return (
    <div className={cls('SSNodes_node', {failed: isFailed}, {select: props.node.isSelected})}>
      <span>{props.node.isSelected ? <CheckCircleFilled/> : <MinusCircleFilled/>}</span>
      <span><span className="tag">{convertSSType(props.node.type)}</span></span>
      <span className="name">{props.node.name}</span>
      <span>
        {props.ping ? (
          <span style={{color}}>
            <span>{isNumber(ping) ? `${ping} ms` : ping}</span>
            {!isFailed && <span>{lost}</span>}
          </span>
        ) : <Spin/>}
      </span>
    </div>
  )
}


export default SSNodes
