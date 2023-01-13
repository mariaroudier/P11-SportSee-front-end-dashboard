import './line_activity.css'
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

/**
 * @param {*} data - to display in line chart
 * @returns a component with the line chart
 */
function LineActivity({data}) {

  const newData = data.map(el => {
    switch(el.day){
      case 1:
        return{ ...el, dayName: 'L'}
      case 2:
        return { ...el, dayName: 'M' }
      case 3:
        return { ...el, dayName: 'M' }
      case 4:
        return { ...el, dayName: 'J' }
      case 5:
        return { ...el, dayName: 'V' }
      case 6:
        return { ...el, dayName: 'S' }
      case 7:
        return { ...el, dayName: 'D' }
      default:
        el.day = ""
    }
    return ""
  })
    
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
    <ResponsiveContainer width="100%" height="100%" >
      <LineChart width={500} height={300} data={newData} >
        <XAxis  axisLine={false} dataKey="dayName" stroke='white' tickSize={0} opacity={0.5} padding={{ left: 15, right: 15 }} />
        <YAxis hide domain={['dataMin-10', 'dataMax+1']} padding={{ top: 70}}/>
        <Tooltip content={<CustomTooltip />} />
        <Legend content={<CustomLegend />} wrapperStyle={{ top: 0 }} />
        <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" activeDot={{ r: 8 }} dot={{ r:0 }} strokeWidth="2"/>
      </LineChart>
    </ResponsiveContainer>
  );
}

export default LineActivity;