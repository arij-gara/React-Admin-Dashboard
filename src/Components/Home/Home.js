import React from 'react'
import Featuredinfo from '../Featuredinfo/Featuredinfo'
import Chart from '../Chart/Chart'
import './Home.css'
import {userdata} from '../dummydata'
import Widgetsm from '../widgetsm/widgetsm'
import Widgetlg from '../widgetlg/widgetlg'


export default function Home() {
  return (
    <div className='home'>
 
<Featuredinfo/>
<Chart  data={userdata} title='user Analytics' grid dataKey='activeuser'/>
<div className='homewidget'>
  <Widgetsm/>
  <Widgetlg />
</div>
 </div>
  )
}
