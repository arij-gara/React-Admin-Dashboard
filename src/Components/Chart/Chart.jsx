import React from 'react'
import './Chart.css'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
export default function Chart( { data ,title, dataKey, grid}) {
   
  return (
    <div className='chart'> 
      
      <h3 className='charttitle'> {title}</h3>
      <ResponsiveContainer width="100%"  aspect={ 4 / 1}>
      <LineChart  data={data}>
      <XAxis dataKey='name' stroke='#eb34cf'/>
      <Line type= 'monotone'  dataKey={dataKey} stroke='#eb34cf'/>
      <Tooltip/>
       {grid  && <CartesianGrid  stroke='#e0dfdf' strokeDasharray='5 5'/>}
      </LineChart>
     
      </ResponsiveContainer>

    </div>
  )
}
