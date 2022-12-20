import './score.css'
import React, { PureComponent } from 'react';
import { useEffect, useState } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

// const data = [
//       {
//         name: '18-24',
//         uv: 31.47,
//         pv: 2400,
//         fill: '#8884d8',
//       },

function Score({data}){
      console.log(data)
      data = data +1
      console.log(data)
      return(

            <>
                  <p>Score</p>
                  <ResponsiveContainer width="100%" height="100%">
                        <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
                              <RadialBar
                              minAngle={15}
                              label={{ position: 'insideStart', fill: '#FF0000' }}
                              // background
                              // clockWise
                              dataKey="data"
                              />
                              <Legend iconSize={10} layout="vertical" verticalAlign="middle" 
                              // wrapperStyle={{top: '50%',right: 0,transform: 'translate(0, -50%)',lineHeight:24}} 
                              />
                        </RadialBarChart>
                  </ResponsiveContainer>
            </>
                  
                  

      )
}

export default Score;