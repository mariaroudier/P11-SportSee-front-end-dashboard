import React from 'react';
import { useEffect, useState } from 'react';
import './counter.css'
import Calories from './calories-icon.png'
import Proteins from './protein-icon.png'
import Lipids from './fat-icon.png'
import Glucids from './carbs-icon.png'


function Counter({data}) {


      // setCalorie(json.data.keyData.calorieCount)
      return(
            
            <>
                  <div className='box-counter'>
                        {data.calorieCount ? 
                        (
                              <>
                                    <img className='img-counter' src={Calories} />
                                    <div className='text-counter'>
                                          <span>{data.calorieCount}kCal</span>
                                          <span>Calories</span>
                                    </div>
                              </>
                              
                        ) : "" }
                        {data.proteinCount ? 
                        (
                              <>
                                    <img className='img-counter' src={Proteins} />
                                    <div className='text-counter'>
                                          <span>{data.proteinCount}g</span>
                                          <span>Proteines</span>
                                    </div>
                              </>
                              
                        ) : "" }
                  </div>
            </>
      )
      


}

export default Counter;