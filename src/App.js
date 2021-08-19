import { useMediaQuery } from 'react-responsive'
import './App.css'
import Navbar from './components/Navbar/index'
import HomePage from './containers/HomePage'
import { GlobalStyle } from './utils/styleUtils'

function App() {
  const isMobile = useMediaQuery({ maxWidth: 700 })

  return (
    <>
      <GlobalStyle />
      <Navbar isMobile={isMobile} />
      <HomePage />
    </>
  )
}

export default App
