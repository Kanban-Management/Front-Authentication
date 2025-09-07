import {Link} from "react-router-dom";

import {Input} from "../components/UI/input/Input.jsx";
import {Button} from "../components/UI/button/Button.jsx";

import "./form.scss"

export const SignIn = () => {
    return (
        <div className="form-wrapper">
            <form className="form">
                <h2>Hi, Welcome Back! 👋</h2>

                <Input label="Enter Your Email" type="email"/>
                <Input label="Enter Your Password" type="password"/>

                <Button>Sign in</Button>
            </form>

            <p>
                Don’t have an account?
                <Link to="/signup" className="redirect">Sign Up</Link>
            </p>
        </div>
    );
};
