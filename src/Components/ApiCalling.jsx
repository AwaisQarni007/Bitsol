import React, { useCallback, useState } from "react";
import { useMutation, useQuery } from "react-query";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Spinner,
  Table,
} from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
const GetData = async () => {
  const value = await fetch("http://localhost:3004/posts");
  // console.log("Getting Data");
  return value.json();
};
const ApiCalling = () => {
  const Navigate = useNavigate();
  const [deleteID, setdeleteID] = useState(1);
  const [modal, setModal] = useState(false);

  const mutation = useMutation(async (id) => {
    const rawResponsce = await fetch(`http://localhost:3004/posts/${id}`, {
      method: "DELETE",
    });
    const content = await rawResponsce.json();
    Navigate("/");

    // console.log("Response from the enpoint recievend", content);
  });
  const handleDelete = useCallback(() => {
    mutation.mutate(deleteID);
  }, [deleteID, mutation]);
  // const handleDelete=()=>{}
  const query = useQuery("PostsbyIds", GetData);
  // console.log(query);
  return (
    <>
      <div className="w-75 border-2 m-auto">
        <h1>API Calling</h1>
        {query.isLoading ? (
          <Button className="border bg-transparent text-black" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
              // className="text-black"
            />
            Loading...
          </Button>
        ) : null}
        <Link className="btn border m-3" to="/AddUserForm">
          Add New
        </Link>
        <Link className="btn border m-3" to="/stopWatch">
          Stop Watch
        </Link>
        <Link className="btn border m-3" to="/inputFocus">
          Input Focus
        </Link>
        <Link className="btn border m-3" to="/reducerForm">
          Reducer Form
        </Link>
        <Table className="w-75">
          <thead>
            <tr className="bg-danger">
              <th className="border border-danger ">Sr. #</th>
              <th className="border border-danger">First Name</th>
              <th className="border border-danger">Last Name</th>
              <th className="border border-danger">Username</th>
              <th className="border border-danger">Details</th>
              <th className="border border-danger">Delete</th>
              <th className="border border-danger">Update</th>
            </tr>
          </thead>
          <tbody className="bg-success">
            {query.isSuccess
              ? query.data.map((posts, index) => {
                  return (
                    <tr key={index}>
                      <td className="border border-danger">{posts.id}</td>
                      <td className="border border-danger">
                        {posts.firstName}
                      </td>
                      <td className="border border-danger">{posts.lastName}</td>
                      <td className="border border-danger">{posts.userName}</td>
                      <td className="border border-danger ">
                        <Link to={`/posts/${posts.id}`} className="text-black">
                          View Details
                        </Link>
                      </td>
                      <td className="border border-danger ">
                        <Button
                          className="border-danger bg-danger text-black"
                          onClick={() => {
                            setModal(!modal);
                            setdeleteID(posts.id);
                          }}
                        >
                          Delete
                        </Button>
                      </td>
                      <td className="border border-danger ">
                        <Button
                          className="border-danger btn btn-info text-black"
                          onClick={() => {
                            Navigate(`/editForm/${posts.id}`);
                          }}
                        >
                          Update
                        </Button>
                      </td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </Table>
      </div>
      <Modal isOpen={modal}>
        <ModalHeader>Modal title</ModalHeader>
        <ModalBody>Are you Sure??</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleDelete}>
            Proceed
          </Button>{" "}
          <Button
            color="secondary"
            onClick={() => {
              setModal(!modal);
              // console.log("Delete Cancelled");
            }}
          >
            Abort
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ApiCalling;
