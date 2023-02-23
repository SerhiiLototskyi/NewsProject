import React from 'react';
import {SignIn, SignInFormWrapper} from "../../styleComponents/StyleComponents";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useFormik} from "formik";
import {loginTC} from "../../state/reducers/auth-reducer";
import {useAppDispatch, useAppSelector} from "../../state/hooks";
import {Navigate} from "react-router-dom";

type FormikErrorType = {
    username?: string;
    password?: string;
};
type FormikValues = {
    username: string;
    password: string;
};

export const Login = () => {
    let dispatch = useAppDispatch()

    //подтягиваем значение из редюсера: залогинен/неЗалогинен
    let isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validate: (values: FormikValues) => {
            const errors: FormikErrorType = {};
            if (!values.username) {
                errors.username = "Required";
            } else if (
                values.username !== 'admin'
            ) {
                errors.username = "Invalid username address";
            }
            if (!values.password) {
                errors.password = "Required";
            } else if (values.password !== '12345') {
                errors.password = "Invalid password ";
            }
            return errors;
        },
        onSubmit: (values: FormikValues) => {
            dispatch(loginTC());
            formik.resetForm();
        },
    });

    if (isLoggedIn) {
        return <Navigate to={"/profile"}/>;
    }
    return (
        <SignInFormWrapper>
            <SignIn>Sign In</SignIn>
            <Grid container justifyContent={"center"}>
                <Grid item justifyContent={"center"}>
                    <form onSubmit={formik.handleSubmit}>
                        <FormControl>
                            <FormGroup>
                                <TextField
                                    label="Username"
                                    margin="normal"
                                    {...formik.getFieldProps("username")}
                                />
                                {formik.touched.username && formik.errors.username ? (
                                    <div style={{color: "red"}}>{formik.errors.username}</div>
                                ) : null}
                                <TextField
                                    type="password"
                                    label="Password"
                                    margin="normal"
                                    {...formik.getFieldProps("password")}
                                />
                                {formik.touched.password && formik.errors.password ? (
                                    <div style={{color: "red"}}>{formik.errors.password}</div>
                                ) : null}

                                <Button type={"submit"} variant={"contained"} color={"primary"}>
                                    Sign in
                                </Button>
                            </FormGroup>
                        </FormControl>
                    </form>
                </Grid>
            </Grid>
        </SignInFormWrapper>
    );
};

