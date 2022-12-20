import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line } from 'recharts';
import { useEffect, useState } from 'react';
import './dailyActivity.css'
import OvalBlack from './Oval_black.png'
import OvalRed from './Oval_red.png'


function DailyActivity({data}) {
  const numbersDays = [{day:1},{day:2},{day:3},{day:4},{day:5},{day:6},{day:7}]

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) { // вопросики по параметрам
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].value}kg`}</p>
          <p className="label">{`${payload[1].value}Kcal`}</p>
        </div>
      );
    }
  
    return null;
  };

  const CustomLegend = () => {
      return (
        <div className="custom-legend">
          <div className='poids-legend'>
            <img className="oval-icon" src={OvalBlack} alt="oval icon"></img>
            <p label="kilogram" className="legend-label">Poids (kg)</p>
          </div>
          <div className='calories-legend'>
            <img className="oval-icon" src={OvalRed} alt="oval icon"></img>
            <p label="calories" className="legend-label">Calories brûlées (kCal)</p>
          </div>
          
        </div>
      );
  };

  return (
    <>
      <p className='titre-activity'>Activité quotidienne</p>
      <ResponsiveContainer className="container-activity" width="100%" height="100%">

        <BarChart
          width={835}
          height={320}
          data={data}
          margin={{ top: 35,}} >
          
          <CartesianGrid strokeDasharray="2 2" stroke='#DEDEDE'/>
          <XAxis data={numbersDays} datakey="day" stroke='#9B9EAC'/>
         
          <YAxis orientation="right" stroke="#FBFBFB" tick={{ fill: '#9B9EAC' }} tickLine={{ opacity:'0' }} />
          <Tooltip content={<CustomTooltip />} />
          <Legend content={<CustomLegend />} iconType="circle" wrapperStyle={{ top: -35, right: 0,  lineHeight: '24px',textAlign:'end'}}/>
          <Bar dataKey="kilogram" fill="#282D30" barSize={7}/>
          <Bar dataKey="calories" fill="#E60000" barSize={7}/>
        </BarChart>
      </ResponsiveContainer>
    </>

  )

}

export default DailyActivity;
