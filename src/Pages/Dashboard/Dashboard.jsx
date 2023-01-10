import './dashboard.css'
import Greetings from '../../components/Greetings/Greetings';
import BarActivity from '../../components/Charts/Bar_activity/BarActivity'
import LineActivity from '../../components/Charts/Line_activity/LineActivity'
import RadarActivity from '../../components/Charts/Radar/Radar'
import PieScore from '../../components/Charts/Pie_score/PieScore'
import Counter from '../../components/Counters/Counter'
import { useEffect, useState } from 'react';


function Dashboard() {
// greetings
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
// daily activity
      const [activityData,setActivity] = useState([])
      useEffect(() => {
            const  getSessionsInfo = async() => {
                  const response = await fetch('http://localhost:3000/user/12/activity');
                  const json = await response.json();
                  setActivity(json.data.sessions)
            }
            getSessionsInfo()
      },[])
// sessions duration
      const [sessionsData,setSessions] = useState([])
      useEffect(() => {
            const  getSessionsDuration = async() => {
                  const response = await fetch('http://localhost:3000/user/12/average-sessions');
                  const json = await response.json();
                  setSessions(json.data.sessions)
                  
            }
            getSessionsDuration()
      },[])
// activity radar
      const [radarData,setRadar] = useState([])
            useEffect(() => {
                  const  getRadarActivity = async() => {
                        const response = await fetch('http://localhost:3000/user/12/performance');
                        const json = await response.json();
                        setRadar(json.data.data)
                  }
                  getRadarActivity()
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
                        <BarActivity data={activityData}/>
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