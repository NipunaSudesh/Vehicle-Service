
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ReservationForm from "./pages/reservationForm";
import ReservationDetails from "./pages/reservationDetails";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/create-reservation" element={<ReservationForm />} />
        <Route path="/reservation-details" element={<ReservationDetails />} />
 
         
      </Routes>
    </BrowserRouter>
  );
}