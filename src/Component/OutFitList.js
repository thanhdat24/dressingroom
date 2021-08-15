import { navPills, tabPanes } from "../Data/Data.json";

import OutFit from "./OutFit";
import React from "react";

const renderNavPills = () => {
  return navPills.map((item, index) => {
    let active = index === 0 ? "active" : "";
    return (
      <li className="nav-item" key={index}>
        <a
          className={`nav-link btn-default ${active}`}
          data-toggle="pill"
          href={`#${item.tabName}`}
        >
          {item.showName}
        </a>
      </li>
    );
  });
};

const renderTabPanes = (type) => {
  return tabPanes.map((item, index) => {
    if (item.type === type) {
      return <OutFit key={index} outfit={item} />;
    }
    return "";
  });
};
export default function OutFitList(props) {
  return (
    <div>
      <ul className="nav nav-pills">{renderNavPills()}</ul>

      <div class="well">
        <div className="tab-content">
          {navPills.map((tab, index) => {
            let active = index === 0 ? "active" : "";
            return (
              <div
                key={index}
                className={`tab-pane container ${active}`}
                id={tab.tabName}
              >
                <div className="container">
                  <div className="row">{renderTabPanes(tab.type)}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
