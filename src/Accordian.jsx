import React, { useState } from "react";
import { ExpandCollapse } from "./util.jsx/Expand";

export const Accordian = ({ title, content, data = null }) => {
  const [isActive, setIsActive] = useState(false);

  const isActiveTogglerHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="inner-accordian">
      <h3>
        {title}{" "}
        {isActive ? (
          <ExpandCollapse sign="-" isActiveToggler={isActiveTogglerHandler} />
        ) : (
          <ExpandCollapse sign="+" isActiveToggler={isActiveTogglerHandler} />
        )}
      </h3>
      {isActive && (
        <>
          {Array.isArray(content) ? (
            content.map(({ title, content }, index) => (
              <Accordian title={title} content={content} key={index} />
            ))
          ) : (
            <div>
              <span className="inner-accordian-data">{content}</span>
            </div>
          )}
        </>
      )}
    </div>
  );
};
