// import './App.css'

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';

import WeatherApp from './WeatherApp';

function App() {
  let handleClick= () => {
    console.log("button was clicked!");
  }

  return (
    <>
     {/* <h1>Material UI Demo</h1>
     <Button variant="outlined" onClick={handleClick}>Click Me!</Button>
     <Button variant="contained" onClick={handleClick} color="success" size="large">Click Me2!</Button>
     <Button variant="contained" startIcon={<DeleteIcon />} onClick={handleClick}>Delete</Button>
     <Alert severity="error">This is an error Alert.</Alert> */}


     <WeatherApp/>
    </>
  )
}

export default App
