import * as React from 'react'
import { last, drop } from 'lodash'
import './index.scss'
import { httpRequest } from '@root/hooks/useRequest'
import { generateProcessId } from '@root/utils/tools'
import { convertSSStatus } from '@root/utils/SSDataConvert'
import { Sparklines, SparklinesBars } from 'react-sparklines'
import Spin from '@root/components/Spin'

export default function SSStatus() {

  const [foreignPings, setForeignPings] = React.useState<number[]>([])
  const [inlandPings, setInlandPings] = React.useState<number[]>([])


  React.useEffect(() => {

    const timer = setInterval(() => {
      httpRequest.post('/_api/', {
        id: generateProcessId(), method: 'ss_status.sh', pparams: [], fields: '',
      }).then(res => {
        const result = convertSSStatus(res.data.result)
        setForeignPings(prevState => {
          let newState = prevState.concat([result.foreign.ping || 1000])
          if (newState.length > 100) {
            newState = drop(newState, 50)
          }
          return newState
        })
        setInlandPings(prevState => {
          let newState = prevState.concat([result.inland.ping || 1000])
          if (newState.length > 100) {
            newState = drop(newState, 50)
          }
          return newState
        })
      })
    }, 5 * 1000)

    return () => {
      clearInterval(timer)
    }

  }, [])

  return (
    <div className="SSStatus">
      <div className="section">
        <div>
          <div>国外链接</div>
          <div>{foreignPings.length > 0 ? `${last(foreignPings)} ms` : <Spin/>}</div>
        </div>
        <div>
          <Sparklines data={foreignPings} limit={25} max={1000}>
            <SparklinesBars style={{fill: '#0ec2cd'}}/>
          </Sparklines>
        </div>
      </div>
      <div className="section">
        <div>
          <div>国内链接</div>
          <div>{inlandPings.length > 0 ? `${last(inlandPings)} ms` : <Spin/>}</div>
        </div>
        <div>
          <Sparklines data={inlandPings} limit={25} max={1000}>
            <SparklinesBars style={{fill: '#0ec2cd'}}/>
          </Sparklines>
        </div>
      </div>
    </div>
  )
}
