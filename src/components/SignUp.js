/*eslint-disable*/

import React, { useState } from "react";
// import axios from "axios";

import { useHistory } from "react-router";


function RegistrationForm(props) {
  const history = useHistory();

  let onSubmitTemplate = {
    name: "",
    email: "",
    password: "",
    phone: "",
    address:"",
    successMessage: null,
  };
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address:"",
    successMessage: null,
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const alreadyExist = () => {
    history.push('/sign-in');
  };

  const sendDetailsToServer = (e) => {
    e.preventDefault();
    console.log(state);
    // if (state.name && state.email && state.password && state.phone !== "") {
    //   console.log(state);
    //   axios
    //     .post("https://entemadb.entema-software.com/insertHotelUserData", {
    //       userFullName: state.name,
    //       userPhoneNumber: state.phone,
    //       userEmail: state.email,
    //       userPwd: state.password,
    //       //userCreatedDate: state.userCreatedDate,
    //     })
    //     .then(() => {
    //       alert("Submitted");
    //       setState(onSubmitTemplate);
    //       redirectToHome();
    //     });
    // }
  };
  const redirectToHome = () => {
    //props.updateTitle('Home')
    history.push("/");
  };

  const redirectToLogin = () => {
    //props.updateTitle('Login')
    history.push("/login");
  };
  return (
    <>
      
        <div className="signup">
          
          <div className="appForm">
           
            <div className="formCenter">
              <form className="formFields">
                <div className="formField">
                  <label className="formFieldLabel" htmlFor="name">
                    {" "}
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="formFieldInput"
                    id="name"
                    placeholder="Enter Name"
                    value={state.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="formField">
                  <label className="formFieldLabel" htmlFor="phone">
                    Phone Number{" "}
                  </label>
                  <input
                    type="number"
                    className="formFieldInput"
                    id="phone"
                    placeholder="Enter phone number"
                    value={state.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="formField">
                  <label className="formFieldLabel" htmlFor="password">
                    Password{" "}
                  </label>
                  <input
                    type="password"
                    className="formFieldInput"
                    id="password"
                    placeholder="Password"
                    value={state.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="formField">
                  <label className="formFieldLabel" htmlFor="email">
                    E-Mail{" "}
                  </label>
                  <input
                    type="email"
                    className="formFieldInput"
                    id="email"
                    value={state.email}
                    placeholder="Enter email"
                    onChange={handleChange}
                  />
                </div>

                <div className="formField">
                  <label className="formFieldLabel" htmlFor="address">
                    Address{" "}
                  </label>
                  <input
                    type="text"
                    className="formFieldInput"
                    id="address"
                    value={state.address}
                    placeholder="Enter address"
                    onChange={handleChange}
                  />
                </div>

                <div className="formField">
                  <button className="btn-primary" onClick={sendDetailsToServer}>
                    Sign Up
                  </button>{" "}
                  <h6 style={{ paddingTop: "10px" }}>
                    if u already register click on
                    <text onClick={()=>history.push("/login")} style={{color:"blue", cursor:"pointer"}}> Sign In.</text></h6>

                </div>
              </form>
            </div>



          </div>
        </div>
      
    </>
  )
}

export default RegistrationForm;