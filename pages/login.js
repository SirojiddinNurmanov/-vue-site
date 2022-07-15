import { Formik } from "formik";
import Link from "next/link";
import { useState } from "react";
import InputGroup from "../src/components/form/InputGroup";
import Layout from "../src/layouts/Layout";
import PageTitle from "../src/layouts/PageTitle";
import { loginSchema } from "../src/utils/yupModal";

// import { useRouter } from "next/router";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as Yup from "yup";
// import { userService, alertService } from "../services";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <Layout sticky textCenter footerBg container>
            <main>
                <PageTitle active="Login" pageHeading="Login" />
                <section className="login-area pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="basic-login">
                                    <h3 className="text-center mb-60">
                                        Login From Here
                                    </h3>
                                    <Formik
                                        initialValues={loginSchema.initialValue}
                                        validationSchema={loginSchema.schema}
                                        onSubmit={(
                                            values,
                                            { setSubmitting }
                                        ) => {
                                            setTimeout(() => {
                                                alert(
                                                    JSON.stringify(
                                                        values,
                                                        null,
                                                        2
                                                    )
                                                );
                                                setSubmitting(false);
                                            }, 400);
                                        }}
                                    >
                                        {({
                                            values,
                                            errors,
                                            handleChange,
                                            handleBlur,
                                            handleSubmit,
                                            isSubmitting,
                                        }) => (
                                            <form onSubmit={handleSubmit}>
                                                <InputGroup
                                                    label="Phone Number"
                                                    id="phone"
                                                    name="phone"
                                                    type="number"
                                                    placeholder="Enter Your Phone Number..."
                                                    values={values.phone}
                                                    errors={errors.phone}
                                                    handleBlur={handleBlur}
                                                    handleChange={handleChange}
                                                />
                                                <InputGroup
                                                    label="Password"
                                                    id="password"
                                                    name="password"
                                                    type="password"
                                                    placeholder="Enter password..."
                                                    values={values.password}
                                                    errors={errors.password}
                                                    handleBlur={handleBlur}
                                                    handleChange={handleChange}
                                                />
                                                {/* <div className="login-action mb-20 fix">
                                                    <span className="log-rem f-left">
                                                        <input
                                                            id="remember"
                                                            type="checkbox"
                                                        />
                                                        <label htmlFor="remember">
                                                            Remember me!
                                                        </label>
                                                    </span>
                                                    <span className="forgot-login f-right">
                                                        <a
                                                            href="#"
                                                            onClick={(e) =>
                                                                e.preventDefault()
                                                            }
                                                        >
                                                            Lost your password?
                                                        </a>
                                                    </span>
                                                </div> */}

                                                <button
                                                    disabled={isSubmitting}
                                                    className="btn theme-btn-2 w-100"
                                                >
                                                    Login Now
                                                </button>
                                                <div className="or-divide">
                                                    <span>or</span>
                                                </div>
                                                <Link href="/register">
                                                    <a className="btn theme-btn w-100">
                                                        Register Now
                                                    </a>
                                                </Link>
                                            </form>
                                        )}
                                    </Formik>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
};

export default Login;
