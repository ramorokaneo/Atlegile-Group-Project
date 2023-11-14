
import './App.css';
import Register from './BusinessRegistration/Register';
import PaymentInfo from './BusinessRegistration/PaymentInfo';
import AddPhoto from './BusinessRegistration/AddPhoto';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Register/>} />
      <Route path='/addPhoto' element={<AddPhoto/>} />
      <Route path='/paymentInfo' element={<PaymentInfo/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
