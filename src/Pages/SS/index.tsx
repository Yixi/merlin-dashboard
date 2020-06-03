import * as React from 'react'
import useRequest from '@root/hooks/useRequest'
import { convertSSConfig, ISSConfig } from '@root/utils/SSDataConvert'
import { Switch, Route } from 'react-router-dom'
import SSHome from '@root/Pages/SS/Home'
import SSSubscription from '@root/Pages/SS/Sub'

export default function SS() {

  const [config, setConfig] = React.useState<ISSConfig>(null)

  const {data} = useRequest({url: '/_api/ss'})

  React.useEffect(() => {
    if (data) {
      setConfig(convertSSConfig(data))
    }
  }, [data])

  if (config) {
    console.log(config)
    return (
      <Switch>
        <Route path="/ss/home"><SSHome config={config}/></Route>
        <Route path="/ss/sub"><SSSubscription config={config.subscription}/></Route>
      </Switch>
    )
  }

  return null
}
