import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link

} from "react-router-dom";
import Login from "./Login"
import Signup from "./Signup"
import PatientDashboard from "./PatientDashboard"
import AppoinmentForm from "./AppointmentForm";
import DoctorConfirmation from "./DoctorConfirmation"
import DoctorDashboard from "./DoctorDashboard"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/patientdashboard" element={<PatientDashboard />} />
        <Route path="/doctordashboard" element={<DoctorDashboard />} />

        <Route path="/appoinmentform" element={<AppoinmentForm />} />
        <Route path="/doctorconfirmation" element={<DoctorConfirmation />} />
      </Routes>
    </Router>
  );
}


