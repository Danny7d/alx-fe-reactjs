import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters"),
  email: Yup.string().required("Email is required").email("Invalid Email"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

function FormikForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1>User Form</h1>

      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm, setErrors }) => {
          // Manual validation conditions
          if (!username) {
            setErrors({ name: "Name is required" });
            return;
          }
          if (!email) {
            setErrors({ email: "Email is required" });
            return;
          }
          if (!password) {
            setErrors({ password: "Password is required" });
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
