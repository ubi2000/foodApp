import React from "react";

export default function Card() {
  return (
    <div>
      <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
        <img className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">card title</h5>
          <p className="card-text">
            This is some random text. This is description.
          </p>
          <div className="container w-100 p-0">
            <select className="m-2 h-100 bg-success rounded">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 bg-success rounded">
              <option value="half">Half</option>
              <option value="Full">Full</option>
            </select>
            <div className=" d-inline ms-2 h-100 fs-5">total Price</div>
          </div>
        </div>
      </div>
    </div>
  );
}
