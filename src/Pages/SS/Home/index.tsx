import * as React from 'react'
import SSStatus from '@root/Pages/SS/Status'
import SSCurrent from '@root/Pages/SS/Current'
import SSNodes from '@root/Pages/SS/SSNodes'
import { ISSConfig } from '@root/utils/SSDataConvert'
import './index.scss'

const SSHome: React.FC<{config: ISSConfig}> = (props) => {
  return (
    <div className="SSHome">
      <div className="SSHome_header">
        <SSStatus />
        <SSCurrent current={props.config.current}/>
      </div>
      <SSNodes nodes={props.config.nodes}/>
    </div>
  )
}

export default SSHome
