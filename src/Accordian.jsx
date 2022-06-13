import React, { useState } from "react";
import { ExpandCollapse } from "./util.jsx/Expand";

export const Accordian = ({ title, content, fontSize, fontWeight }) => {
  const [isActive, setIsActive] = useState(false);

  const isActiveTogglerHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="inner-accordian">
      <span
        style={{ fontSize: `${fontSize}px`, fontWeight: `${fontWeight}px` }}
      >
        {title}
        {isActive ? (
          <ExpandCollapse
            sign="-"
            isActiveToggler={isActiveTogglerHandler}
            fontSize={fontSize}
            fontWeight={fontWeight}
          />
        ) : (
          <ExpandCollapse
            sign="+"
            isActiveToggler={isActiveTogglerHandler}
            fontSize={fontSize}
            fontWeight={fontWeight}
          />
        )}
      </span>
      {isActive && (
        <>
          {Array.isArray(content) ? (
            content.map(({ title, content }, index) => (
              <Accordian
                title={title}
                content={content}
                key={index}
                fontSize={fontSize - 2}
                fontWeight={fontWeight - 100}
              />
            ))
          ) : (
            <div>
              <span
                className="inner-accordian-data"
                style={{
                  fontSize: `${fontSize}px`,
                  fontWeight: `${fontWeight}px`
                }}
              >
                {content}
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );
};
