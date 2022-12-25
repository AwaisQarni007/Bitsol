import React, { useReducer } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { initialState, reducer } from "../Components/reducerForm";
const ReducerForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const action = {
    type: "changeValue",
    field: "",
    value: "",
  };
  const handleSubmit = () => {};
  const handleReset = () => {};
  console.log(state);
  return (
    <>
      <div className="w-25 mx-auto my-5">
        <h1 className="text-center">Reducer Form</h1>
        <Form className="col-lg-12">
          <FormGroup>
            <Label for="firstName" className="">
              First Name
            </Label>
            <Input
              type="firstName"
              name="firstName"
              id="firstName"
              placeholder="Enter Your First Name"
              value={state.firstName}
              onChange={(e) => {
                dispatch({
                  type: "changeValue",
                  field: e.target.name,
                  value: e.target.value,
                });
              }}
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
              value={state.lastName}
              onChange={(e) => {
                dispatch({
                  type: "changeValue",
                  field: e.target.name,
                  value: e.target.value,
                });
              }}
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
              value={state.userName}
              onChange={(e) => {
                dispatch({
                  type: "changeValue",
                  field: e.target.name,
                  value: e.target.value,
                });
              }}
              className=""
            />
          </FormGroup>{" "}
          <FormGroup>
            <Label for="email" className="">
              Email
            </Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your User Name"
              value={state.email}
              onChange={(e) => {
                dispatch({
                  type: "changeValue",
                  field: e.target.name,
                  value: e.target.value,
                });
              }}
              className=""
            />
          </FormGroup>{" "}
          <Button className="btn btn-dark w-50" onClick={handleSubmit}>
            Submit
          </Button>
          <Button
            className="btn btn-dark w-50"
            onClick={(e) => {
              dispatch({
                type: "reset",
              });
            }}
          >
            Reset
          </Button>
        </Form>{" "}
      </div>
    </>
  );
};

export default ReducerForm;
