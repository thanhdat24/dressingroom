import Header from "./Header";
import Model from "./Model";
import OutFitList from "./OutFitList";
import React from "react";

export default function DressingRoom(props) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <Header />
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <OutFitList />
        </div>
        <div className="col-4">
          <Model />
        </div>
      </div>
    </div>
  );
}
