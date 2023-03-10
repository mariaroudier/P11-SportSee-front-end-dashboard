import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './bar_activity.css'
import OvalBlack from './Oval_black.png'
import OvalRed from './Oval_red.png'
import { checkBarData } from '../../../lib/check'

/**
 * @param {*} data - to display in the bar chart
 * @returns a component with the bar chart
 */
function BarActivity({data}) {

  const newData = checkBarData(data)

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) { 
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
      <ResponsiveContainer className="container-activity" width="100%" height="100%" >
        <BarChart
          width={835}
          height={320}
          data={newData}
          margin={{ top: 95 }}
          >
          <CartesianGrid strokeDasharray="2 2" vertical={false} />
          <XAxis strokeDasharray="0 0" dataKey="day" stroke='#9B9EAC' tickLine={false}/>
          <YAxis orientation="right" stroke="#FBFBFB" tick={{ fill: '#9B9EAC' }} tickLine={{ opacity:'0' }} />
          <Tooltip content={<CustomTooltip />} />
          <Legend content={<CustomLegend />} iconType="circle" wrapperStyle={{ top: 31, right: 0,  lineHeight: '24px',textAlign:'end'}}/>
          <Bar dataKey="kilogram" fill="#282D30" barSize={7} radius={[10, 10, 0, 0]}/>
          <Bar dataKey="calories" fill="#E60000" barSize={7} radius={[10, 10, 0, 0]}/>
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}

export default BarActivity;
