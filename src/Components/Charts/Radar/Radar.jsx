import './radar.css'
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { checkRadar } from '../../../lib/check'

/**
 * @param {*} data - to display in the pie chart
 * @returns a component with the pie chart
 */
function RadarActivity({data}) {

      /**
      * @param {*} el.kind - to replace a number by name of activity
      * @returns data with changed "kind"
      */
     const newData = checkRadar(data)

      if(data.length > 0) {
            return (
                  <ResponsiveContainer width="100%" height="100%">
                        <RadarChart cx="50%" cy="50%" outerRadius="55%" data={newData}>
                              <PolarGrid radialLines={false} />
                              <PolarAngleAxis dataKey="kind" tick={{ fill: '#FFFFFF' }} fillOpacity={1} />
                              <PolarRadiusAxis tickLine={{ opacity:'0' }} fillOpacity={0} stroke="none"  />
                              <Radar  dataKey="value"  fill="#FF0101B2" fillOpacity={0.7} />
                        </RadarChart>
                  </ResponsiveContainer>
                  
            );
      } else {
            return (<div></div>)
      }
}

export default RadarActivity;

