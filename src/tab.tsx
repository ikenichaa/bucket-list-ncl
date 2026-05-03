import { useState } from "react";
import Cafe from "./tabs/cafe";
import DineOut from "./tabs/dine-out";
import Exercise from "./tabs/exercise";
import Experience from "./tabs/experiences";
import OutDoor from "./tabs/outdoor";

const TabbedPage = () => {
  const [activeTab, setActiveTab] = useState("cafe");

  // Define your tabs configuration
  const tabs = [
    { id: "cafe", label: "Cafe", component: <Cafe /> },
    { id: "dine-out", label: "Dine out", component: <DineOut /> },
    { id: "exercise", label: "Exercise", component: <Exercise /> },
    { id: "experience", label: "Experience", component: <Experience /> },
    { id: "outdoor", label: "Outdoor", component: <OutDoor /> },
  ];

  return (
    <div className="w-full mx-auto">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        {" "}
        Places to visit in Newcastle{" "}
      </h1>

      {/* Tabs Navigation */}
      <div className="flex border-b border-gray-200 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-2 px-6 text-sm font-medium transition-colors duration-200 -mb-px ${
              activeTab === tab.id
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-500 hover:text-gray-700 border-transparent"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Dynamic Component Rendering */}
      <div className="mt-4">
        {tabs.find((tab) => tab.id === activeTab)?.component}
      </div>
    </div>
  );
};

export default TabbedPage;
