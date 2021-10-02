/*eslint-disable*/

import React, { useState } from "react";
import axios from "axios";

import { useHistory } from "react-router";


function RegistrationForm(props) {
  const history = useHistory();

  const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const [phone,setPhone]=useState();
  const [address,setAddress]=useState();
  const [successMessage,setSuccessMessage]=useState(false)

  const handleChange = (e) => {
   
      //console.log(e.target.value);
   
      const input = e.target.name;
      if (input === "name") {
        setName(e.target.value);
      } else if (input === "email") {
        setEmail(e.target.value);
      } else if (input === "password") {
        setPassword(e.target.value);
      } else if (input === "phone") {
        setPhone(e.target.value);
      } else if (input === "address") {
        setAddress(e.target.value);
      } else if (input === "successMessage") {
        setSuccessMessage(e.target.value);
      }
    };
  
  const sendDetailsToServer = (e) => {
    e.preventDefault();
    testOnlurr();

    console.log("Submit called");
    if (name && email && address && password && phone !== "") {
      // console.log(state);
      axios
        .post("http://localhost:3003/insertcustomer", {
          customername: name,
          customerphone: phone,
          customeraddress: address,
          customeremail: email,
          customerpassword: password,
        })
        .then(() => {
          alert("Submitted");
          setState(onSubmitTemplate);
          redirectToHome();
        });
    }
  };
  const redirectToHome = () => {
    //props.updateTitle('Home')
    history.push("/login");
  };

  const testOnlurr = () => {
    console.log('Blurr Called')
    axios
      .post("http://localhost:3003/getCustomerEmailValidation", {
        customeremail:  email,
      })
      .then((res) => {
        if (res.data[0].ROWCOUNT > 0) {
          alert("Client Already Exist");
          setEmail("")
        }
      });
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
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e)=>handleChange(e)}
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
                    name="phone"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={(e)=>handleChange(e)}
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
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>handleChange(e)}
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
                    name="email"
                    onBlur={testOnlurr}
                    value={email}
                    placeholder="Enter email"
                    onChange={(e)=>handleChange(e)}
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
                    name="address"
                    value={address}
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