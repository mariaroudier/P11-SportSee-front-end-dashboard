import { NavLink } from 'react-router-dom';
import './sidebar.css';
import iconSwim from './icon_swim.png'
import iconVelo from './icon_velo.png'
import iconMeditation from './icon_meditation.png'
import iconGym from './icon_gym.png'


function Sidebar() {
      return (
            <aside>
                  <nav className="nav-aside">
                        <NavLink to="#" className='links-aside'><img src={iconMeditation} alt='icon meditation'/></NavLink>
                        <NavLink to="#" className='links-aside'><img src={iconSwim} alt='icon swim'/></NavLink>
                        <NavLink to="#" className='links-aside'><img src={iconVelo} alt='icon velo'/></NavLink>
                        <NavLink to="#" className='links-aside'><img src={iconGym} alt='icon gym'/></NavLink>
                  </nav>
                  <p className='copyright'>Copyright, SportSee 2020</p>

            </aside>
      )
}

export default Sidebar;