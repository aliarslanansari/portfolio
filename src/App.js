import { useMediaQuery } from 'react-responsive'
import { HashRouter as Router } from 'react-router-dom'
import styled from 'styled-components'
import './App.css'
import Footer from './components/Footer/index'
import Navbar from './components/Navbar/index'
import Routes from './components/Routes'
import { routeConfig } from './routeConfig'
import { GlobalStyle } from './utils/styleUtils'
import mixpanel from 'mixpanel-browser'

const MainWrapper = styled.div`
  padding-bottom: 5%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

mixpanel.init(process.env.REACT_APP_MIXPANEL_PROJECT_TOKEN);
mixpanel.track("APP_OPENED")

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
