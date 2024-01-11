import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MovieSeats from "./pages/MovieSeats";
import Shows from "./pages/Shows";
import Register from "./pages/Register";
import Login from "./pages/Login";
import BookingDetails from "./pages/BookingDetails";
import SendOtp from "./pages/SendOtp";
import PaymentSuccess from "./pages/PaymentSuccess";
import TicketDetails from "./pages/TicketDetails";
import Tickets from "./pages/Tickets";
import NowShowing from "./components/organisms/NowShowing";
import PrivateRoutes from "./utils/ProtectedRoutes";

export interface AppProps {
}

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route element={<PrivateRoutes />}>
                    <Route path="/" element={<Home />} >
                        <Route path="/nowShowing" element={<NowShowing />} />
                        <Route path="/movie/:movie_id/shows" element={<Shows />} />
                    </Route>
                    <Route path="/movie/:movie_id/show/:show_id/seats" element={<MovieSeats />} />
                    <Route path="/booking" element={<BookingDetails />} />
                    <Route path="/sendotp" element={<SendOtp />} />
                    <Route path="/paymentsuccess" element={<PaymentSuccess />} />
                    <Route path="/ticket/:ticket_id" element={<TicketDetails />} />
                    <Route path="/mytickets" element={<Tickets />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
