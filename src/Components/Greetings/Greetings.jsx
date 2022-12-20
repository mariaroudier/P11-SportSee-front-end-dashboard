import './greetings.css'

function Greetings({name}) {
      return(
            <>
            <div id='greetings-box'>
                  <p className='greetings'>Bonjour&nbsp;</p>
                  <h1 className="greetings name">{name}</h1>
            </div>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </>
      )
}

export default Greetings;