import GetUserId from '../../lib/getUserId'


// function getName(data) {
//       console.log(json.data.userInfos.firstName);
// }

// const name = GetUserId()



// const  UserId = async() => {
//       const response = await fetch('http://localhost:3000/user/12');
//       const json = await response.json();
//       // name(json)
//       return json
// }
// // UserId()


// UserId(data)
// console.log(data)


function Greetings({name}) {
// console.log(userInfos.firstName)
      return(
            <div id='greetings'>
                  <h1>Bonjour {name}</h1>
                  <p></p>
            </div>
      )
}

export default Greetings;