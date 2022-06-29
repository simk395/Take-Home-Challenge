import './App.css';
import Nav from './components/Nav'
import {Content, About} from './components'
import styled from 'styled-components'
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Main className="App">
      <Nav/>
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/search?term=:name" element={<Content/>}/>
        <Route path="/" element={<Content/>}/>
      </Routes>
    </Main>
  );
}

const Main = styled.div`
margin: 0 20%;

@media (max-width: 700px){
  margin: 0;
  padding: 0 50px;
}

@media (max-width: 461){
  padding: 0;
}
`
export default App;
