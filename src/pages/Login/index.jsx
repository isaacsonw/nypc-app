import React from "react";
import Form from "../../components/Form";

const formData = [
  {
    label: "Email",
    type: "email",
    name: "email",
    placeholder: "Enter your email"
  },
  {
    label: "Password",
    type: "password",
    name: "password",
    placeholder: "Enter your password"
  }
];

const Login = () => {
  return (
    <div>
      <Form
        formData={formData}
        headerText='Login'
        subtext='Wellcome back! Please login to your account.'
      />
    </div>
  );
};

export default Login;
