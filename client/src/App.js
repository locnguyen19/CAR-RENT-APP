
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import 'antd/dist/reset.css';
import Register from './pages/Register';
import AddCar from './pages/AddCar';
import BookingCar from './pages/BookingCar';
import UserBookings from './pages/UserBookings';
import EditCar from './pages/EditCar';


function App() {
  return (
  
    <Router>
      <div className="App">
        {/* <Routes>
          <Route path="/" element={<Home />} />
        </Routes> */}
         <Routes element={<ProtectedRoute />}>
            <Route path='/' element={<Home/>}/> 
            <Route path="/booking/:carid" element={<BookingCar />} />
            <Route path="/userbookings" element={<UserBookings />} />
          </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
        <Routes>
          <Route path="/addcar" element={<AddCar />} />
        </Routes>
        {/* <Routes>
          <Route path="/booking/:carid" element={<BookingCar />} />
        </Routes> */}
        {/* <Routes>
          <Route path="/userbookings" element={<UserBookings />} />
        </Routes> */}
        <Routes>
          <Route path="/editcar/:carid" element={<EditCar />} />
        </Routes>
      </div>
    </Router>

  );
}


export default App;

export function ProtectedRoute(props){
 
  if(localStorage.getItem("user")){
    return(
     
        <Route {...props}></Route>
 
    )
 
  }else{
    return <Navigate to="/login"/>
  }
}


