import React from 'react';
import './dashboard.css'
import {GetMainData, GetMainData2 } from '../../lib/service.js';
import Greetings from '../../Components/Greetings/Greetings';
import BarActivity from '../../Components/Charts/Bar_activity/BarActivity'
import LineActivity from '../../Components/Charts/Line_activity/LineActivity'
import RadarActivity from '../../Components/Charts/Radar/Radar'
import PieScore from '../../Components/Charts/Pie_score/PieScore'
import Counter from '../../Components/Counters/Counter'
import { useEffect, useState } from 'react';



/**
 * @param {*} data - to display the content of the page
 * @returns the greetings, charts, counters
 */
function Dashboard() {
      

      const [nameData,setName] = useState([])
      const [scoreData,setScore] = useState([])
      const [countersData,setCounters] = useState([])
      useEffect(() => {
            /**
             * To get the main information of user
             * @returns data
             */
            const  getMainInfo = async() => {
                  const json = await GetMainData()
                  setName(json.data.userInfos.firstName)
                  setScore(json.data.todayScore)
                  setCounters(json.data.keyData)
            }
            getMainInfo()
      },[])

      const [dailyData,setActivity] = useState([])
      useEffect(() => {
            /**
             * To get information of daily activity of the user
             * @returns data
             */
            const  getdailyData = async() => {
                  const response = await fetch('http://localhost:3000/user/12/activity');
                  const json = await response.json();
                  setActivity(json.data.sessions)
            }
            getdailyData()
      },[])

      const [sessionsData,setSessions] = useState([])
      useEffect(() => {
            /**
             * To get information of the duration of the sessions
             * @returns data
             */
            const  getsessionsData = async() => {
                  const response = await fetch('http://localhost:3000/user/12/average-sessions');
                  const json = await response.json();
                  setSessions(json.data.sessions)
            }
            getsessionsData()
      },[])

      const [radarData,setRadar] = useState([])
            useEffect(() => {
                  /**
                  * To get information about the daily target
                  * @returns data
                  */
                  const  getRadarData = async() => {
                        const response = await fetch('http://localhost:3000/user/12/performance');
                        const json = await response.json();
                        setRadar(json.data.data)
                  }
                  getRadarData()
            },[])

      return (
            <>
                  <Greetings name={nameData} />
                  <div id='counters'>
                        <Counter type='Calories' counter={countersData.calorieCount} />
                        <Counter type='Proteines' counter={countersData.proteinCount} />
                        <Counter type='Glucides' counter={countersData.carbohydrateCount} />
                        <Counter type='Lipides' counter={countersData.lipidCount} />
                  </div>
                  <div id='barchart'>
                        <BarActivity data={dailyData}/>
                  </div>
                  <div id='square-charts'>
                        <div id='linechart'>
                              <LineActivity data={sessionsData}/>
                        </div>
                        <div id='radar'>
                              <RadarActivity data={radarData}/>
                        </div>
                        <div id='score'>
                              <PieScore data={scoreData}/>
                        </div>
                  </div>
            </>
      )
}

export default Dashboard;