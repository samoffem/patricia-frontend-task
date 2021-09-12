import {useState} from 'react'
import './App.css';
import styled from 'styled-components'
import MainBoard from './Components/MainBoard';
import Sidebar from './Components/Sidebar';


function App() {
  const[sidemenuToggle, setToggle] = useState(false);
  const [toggleActivities, setToggleActivities] = useState(false)

  return (
    <div className="App">
      <AppWrapper>
        <Sidebar toggle={sidemenuToggle} setToggle={setToggle} setToggleActivities={setToggleActivities}/>
        <MainBoard toggleActivities={toggleActivities} setToggleActivities={setToggleActivities} setToggle={setToggle}  />
      </AppWrapper>
    </div>
  );
}

const AppWrapper = styled.div`
  
  margin: 0 auto;
  background-color: #f9fafc;

`

export default App;
