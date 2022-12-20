import './activity_duration.css'
import React, { PureComponent } from 'react';
import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function ActivityDuration({data}) {

      const CustomLegend = () => {
            return (
                  <p className="legend-session-label">Durée moyenne des sessions</p>
            );
      }
      const CustomTooltip = ({ active, payload, label }) => {
            if (active && payload && payload.length) { // вопросики по параметрам
                  return (
                  <div className="custom-session-tooltip">
                        <p className="label-session">{`${payload[0].value} min`}</p>
                  </div>
                  );
            }
            
            return null;
      };


    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300} data={data} margin={{top: 5,right: 30,left: 20,bottom: 5,}}>
          <XAxis dataKey="day" stroke='#FFFFFF' tickLine={{ opacity:'0' }} padding={{ left: 5, right:5 }}/>
          <YAxis hide domain={['dataMin-10', 'dataMax+1']} />
          <Tooltip content={<CustomTooltip />} />
          <Legend content={<CustomLegend />} wrapperStyle={{ top: 0 }} />
          <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" activeDot={{ r: 8 }} dot={{ r:0 }} />
        </LineChart>
      </ResponsiveContainer>
    );
  
}

export default ActivityDuration;