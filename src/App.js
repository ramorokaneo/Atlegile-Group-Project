import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signinscreen from './Sign_In_Screen/Signinscreen';
// import LandingPageHeader from './LandingPageHeader/LandingPageHeader';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signinscreen />} />
        {/* <Route path="/" element={<LandingPageHeader/>}/>  */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
