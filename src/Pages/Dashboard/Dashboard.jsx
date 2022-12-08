import './dashboard.css'
import Greetings from '../../components/Greetings/Greetings';
import DailyActivity from '../../components/Charts/Daily_activity/DailyActivity'
import { json } from 'react-router-dom';
import { useEffect, useState } from 'react';




function Dashboard() {
      const [nameData,setName] = useState("")

      useEffect(() => {
            const  getInfo = async() => {
                  const response = await fetch('http://localhost:3000/user/12');
                  const json = await response.json();
                  setName(json.data.userInfos.firstName)
            }
            getInfo()
      },[])

      return (
            <>
                  <Greetings name={nameData} />
                  <div id='activity'>
                        <DailyActivity />
                  </div>
            </>
      )

}

export default Dashboard;