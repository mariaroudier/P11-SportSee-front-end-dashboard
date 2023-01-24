

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

export function checkPieData(data, percentData) {

      const pieData =
            [
                  { name: "Visible", score: percentData },
                  { name: "Unvisible", score: 100 - percentData }
            ]
      return pieData

}