import { useMediaQuery } from 'react-responsive'
import './App.css'
import Navbar from './components/Navbar/index'
import HomePage from './containers/HomePage'
import { GlobalStyle } from './utils/styleUtils'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import BlogsPage from './containers/BlogsPage'
import ContactPage from './containers/ContactPage'
import Footer from './components/Footer/index'
import ProjectPage from './containers/ProjectPage'
import AboutPage from './containers/AboutPage'

function App() {
  const isMobile = useMediaQuery({ maxWidth: 700 })
  return (
    <>
      <Router>
        <GlobalStyle />
        <Navbar isMobile={isMobile} />
        <Switch>
          <Route render={() => <HomePage />} exact path='/' />
          <Route render={() => <BlogsPage />} exact path='/blog' />
          <Route render={() => <AboutPage />} exact path='/about' />
          <Route render={() => <ProjectPage showAll />} exact path='/project' />
          <Route render={() => <ContactPage />} exact path='/contact' />
          <Route component={() => <Redirect to='/' />} />
        </Switch>
      </Router>
      <Footer />
    </>
  )
}

export default App
