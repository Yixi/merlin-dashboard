import * as React from 'react'
import './index.scss'
import { Switch } from 'antd'
import { ISSCurrent } from '@root/utils/SSDataConvert'

const SSCurrent: React.FC<{ current: ISSCurrent }> = (props) => {
  return (
    <div className="SSCurrent card">
      <div>当前节点</div>
      <Switch defaultChecked={props.current.ssEnable}/>
      <div>{props.current.name}</div>
    </div>
  )
}

export default SSCurrent
