import './dashboard.css'
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
            const  getMainInfo = async() => {
                  const response = await fetch('http://localhost:3000/user/12');
                  const json = await response.json();
                  setName(json.data.userInfos.firstName)
                  setScore(json.data.todayScore)
                  setCounters(json.data.keyData)
            }
            getMainInfo()
      },[])

      const [dailyData,setActivity] = useState([])
      useEffect(() => {
            const  getdailyData = async() => {
                  const response = await fetch('http://localhost:3000/user/12/activity');
                  const json = await response.json();
                  setActivity(json.data.sessions)
            }
            getdailyData()
      },[])

      const [sessionsData,setSessions] = useState([])
      useEffect(() => {
            const  getsessionsData = async() => {
                  const response = await fetch('http://localhost:3000/user/12/average-sessions');
                  const json = await response.json();
                  setSessions(json.data.sessions)
            }
            getsessionsData()
      },[])

      const [radarData,setRadar] = useState([])
            useEffect(() => {
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