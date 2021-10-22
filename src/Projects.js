import React, { useEffect, useState } from "react";

export default function Projects() {
  const [project, setProject] = useState([]);

  function getProject() {
    fetch("https://60fcdb7a1fa9e90017c70cd7.mockapi.io/projects", {
      method: "GET"
    })
      .then((data) => data.json())
      .then((data) => setProject(data))
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
  }
  useEffect(() => {
    getProject();
  }, []);

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
        </div>
        <div className="card-body">
          {project.map((data) => {
            return (
              <>
                <h4 className="small font-weight-bold">
                  {data.name}{" "}
                  <span className="float-right">
                    {data.percent === "100%" ? "Complete!" : data.percent}
                  </span>
                </h4>
                <div className="progress mb-4">
                  <div
                    className={`progress-bar bg-${data.color}`}
                    role="progressbar"
                    style={{ width: data.percent }}
                    aria-valuenow={data.percent}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
