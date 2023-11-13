import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Register from './components/Register';
import UserSignUp from './Components/UserSignUp/UserSignUp';
import MainAcc from './Components/MainAcc/MainAcc';
import AltContact from './Components/AltContact/AltContact';
import Sign_In_Screen from './Components/Sign_In_Screen/Signinscreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Register />} /> */}
        <Route path='/' element={<UserSignUp/>} />
        <Route path='/mainacc' element={<MainAcc/>} />
        <Route path='/altcontact' element={<AltContact/>} />
        <Route path='/signinscreen' element={<Sign_In_Screen/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
