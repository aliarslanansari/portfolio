import { useMediaQuery } from 'react-responsive'
import './App.css'
import Navbar from './components/Navbar/index'
import HomePage from './containers/HomePage'
import { GlobalStyle } from './utils/styleUtils'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import BlogsPage from './containers/BlogsPage'
import Footer from './components/Footer/index'

function App() {
  const isMobile = useMediaQuery({ maxWidth: 700 })

  return (
    <>
      <Router>
        <GlobalStyle />
        <Navbar isMobile={isMobile} />
        <Switch>
          <Route render={HomePage} exact path='/' />
          <Route render={BlogsPage} exact path='/blog' />
        </Switch>
      </Router>
      <Footer />
    </>
  )
}

export default App
