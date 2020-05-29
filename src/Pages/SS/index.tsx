import * as React from 'react'
import useRequest from '@root/hooks/useRequest'
import { convertSSConfig, ISSConfig } from '@root/utils/SSDataConvert'
import SSCurrent from '@root/Pages/SS/Current'
import SSNodes from '@root/Pages/SS/SSNodes'
import SSStatus from '@root/Pages/SS/Status'
import './index.scss'

export default function SS() {

  const [config, setConfig] = React.useState<ISSConfig>(null)

  const {data} = useRequest({url: '/_api/ss'})

  React.useEffect(() => {
    if (data) {
      setConfig(convertSSConfig(data))
    }
  }, [data])

  if (config) {
    return (
      <div className="SS">
        <div className="SS_header">
          <SSStatus />
          <SSCurrent current={config.current}/>
        </div>
        <SSNodes nodes={config.nodes}/>
      </div>
    )
  }

  return null
}
