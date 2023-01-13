import React from 'react';
import './counter.css'
import Calories from './calories-icon.png'
import Proteins from './protein-icon.png'
import Lipids from './fat-icon.png'
import Glucids from './carbs-icon.png'

/**
 * @param {*} type - to display the correct icon and name
 * @param {*} counter - to display the quantity of every "type"
 * @returns a component with the name, icon and quantity
 */
function Counter({type, counter}) {
      let srcImg = ""
      switch(type) {
            case 'Calories':
                  srcImg = `${Calories}`
            break;
            case 'Proteines':
                  srcImg = `${Proteins}`
            break;
            case 'Glucides':
                  srcImg = `${Glucids}`
            break;
            case 'Lipides':
                  srcImg = `${Lipids}`
            break;
            default:
                  srcImg = ""
            break;
      }
      return(
            <div className='box-counter'> 
                  <img className='img-counter' src={srcImg} alt={type}/>
                  <div className='text-counter'>
                        <span className='quantity'>{counter}kCal</span>
                        <span className='type-counter'>{type}</span>
                  </div>
            </div>
      )
}

export default Counter;