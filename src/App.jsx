import './App.css'
import Weather from './components/weather/Weather'
import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'

function App() {

  return (
    <div className='wrapper'>
      <NavBar/>
      <Weather/>
      <Footer/>
    </div>
  )
}

export default App
