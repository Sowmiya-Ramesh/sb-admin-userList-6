import React, { useEffect, useState } from "react";

export default function ColorCards() {
  const [color, setColor] = useState([]);

  function getColor() {
    fetch("https://60fcdb7a1fa9e90017c70cd7.mockapi.io/color", {
      method: "GET"
    })
      .then((data) => data.json())
      .then((data) => setColor(data))
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
  }
  useEffect(() => {
    getColor();
  }, []);

  return (
    <>
      {color.map((data) => {
        return (
          <div className="col-lg-3 mb-4">
            <div
              className="card text-white shadow"
              style={{ backgroundColor: data.code }}
            >
              <div className="card-body text-white">
                {data.color}
                <div className="text-white-50 small">{data.code}</div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
