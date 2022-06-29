import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from "./Login"
import Signup from "./Signup"
import PatientDashboard from "./PatientDashboard"
import AppoinmentForm from "./AppointmentForm";
import DoctorConfirmation from "./DoctorConfirmation"
import DoctorDashboard from "./DoctorDashboard"
import DoctorDescription from "./DoctorDescription"
import DoctorActivate from "./DoctorActivate";
import PatientReportRequest from "./PatientReportRequest";
import MakeAppointment from "./MakeAppoinment";
import WriteDescription from "./WriteDescription";
import DoctorReportRequest from "./DoctorReportRequest";

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
        <Route path="/doctordescription" element={<DoctorDescription />} />
        <Route path="/doctoractivate" element={<DoctorActivate />} />
        <Route path="/patientreportrequest" element={<PatientReportRequest />} />
        <Route path="/doctorreportrequest" element={<DoctorReportRequest />} />

        <Route path="/makeappointment" element={<MakeAppointment />} />
        <Route path="/writedescription" element={<WriteDescription />} />


      </Routes>
    </Router>
  );
}


