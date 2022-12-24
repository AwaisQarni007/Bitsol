import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const AddUserForm = () => {
  const [formdataState, setformdataState] = useState({});
  const Navigate = useNavigate();
  const mutation = useMutation(async (newUser) => {
    const rawResponsce = await fetch("http://localhost:3004/posts", {
      method: "POST",
      headers: {
        accept: "applicaion/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    // const content = await rawResponsce.json();
    // console.log("Response from the enpoint recievend", content);
  });
  const handleSubmit = (e) => {
    // e.preventDefault();
    const formdata = {
      id: parseInt(e.target["id"].value),
      firstName: e.target["firstName"].value,
      lastName: e.target["lastName"].value,
      userName: e.target["userName"].value,
    };
    setformdataState(formdata);
    mutation.mutate(formdata);
    Navigate("/");
  };
  return (
    <div className="p-4 border w-25 mx-auto my-5">
      <h1 className="p-3"> Add User Form</h1>
      <Form className="col-lg-12" onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="id" className="">
            ID
          </Label>
          <Input type="id" name="id" id="id" className="" />
        </FormGroup>{" "}
        <FormGroup>
          <Label for="firstName" className="">
            First Name
          </Label>
          <Input
            type="firstName"
            name="firstName"
            id="firstName"
            placeholder="Enter Your First Name"
            className=""
          />
        </FormGroup>{" "}
        <FormGroup>
          <Label for="lastName" className="">
            Last Name
          </Label>
          <Input
            type="lastName"
            name="lastName"
            id="lastName"
            placeholder="Enter Your Last Name"
            className=""
          />
        </FormGroup>{" "}
        <FormGroup>
          <Label for="userName" className="">
            User Name
          </Label>
          <Input
            type="userName"
            name="userName"
            id="userName"
            placeholder="Enter Your User Name"
            className=""
          />
        </FormGroup>{" "}
        <Button className="btn btn-dark w-100">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddUserForm;
