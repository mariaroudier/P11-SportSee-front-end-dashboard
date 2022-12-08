

// function name(json) {
//       console.log(json.data.userInfos.firstName);
// }

function GetUserId(){
      const  UserId = async() => {
            const response = await fetch('http://localhost:3000/user/12');
            const json = await response.json();
            // name(json)
            console.log(json)
      }
      UserId()
      
      
}


    

export default {GetUserId}