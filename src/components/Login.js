/*eslint-disable*/
import React, { Component, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import axios from "axios";
import { login } from './../store/reducers/useSlice';

function SignInForm() {
    const dispatch = useDispatch()
    const history = useHistory();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleChange = (event) => {
        let target = event.target;
        let value = target.type === "checkbox" ? target.checked : target.value;
        let name = target.name;
    }


    const afterSubmit = (dataSet) => {
        //console.log()
        // localStorage.setItem('userName',JSON.stringify(dataSet[0].USER_NAME));
        // localStorage.setItem('userRole',JSON.stringify(dataSet[0].userrole));

        let activities = "";
        let userDetails = "";

        if (dataSet.length > 0) {
            for (var i = 0; i < dataSet.length; i++) {
                activities = dataSet[i].ACTIVITY_NAME + "," + activities;
            }
            userDetails = {
                userName: dataSet[0].USER_NAME,
                role: dataSet[0].userrole,
                activities,
            };
            localStorage.setItem("userDetails", (dataSet[0].USER_EMAIL));
            localStorage.setItem("userName", (dataSet[0].USER_FNAME));
            //console.log("activities - : ", activities)
            history.push('/');
            //setShow(!show);
        }
        //window.location.reload();
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // console.log(this.state);
        axios
            .post("http://localhost:3003/validateUserDetails", {
                customeremail: email
            })
            .then((res) => {
                console.log(res.data);
                if (password === res.data[0].CUSTOMER_PASSWORD) {
                    dispatch(login({
                        user: email,
                        password: password,
                        phone:  res.data[0].CUSTOMER_PHONE,
                        address: res.data[0].CUSTOMER_ADDRESS,
                        loggedIn: true
                    })
                    );

                }
                //this.notify();
                //this.afterSubmit(res.data);
            });
    }

    const redirectTo = () => {
        history.push("/Reg");
    }

    return (
        <>

            <div className="signup">
                <div className="appForm">
                    <div className="col-sm-14">
                        <div className="formCenter">
                            <form className="formFields">
                                <div className="formField">
                                    <label className="formFieldLabel" htmlFor="email">
                                        E-Mail Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="formFieldInput"
                                        placeholder="Enter your email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="formField">
                                    <label className="formFieldLabel" htmlFor="password">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        className="formFieldInput"
                                        placeholder="Enter your password"
                                        name="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                <div className="formField">
                                    <button className="btn-primary" onClick={(e) => handleSubmit(e)}>
                                        Sign In
                                    </button>{" "}
                                    <h6 style={{ paddingTop: "10px" }}>
                                        if u didn't register click on
                                        <text onClick={() => history.push("/signup")} style={{ color: "blue", cursor: "pointer" }}> Sign up.</text>
                                    </h6>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

};

export default SignInForm;