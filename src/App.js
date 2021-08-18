import './App.css'
import Navbar from './components/Navbar/index'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('http://fonts.cdnfonts.com/css/segoe-ui-4');
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&display=swap');
  body {
    background-color: #F9F9FB;
    font-family: 'Segoe UI', sans-serif;
  }
`

function App() {
  return (
    <>
      <GlobalStyle whiteColor />
      <Navbar />
      {/* {[...Array(100).keys()].map((i) => (
        <h1>Hello this is {i}</h1>
      ))} */}
    </>
  )
}

export default App
