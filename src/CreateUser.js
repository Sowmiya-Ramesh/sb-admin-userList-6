import React, { useState } from "react";
import { Button, Typography, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";

function CreateUser() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [desc, setDesc] = useState("");
  const [mailId, setMailId] = useState("");
  const history = useHistory();

  const handleSubmit = () => {
    addProfile(name, mailId, contact, desc);
  };
  function addProfile(name, mailId, contact, desc) {
    fetch("https://616e34a2a83a850017caa86c.mockapi.io/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        mailId,
        desc,
        contact
      })
    })
      .then((data) => data.json())
      .then((data) => {
        history.push("/profiles");
        alert("New profile added !");
      })
      .catch((e) => console.log(e));
  }

  return (
    <div
      className="form"
      style={{ padding: "10px", maxWidth: "600px", margin: "auto" }}
    >
      <br />
      <br />
      <Typography variant="h5" align="center" color="textPrimary" gutterBottom>
        Create new user here ..!
      </Typography>
      <br />
      <br />
      <div
        className="vote-form"
        style={{ display: "flex", flexDirection: "column", gap: "8px" }}
      >
        <TextField
          className="input"
          style={{ padding: "10px" }}
          multiline
          id="outlined-multiline-static"
          label="Enter Name"
          rows={2}
          type="text"
          name="name"
          value={name}
          onChange={(data) => setName(data.target.value)}
        />
        <TextField
          className="input"
          style={{ padding: "10px" }}
          multiline
          id="outlined-multiline-static"
          label="Enter Mail id"
          rows={2}
          type="text"
          name="email"
          value={mailId}
          onChange={(data) => setMailId(data.target.value)}
        />

        <TextField
          className="input"
          multiline
          id="outlined-multiline-static"
          label="Enter Contact details"
          type="text"
          name="contact"
          value={contact}
          onChange={(data) => setContact(data.target.value)}
          rows={2}
        />

        <TextField
          className="input"
          multiline
          id="outlined-multiline-static"
          label="Enter description"
          type="text"
          name="desc"
          value={desc}
          onChange={(data) => setDesc(data.target.value)}
          rows={2}
        />
        <br />
        <br />

        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleSubmit}
          >
            Add User
          </Button>
          <Link to="/" className="btn btn-danger ml-2">
            Cancel
          </Link>
        </Stack>
      </div>
    </div>
  );
}
export default CreateUser;
