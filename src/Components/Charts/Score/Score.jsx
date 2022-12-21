import './score.css'
import React, { PureComponent } from 'react';
import { useEffect, useState } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

// const data = [
//       {
//         name: '18-24',
//         uv: 31.47,
//         pv: 2400,
//         fill: '#8884d8',
//       },

function Score({data}){

      const percentData = data*100
      const fakeValue = 1 - percentData
      
      const fakeObject = [{value: data},{value:fakeValue}]

      return(

            <>
                  <span>Score</span>
                  <span>{percentData}%</span>
                  <span>de votre objectif</span>
                  <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={400} height={400}>
                              <Pie dataKey="value" data={fakeObject} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
                              <Tooltip />
                        </PieChart>
                  </ResponsiveContainer>
            </>
                  
                  

      )
}

export default Score;