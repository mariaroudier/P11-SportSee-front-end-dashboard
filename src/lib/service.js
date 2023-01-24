import React from 'react';
import { useEffect, useState } from 'react';
import { USER_MAIN_DATA } from '../../../../P11-SportSee-front-end-dashboard/app/data.js'
var mock = false


export async function GetMainData() {
      if (mock) {
            return USER_MAIN_DATA.find(user => user.id == 12)
      } else {
            const response = await fetch('http://localhost:3000/user/12');
            const json = await response.json();
            return json
      }
}

export async function GetMainData2() {

      if (mock) {
            return USER_MAIN_DATA.find(user => user.id == 12)
      } else {
            const response = await fetch('http://localhost:3000/user/12');
            const json = await response.json();
            return json
      }



}

