import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../tests/data.js'

var mock = false

export async function getMainData() {
      if (mock) {
            return USER_MAIN_DATA.find(user => user.id == 12)
      } else {
            const response = await fetch('http://localhost:3000/user/12');
            const json = await response.json();
            return json
      }
}
export async function getDailyActivity() {
      if (mock) {
            return USER_ACTIVITY.find(user => user.id == 12)
      } else {
            const response = await fetch('http://localhost:3000/user/12/activity');
            const json = await response.json();
            return json
      }
}

export async function getSession() {
      if (mock) {
            return USER_AVERAGE_SESSIONS.find(user => user.id == 12)
      } else {
            const response = await fetch('http://localhost:3000/user/12/average-sessions');
            const json = await response.json();
            return json
      }
}

export async function getPerformance() {
      if (mock) {
            return USER_PEGetPerformanceRFORMANCE.find(user => user.id == 12)
      } else {
            const response = await fetch('http://localhost:3000/user/12/performance');
            const json = await response.json();
            return json
      }
}