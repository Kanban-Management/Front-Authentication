import {Eye, EyeOff} from "lucide-react";

import "./Input.scss"
import {useState} from "react";

export const Input = ({label, type="text", ...props}) => {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password";
    const inputType = isPassword && showPassword ? "text" : type;

    return (
        <div className="modern-input">
            <input
                type={inputType}
                placeholder=" "
                required
                {...props}
            />
            <label>{label}</label>

            {isPassword && (
                <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? <EyeOff size={24} /> : <Eye size={24} />}
                </button>
            )}
        </div>
    );
};
