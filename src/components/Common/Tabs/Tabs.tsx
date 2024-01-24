import React, { useState } from "react";

export function Tabs({ children, vertical = false }: any) {
  function findActiveTab(a: any) {
    return a.reduce((accumulator: any, currentValue: any, i: any) => {
      if (currentValue.props.active) {
        return i;
      }

      return accumulator;
    }, 0);
  }

  function tabValidator(tab: any) {
    return tab.type.displayName === "Tab" ? true : false;
  }

  const [activeTab, setActiveTab] = useState(findActiveTab(children));

  return (
    <>
      <div className={`flex gap-2 ${vertical ? "flex-col" : "justify-center"}  p-2`}>
        {children.map((item: any, i: any) => (
          <React.Fragment key={`tab-${i}`}>
            {tabValidator(item) && (
              <Tab
                currentTab={i}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              >
                {item.props.children}
              </Tab>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className={`p-5 ${vertical ? "flex flex-col" : ""}`}>
        {children.map((item: any, i: any) => (
          <div
            key={`content-${i}`}
            className={` ${i === activeTab ? "flex" : "hidden"}`}
          >
            {item.props.component}
          </div>
        ))}
      </div>
    </>
  );
}

export function Tab({ children, activeTab, currentTab, setActiveTab }: any) {
  return (
    <>
      <div
        className={`px-5 py-3 rounded cursor-pointer
        ${activeTab === currentTab ? "bg-white" : "bg-white text-black"}`}
        onClick={() => setActiveTab(currentTab)}
      >
        {children}
      </div>
    </>
  );
}

Tab.displayName = "Tab";
