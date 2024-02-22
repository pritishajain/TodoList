import React ,{ useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/actions/to-do-actions";
import { IsignUpValue } from "../interface/signup-login-interface";
import { TodoLogo, GetStarted, Account, SignIn } from "../assets/constants/constant";
import "../assets/css/signup.css";
import Logo from "../assets/images/logo.png";
import Todo from "../assets/images/todo.png";


const SignUp = () => {
  const initialState: IsignUpValue = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [input, setInput] = useState<IsignUpValue>(initialState);
  const [error, setError] = useState<IsignUpValue>(initialState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    setInput({ ...input, [name]: value });
  }

  const validateInput = (e: React.FocusEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    setError((error) => {
      const stateObj = { ...error, [name]: "" };
      switch (name) {
        case "name":
          if (!value) {
            stateObj[name] = "Please enter name";
          }
          break;

        case "email":
          if (!value) {
            stateObj[name] = "Please enter email";
          } else if (!value.match("@")) {
            stateObj[name] = "Please add @ in email";
          }
          break;

        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password";
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password";
          } else if (value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };

  const handleSubmission = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errorValues = Object.values(error);
    const emptyValue = errorValues.every(value => value === '');

    if (emptyValue && (input.name && input.email && input.password && input.confirmPassword)) {
      dispatch(setUserData(input.name, input.email, input.password));
      navigate("/login");
    }
  };

  const displayInputField = (type: string, name: string, value: string) => {
    return (
      <div className="input-wrap">
        <input
          type={type}
          name={name}
          value={value}
          className="input-field"
          autoComplete="off"
          placeholder={name}
          onBlur={validateInput}
          onChange={handleInputChange}
        />
      </div>
    )
  }

  return (
    <React.Fragment>
      <div className="box">
        <div className="inner-box1">
          <div className="image">
            <img src={Todo} alt="profile" className="img-show-1" />
          </div>

          <div className="forms-wrap">
            <form onSubmit={handleSubmission}>
              <div className="logo">
                <img src={Logo} alt="logo"></img>
                <h1>{TodoLogo}</h1>
              </div>

              <div className="heading-form">
                <h3>{GetStarted}</h3>
                <h6>
                  {Account}
                  <Link to="/login" className="toggle">
                    {SignIn}
                  </Link>
                </h6>
              </div>

              <div className="actual-form">
                {displayInputField("text", "name", input.name)}
                {error.name && <span className="error">{error.name}</span>}
                {displayInputField("text", "email", input.email)}
                {error.email && <span className="error">{error.email}</span>}
                {displayInputField("password", "password", input.password)}
                {error.password && (<span className="error">{error.password}</span>)}
                {displayInputField("password", "confirmPassword", input.confirmPassword)}
                {error.confirmPassword && (<span className="error">{error.confirmPassword}</span>)}

                <input
                  type="submit"
                  value="Sign Up"
                  className="sign-btn"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default SignUp;
