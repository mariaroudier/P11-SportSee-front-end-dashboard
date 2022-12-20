import './activity_radar.css'
import React, { PureComponent } from 'react';
import { useEffect, useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


function ActivityRadar({data}) {

      const info = (data) => {
            return (
                  data.map(el => {
                        switch(el.kind) {
      
                              case 1:
                              el.kind = "Cardio"
                              break;
                              case 2:
                              el.kind = "Energy"
                              break;
                              case 3:
                              el.kind = "Endurance"
                              break;
                              case 4:
                              el.kind = "Strength"
                              break;
                              case 5:
                              el.kind = 'Speed'
                              break;
                              case 6:
                              el.kind = "Intensity"
                              break;
                        }
                  })
            )
      }
      info(data)
      
      return (
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="kind" />
                <PolarRadiusAxis />
                <Radar  dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              </RadarChart>
            </ResponsiveContainer>
      );
}

export default ActivityRadar;

