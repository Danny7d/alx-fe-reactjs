import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

function FormikForm() {
  return (
    <div>
      <h1>User Form</h1>

      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          // Manual validation conditions
          if (!values.email) {
            console.log("Email is required");
            return;
          }
          if (!values.password) {
            console.log("Password is required");
            return;
          }

          console.log("Submitted:", values);
          resetForm();
        }}
      >
        {({ values }) => (
          <Form>
            <label htmlFor="name">Name</label>
            <br />
            <Field
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
            />
            <ErrorMessage name="name" component="p" style={{ color: "red" }} />
            {/* Live value display */}
            <p>Name: {values.name}</p>
            <label htmlFor="email">Email</label>
            <br />
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
            <ErrorMessage name="email" component="p" style={{ color: "red" }} />{" "}
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
            <ErrorMessage
              name="password"
              component="p"
              style={{ color: "red" }}
            />{" "}
            <br />
            <button type="submit" style={{ marginTop: "10px" }}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikForm;
