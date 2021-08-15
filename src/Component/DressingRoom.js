import Header from "./Header";
import Model from "./Model";
import OutFitList from "./OutFitList";
import React from "react";

export default function DressingRoom() {
  return (
    <div className="container-fluid">
      <Header />
      <div className="row">
        <div className="col-8">
          <OutFitList />
        </div>
        <div className="col-4">
          <Model />
        </div>
      </div>
    </div>
  );
}
