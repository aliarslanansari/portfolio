import { useMediaQuery } from 'react-responsive'
import { HashRouter as Router } from 'react-router-dom'
import styled from 'styled-components'
import './App.css'
import Footer from './components/Footer/index'
import Navbar from './components/Navbar/index'
import Routes from './components/Routes'
import { routeConfig } from './routeConfig'
import { GlobalStyle } from './utils/styleUtils'
const MainWrapper = styled.div`
  padding-bottom: 5%;
`
function App() {
  const isMobile = useMediaQuery({ maxWidth: 700 })
  return (
    <>
      <Router>
        <GlobalStyle />
        <Navbar isMobile={isMobile} />
        <MainWrapper>
          <Routes routeConfig={routeConfig} />
        </MainWrapper>
      </Router>
      <Footer />
    </>
  )
}

export default App
