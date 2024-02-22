import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedIn } from "../redux/actions/to-do-actions";
import { IuserReducerState } from "../interface/reducers-interface";
import { IloginValue } from "../interface/signup-login-interface";
import { TodoLogo, WelcomeBack, NotRegistered, SignUp, ErrorFields } from "../assets/constants/constant";
import "../assets/css/signup.css";
import Logo from "../assets/images/logo.png";
import Todo from "../assets/images/todo.png";

const Login = () => {
    const state: IloginValue = {
        email: "",
        password: "",
    };

    const [input, setInput] = useState<IloginValue>(state);
    const [errorMsg, setErrorMsg] = useState<string>("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userData = useSelector((state: IuserReducerState) => state.userReducer.userData);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let { name, value } = e.target;
        setInput({ ...input, [name]: value });
    }

    const handleSubmission = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!input.email || !input.password) {
            setErrorMsg(ErrorFields);
            return;
        }

        const user = userData.find((user) => user.email === input.email);
        if (!user) {
            setErrorMsg("User does not exist");
            return;
        }

        if (user.password !== input.password) {
            setErrorMsg("Incorrect password");
            return;
        }

        dispatch(setLoggedIn(true));
        navigate('/home');
        setErrorMsg("");
    };

    const displayInputField = (type: string, name: string) => {
        return (
            <div className="input-wrap">
                <input
                    type={type}
                    name={name}
                    className="input-field"
                    autoComplete="off"
                    placeholder={name}
                    onChange={handleInputChange}
                />
            </div>
        );
    };

    return (
        <React.Fragment>
            <main>
                <div className="box">
                    <div className="inner-box">
                        <div className="forms-wrap">

                            <form onSubmit={handleSubmission}>
                                <div className="logo">
                                    <img src={Logo} alt="logo"></img>
                                    <h1>{TodoLogo}</h1>
                                </div>

                                <div className="heading-form">
                                    <h3>{WelcomeBack}</h3>
                                    <h6>
                                        {NotRegistered}
                                        <Link to="/" className="toggle">
                                            {SignUp}
                                        </Link>
                                    </h6>
                                </div>

                                <div className="actual-form">
                                    {displayInputField("text", "email")}
                                    {displayInputField("password", "password")}
                                    <p className="error">{errorMsg}</p>

                                    <input
                                        type="submit"
                                        value="Sign In"
                                        className="sign-btn"
                                    />
                                </div>
                            </form>
                        </div>

                        <div className="image">
                            <img src={Todo} alt="profile" className="img-show-1" />
                        </div>
                    </div>
                </div>
            </main>
        </React.Fragment>
    );
};

export default Login;
