import { useState } from "react";
import validation from "../utils/validation";

export default function Form(props) {
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        setUserData({...userData, [event.target.name]: event.target.value});
        setErrors(
            validation({
              ...userData,
              [event.target.name]: event.target.value
            })
        )
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.login(userData, setUserData);
    }

    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <img src="title.png" alt="Rick And Morty" className="form-logo"/>
                <label htmlFor="email">Email </label>
                <input
                    type="text"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                />
                <p className="form-error">{ errors.email ? errors.email : null }</p>

                <label htmlFor="password">Password </label>
                <input 
                    type="password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                />
                <p className="form-error">{ errors.password ? errors.password : null }</p>

                <button 
                    type="submit"
                    className="submit"
                    disabled={ !userData.email || errors.email || errors.password }
                ><span>Submit</span><i></i></button>
            </form>
        </div>
    );
 }
 