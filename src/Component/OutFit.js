import React from "react";

export default function OutFit(props) {
  return (
    <div className="col-md-3">
      <div className="card text-center">
        <img src={props.outfit.imgSrc_jpg} alt={props.outfit.id} />
        <h4>
          <b>{props.outfit.name}</b>
        </h4>
        <button>Thử đồ</button>
      </div>
    </div>
  );
}
