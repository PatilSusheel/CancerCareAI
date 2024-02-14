import './App.css';
import Import from './Screens/Import'
import Home from './Screens/Home'
import Login from './Screens/Login';
import Register from './Screens/Register';
import Appointment from './Screens/Appointment';
import Contact from './Screens/Contact';
import PatientName from './Screens/PatientName';
import{
  BrowserRouter as Router,
  Routes,Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/import" element={<Import/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/appointment" element={<Appointment/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/patient" element={<PatientName/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
