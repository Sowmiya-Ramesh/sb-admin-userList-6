import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Stack from "@mui/material/Stack";

export default function Users() {
  const history = useHistory();
  const [users, setUsers] = useState([]);

  function getUser() {
    fetch("https://616e34a2a83a850017caa86c.mockapi.io/profile", {
      method: "GET"
    })
      .then((data) => data.json())
      .then((data) => setUsers(data))
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
  }

  useEffect(() => {
    getUser();
  }, []);

  function editUser(id) {
    history.push(`/edit-user/${id}`);
  }

  function deleteUser(id) {
    setUsers([]);
    fetch(`https://616e34a2a83a850017caa86c.mockapi.io/profile/${id}`, {
      method: "DELETE"
    })
      .then((data) => data.json())
      .then((data) => alert("Deleted successfully"))
      .then((data) => getUser())
      .catch((e) => console.log(e));
  }

  return (
    <div>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Table of Users List</h1>
      </div>

      <div className="card shadow mb-4"></div>
      <div className="card-body">
        <div className="table-responsive">
          <table
            className="table table-striped "
            id="dataTable"
            width="100%"
            cellspacing="0"
          >
            <thead className="thead-dark">
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Description</th>
                <th>Head Quarters</th>
                <th>Contact</th>
                <th>Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((data) => {
                return (
                  <tr>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.desc}</td>
                    <td>{data.headQuaters}</td>
                    <td>{data.contact}</td>
                    <td>{data.mailId}</td>
                    <td>
                      <Stack direction="row" spacing={2}>
                        <Button
                          onClick={() => editUser(data.id)}
                          variant="contained"
                          color="primary"
                        >
                          Edit
                        </Button>
                        <Button
                          onClick={() => deleteUser(data.id)}
                          color="secondary"
                          variant="contained"
                        >
                          Delete
                        </Button>{" "}
                        <Link to="/" className="btn btn-danger ml-2">
                          Cancel
                        </Link>
                      </Stack>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
