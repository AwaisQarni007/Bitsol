import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Spinner } from "reactstrap";
import { useMutation, useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";

const Form1 = () => {
  const dataID = useParams();
  const navigate = useNavigate();

  const mutation = useMutation(
    async (newPost) => {
      const rawResponse = await fetch(
        `http://localhost:3004/posts/${dataID.id}`,
        {
          method: "put",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPost),
        }
      );
      const content = await rawResponse.json();
      console.log("response from endpoint is ", content);
    },
    {
      onSuccess: () => {
        return navigate("/");
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("elements", e.target.elements);

    const { id, firstname, lastname, username } = e.target.elements;

    let obj = {
      id: id.value,
      firstName: firstname.value,
      lastName: lastname.value,
      userName: username.value,
    };

    mutation.mutate(obj);
  };

  const fetchData = async () => {
    const data = await fetch(`http://localhost:3004/posts/${dataID.id}`);
    return data.json();
  };

  const query = useQuery("update", fetchData);
  console.log("data", dataID, query.data);

  return (
    <div className="m-auto my-5 p-5 border border-info w-50">
      {
        query.isLoading ? (
          <Spinner size="lg" color="primary">
            Loading....
          </Spinner>
        ) : // {

        query.isSuccess ? (
          <Form onSubmit={handleSubmit}>
            <Label tag="h4">Signup Form</Label>
            <FormGroup>
              <Label for="id">ID</Label>
              <Input
                type="text"
                name="id"
                id="id"
                placeholder="Enter your ID"
                defaultValue={query.data?.id}
              />
            </FormGroup>
            <FormGroup>
              <Label for="FirstName">FirstName</Label>
              <Input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter your firstname"
                defaultValue={query.data?.firstName}
              />
            </FormGroup>
            <FormGroup>
              <Label for="LastName">LastName</Label>
              <Input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter your lastname"
                defaultValue={query.data?.lastName}
              />
            </FormGroup>
            <FormGroup>
              <Label for="UserName">UserName</Label>
              <Input
                type="text"
                name="userName"
                id="userName"
                placeholder="Enter your username"
                defaultValue={query.data?.userName}
              />
            </FormGroup>

            <Button type="submit">Update</Button>
          </Form>
        ) : null
        // }
      }
    </div>
  );
};

export default Form1;
