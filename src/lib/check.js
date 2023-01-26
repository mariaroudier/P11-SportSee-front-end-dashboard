
/**
 * @param {*} data - to change the data's value of "day" in the daily activity
 * @returns data with changed "day"
 */
export function checkBarData(data) {
      return data.map(el => {
            if (el.day) {
                  switch (new Date(el.day).getDate()) {
                        case 1:
                              return { ...el, day: '1' }
                        case 2:
                              return { ...el, day: '2' }
                        case 3:
                              return { ...el, day: '3' }
                        case 4:
                              return { ...el, day: '4' }
                        case 5:
                              return { ...el, day: '5' }
                        case 6:
                              return { ...el, day: '6' }
                        case 7:
                              return { ...el, day: '7' }
                        default:
                              return { ...el }
                  }
            } else {
                  return { ...el }
            }
      })
}

/**
 * @param {*} data - to add a new key value in the data of sessions duration
 * @returns data with a new key "dayName"
 */
export function checkLineData(data) {
      return data.map(el => {
            if (el.day) {
                  switch (el.day) {
                        case 1:
                              return { ...el, dayName: 'L' }
                        case 2:
                              return { ...el, dayName: 'M' }
                        case 3:
                              return { ...el, dayName: 'M' }
                        case 4:
                              return { ...el, dayName: 'J' }
                        case 5:
                              return { ...el, dayName: 'V' }
                        case 6:
                              return { ...el, dayName: 'S' }
                        case 7:
                              return { ...el, dayName: 'D' }
                        default:
                              return { ...el }
                  }
            }
      })
}

/**
 * @param {*} percentData - to create a new data for the performance's pie
 * @returns data in percents and the difference for the second pie
 */
export function checkPieData(data, percentData) {

      const pieData =
            [
                  { name: "Visible", score: percentData },
                  { name: "Unvisible", score: 100 - percentData }
            ]
      return pieData

}

/**
 * @param {*} data - to create a new data for the radar
 * @returns a new data with a changed value of "kind"
 */
export function checkRadar(data) {
      return data.map(el => {
            const newEl = { ...el }
            switch (newEl.kind) {
                  case 1:
                        newEl.kind = "Cardio"
                        break;
                  case 2:
                        newEl.kind = "Energie"
                        break;
                  case 3:
                        newEl.kind = "Endurance"
                        break;
                  case 4:
                        newEl.kind = "Force"
                        break;
                  case 5:
                        newEl.kind = 'Vitesse'
                        break;
                  case 6:
                        newEl.kind = "Intensité"
                        break;
                  default:
                        break
            }
            return newEl
      })
}