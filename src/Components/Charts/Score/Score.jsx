import './score.css'
import React from 'react';
import { useEffect, useState } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts'
// import  {ResponsiveContainer, RadialBar,RadialBarChart,Legend} from 'recharts';


function Score({data}){

      const percentData = data*100
      const newData = [ {name : "Visible", score: percentData },
                        {name: "Unvisible", score: 100 - percentData}
      ]
      const COLORS = ["#FF0000", "#FBFBFB"];
      return(
            <>
                  <span className='radar-titre'>Score</span>
                  <p className='radar-percent'>{percentData}%<br/><span className='radar-text'>de votre<br/>objectif</span></p>
                  <ResponsiveContainer width="100%" height={210}>
                        <PieChart width={800} height={400}>
                              <Pie
                                    data={newData}
                                    cx={100}
                                    cy={100}
                                    innerRadius={80}
                                    outerRadius={100}
                                    stroke="none"
                                    fill="#FF0000"
                                    startAngle={90}
                                    endAngle={360+90}
                                    paddingAngle={1}
                                    dataKey="score"
                                    cornerRadius={20}
                              >
                              {newData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}  />
                              ))}
                              </Pie>
                        </PieChart>
                  </ResponsiveContainer>
            </>
      )
}

export default Score;