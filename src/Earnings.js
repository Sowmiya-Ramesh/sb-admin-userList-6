import React, { useEffect, useState } from "react";

export default function Earnings() {
  const [project, setProject] = useState([]);

  function getProject() {
    fetch("https://60fcdb7a1fa9e90017c70cd7.mockapi.io/earnings", {
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
    <div className="row">
      {project.map((data, index) => {
        return (
          <div className="col-xl-3 col-md-6 mb-4">
            <div className={`card border-left-${data.color} shadow h-100 py-2`}>
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      {data.name}
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      {data.price}
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-calendar fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-info shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                  Tasks
                </div>
                <div className="row no-gutters align-items-center">
                  <div className="col-auto">
                    <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                      50%
                    </div>
                  </div>
                  <div className="col">
                    <div className="progress progress-sm mr-2">
                      <div
                        className="progress-bar bg-info"
                        role="progressbar"
                        style={{ width: "50%" }}
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-auto">
                <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
