import {Link} from "react-router-dom";

import {Input} from "../components/UI/input/Input.jsx";
import {Button} from "../components/UI/button/Button.jsx";

import "./form.scss"

export const Signup = () => {
    return (
        <div className="form-wrapper">
            <form className="form">
                <h2 className="title">Create an account</h2>

                <Input label="Enter Your Name"/>
                <Input label="Enter Your Email" type="email"/>
                <Input label="Enter Your Password" type="password"/>

                <Button>Sign Up</Button>
            </form>

            <p>
                Already have an account?
                <Link to="/login" className="redirect">Login</Link>
            </p>
        </div>
    );
};
