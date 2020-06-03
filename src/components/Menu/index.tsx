import * as React from 'react'
import { NavLink } from 'react-router-dom'
import { DashboardFilled, ThunderboltFilled, AppstoreFilled, GoldFilled } from '@ant-design/icons'
import './index.scss'
import { getGlobalData } from '@root/utils/tools'

export default function Menu() {
  return (
    <div className="Menu">
      <div className="Menu_header">
        <img src="/images/merlin-logo.png" alt=""/> {getGlobalData().model}
      </div>
      <div className="Menu_info"/>
      <div className="Menu_items">
        <div className="title">一般设置</div>
        <div><NavLink to="/dashboard"><DashboardFilled/><span> Dashboard</span></NavLink></div>
        <div><NavLink to="/device"><AppstoreFilled/><span> 设备管理</span></NavLink></div>
        <div className="title">科学上网</div>
        <div><NavLink to="/ss/home"><ThunderboltFilled/><span> 总览</span></NavLink></div>
        <div><NavLink to="/ss/sub"><GoldFilled/><span> 订阅管理</span></NavLink></div>
      </div>
    </div>
  )
}
