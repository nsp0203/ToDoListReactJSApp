import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import Home from './Contents/Home/Home';
import Tasks from './Contents/Tasks/Tasks';

function App() {
  // const handle = () => {
  //   useEffect({

  //   }, []);
  // }
  return (
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/Tasks' element = {<Tasks/>}/>
    </Routes>
    
  );
}

export default App;
