import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

import {Signup} from "./pages/Signup.jsx";
import {SignIn} from "./pages/Signin.jsx";

import "./App.css";

export const App = () => {
    return (
        <div className="container">
            <Router>
                <Routes>
                    <Route path="/" element={<Navigate to="/login"/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/login" element={<SignIn/>}/>
                </Routes>
            </Router>
        </div>
    )
}
