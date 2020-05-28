import * as React from 'react'
import Menu from '@root/components/Menu'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import 'antd/dist/antd.css'
import './App.scss'
import SS from '@root/Pages/SS'
import Dashboard from '@root/Pages/Dashboard'

function App() {
  return (
    <Router>
      <div className="App">
        <Menu/>
        <div className="App_content">
          <Switch>
            <Route path="/ss">
              <SS/>
            </Route>
            <Route path="/dashboard">
              <Dashboard/>
            </Route>
            <Redirect from="/" to="/dashboard" />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
