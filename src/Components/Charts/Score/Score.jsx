import './score.css'
import React, { PureComponent } from 'react';
import { useEffect, useState } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';


function Score({data}){

      const percentData = data*100
      const fakeValue = 1 - percentData
      
      // const fakeObject = [{value: data},{value:fakeValue}]

      return(

            <>
                  <span>Score</span>
                  <span>{percentData}%</span>
                  <span>de votre objectif</span>
                  <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={400} height={400}>
                              <Pie dataKey="value" data={data} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
                              <Tooltip />
                        </PieChart>
                  </ResponsiveContainer>
            </>
                  
                  

      )
}

export default Score;