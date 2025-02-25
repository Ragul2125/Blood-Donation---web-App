import "./App.css";
import BottomNav from "./Bottom/BottomNav";
import Login from "./Login/Login";
 import Dashboard from './Dashboard/Layout.jsx'
import Signup from './Signup/Signup.jsx'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup/*" element={<Signup/>}/>
        <Route path="/dashboard/*" element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;
