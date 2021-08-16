import React from "react";
import { changeOutFitAction } from "../redux/actions/DressingRoomAction";
import { useDispatch } from "react-redux";

export default function OutFit(props) {
  const dispatch = useDispatch();
  return (
    <div className="col-md-3">
      <div className="card text-center">
        <img src={props.outfit.imgSrc_jpg} alt={props.outfit.id} />
        <h4>
          <b>{props.outfit.name}</b>
        </h4>
        <button
          onClick={() => {
            dispatch(changeOutFitAction(props.outfit.id));
          }}
        >
          Thử đồ
        </button>
      </div>
    </div>
  );
}
