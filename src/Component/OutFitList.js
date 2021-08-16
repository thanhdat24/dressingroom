import { navPills, tabPanes } from "../Data/Data.json";

import OutFit from "./OutFit";
import React from "react";

export default function OutFitList(props) {
  
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
  
  return (
    <div>
      <ul className="nav nav-pills">{renderNavPills()}</ul>

      <div className="well">
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
