import "./app.css";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
    let image = '../src/assets/Logo-instagram.png'
    let alternate = "instagram logo"
    return(
        <Router>
        <div className="parent">
          <Routes>
          <Route path="/"
             element={<Login src={image} alt={alternate} height='165px' width='200px'/>}
            />
            <Route
             path="/signup"
             element={ <Signup src={image} alt={alternate} height='165px' width='200px'/>}/>
           
          </Routes>
        </div>
      </Router>
    )
}

export default App;