import { Formik } from "formik";
import Link from "next/link";
import InputGroup from "../src/components/form/InputGroup";
import Layout from "../src/layouts/Layout";
import PageTitle from "../src/layouts/PageTitle";
import { registerSchema } from "../src/utils/yupModal";

const Register = () => {
    function RegisterPost() {
        const fname = document.getElementById("fname");
        const lname = document.getElementById("lname");
        const phone = document.getElementById("number");
        const password = document.getElementById("password");
        const password2 = document.getElementById("password2");

        const obj = {
            user_first_name: fname.value,
            user_last_name: lname.value,
            user_phone: phone.value,
            user_password: password.value,
        };
        fetch("https://google.com", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
        })
            .then((res) => {
                let response = JSON.parse(res);
                localStorage.setItem("token", response);
            })
            .catch((error) => {
                //handle error
                console.log(error);
            });
    }
    return (
        <Layout sticky container textCenter footerBg>
            <main>
                <PageTitle active="register" pageHeading="Register" />
                <div className="container s-register">
                    <form className="form" id="form">
                        <h2>Register with Us</h2>
                        <div className="form-control">
                            <label htmlFor="username">Firstname</label>
                            <input
                                type="username"
                                id="fname"
                                placeholder="Enter username"
                            />
                            <small>Error message</small>
                        </div>
                        <div className="form-control">
                            <label htmlFor="username">Lastname</label>
                            <input
                                type="username"
                                id="lname"
                                placeholder="Enter username"
                            />
                            <small>Error message</small>
                        </div>
                        <div className="form-control">
                            <label htmlFor="email">Phone Number</label>
                            <input
                                type="number"
                                id="number"
                                placeholder="Enter your phone number"
                            />
                            <small>Error message</small>
                        </div>
                        <div className="form-control">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter password"
                            />
                            <small>Error message</small>
                        </div>
                        <div className="form-control">
                            <label htmlFor="password2">Confirm Password</label>
                            <input
                                type="password"
                                id="password2"
                                placeholder="Enter password again"
                            />
                            <small>Error message</small>
                        </div>
                        <button type="button" onClick={RegisterPost}>
                            Submit
                        </button>
                    </form>
                </div>
            </main>
        </Layout>
    );
};

export default Register;
