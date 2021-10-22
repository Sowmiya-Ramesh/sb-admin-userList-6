import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import { useHistory } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@material-ui/core";
//import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Stack from "@mui/material/Stack";

export default function Profiles() {
  const [profile, setProfile] = useState([]);

  const history = useHistory();

  function getProfile() {
    fetch("https://616e34a2a83a850017caa86c.mockapi.io/profile", {
      method: "GET"
    })
      .then((data) => data.json())
      .then((data) => setProfile(data))
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
  }
  useEffect(() => {
    getProfile();
  }, []);

  const deleteProfile = (id) => {
    getProfile([]);
    fetch(`https://616e34a2a83a850017caa86c.mockapi.io/profile/${id}`, {
      method: "DELETE"
    })
      .then((data) => data.json())
      .then((data) => {
        getProfile();
        alert("Profile successfully deleted !");
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="container">
      <div className="row">
        {profile.map((data) => {
          return (
            <div className="col-4" style={{ paddingBlockEnd: "20px" }}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={data.avatar}
                    alt="image"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {data.name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      {data.headQuaters}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {data.desc}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Stack direction="row" spacing={2}>
                    <Button
                      className="button"
                      variant="contained"
                      color="primary"
                      to="/edit-profile/:id"
                      onClick={() => history.push(`/edit-profile/${data.id}`)}
                    >
                      Edit
                    </Button>

                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={() => deleteProfile(data.id)}
                    >
                      {" "}
                      Delete{" "}
                    </Button>
                  </Stack>
                </CardActions>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
