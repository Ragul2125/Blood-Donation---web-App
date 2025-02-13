import "./App.css";
import BottomNav from "./Bottom/BottomNav";
import Emergency from "./Emergency/Emergency";
import Login from "./Login/Login";
import Profile from "./Profile/Profile";
function App() {
  return (
    <>
     <Emergency/>
     {/* <Profile/> */}
     {/* <Login/> */}
      <BottomNav />
    </>
  );
}

export default App;
