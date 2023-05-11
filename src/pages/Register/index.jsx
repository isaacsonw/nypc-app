import React from "react";
import Form from "../../components/Form";

const formData = [
  {
    label: "First Name",
    type: "text",
    name: "firstName",
    placeholder: "Enter your first name"
  },
  {
    label: "Last Name",
    type: "text",
    name: "lastName",
    placeholder: "Enter your last name"
  },
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
  },
  {
    label: "Confirm Password",
    type: "password",
    name: "cpassword",
    placeholder: "Confirm your password"
  }
];

const Register = () => {
  return (
    <div>
      <Form
        formData={formData}
        headerText='Register'
        subtext='Praise the Lord! Please register to start using the platform.'
      />
    </div>
  );
};

export default Register;
