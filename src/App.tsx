
import 'xp.css/dist/XP.css'
import TaskBar from './components/TaskBar'
import pcIcon from './assets/icons/pc.png'

const App = (): JSX.Element => {
  return (
    <div className="App">
      <div className="desktop">
        <div className="program">
          <img src={pcIcon} alt="pcicon" className='icon' />
          <p>Mi PC</p>
        </div>
      </div>
      <TaskBar />
    </div>
  )
}

export default App
