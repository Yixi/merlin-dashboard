import * as React from 'react'
import './index.scss'
import { Switch } from 'antd'
import { ISSCurrent } from '@root/utils/SSDataConvert'

const SSCurrent: React.FC<{ current: ISSCurrent }> = (props) => {
  return (
    <div className="SSCurrent">
      <Switch defaultChecked={props.current.ssEnable}/>
    </div>
  )
}

export default SSCurrent
