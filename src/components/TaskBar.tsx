import logo from '../assets/icons/logo.png'
import Clock from './Clock'
const TaskBar = (): JSX.Element => {
  return (
    <div className="windows-task">
      <div className="start">
        <img src={logo} alt="logo" className='icon' />
        <span>INICIO</span>
      </div>
      <div className="taskbar">
        <div className="apps">APPS</div>
        <div>
          <Clock />
        </div>
      </div>
    </div>
  )
}

export default TaskBar
