import './App.css';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Signinscreen from './Sign_In_Screen/Signinscreen';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signinscreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
