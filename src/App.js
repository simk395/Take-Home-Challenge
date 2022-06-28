import './App.css';
import Nav from './components/Nav'
import Content from './components/Content'
import styled from 'styled-components'

function App() {
  const App = styled.div`
    margin: 10px 20px;
  `
  return (
    <App className="App">
      <Nav/>
      <Content/>
    </App>
  );
}

export default App;
