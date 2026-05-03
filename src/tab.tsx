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
    <div className="tabbed-page w-full mx-auto">
      <header className="destination-hero">
        <div className="destination-hero__content">
          <span className="destination-hero__eyebrow">Newcastle bucket list</span>
          <h1>Eat, explore, and unwind around Newcastle</h1>
          <p>
            A curated shortlist of cafes, dining spots, outdoor escapes, and
            weekend experiences worth saving.
          </p>
          <div className="destination-hero__meta" aria-label="Guide highlights">
            <span>5 categories</span>
            <span>Local favourites</span>
            <span>Easy weekend planning</span>
          </div>
        </div>
      </header>

      {/* Tabs Navigation */}
      <div className="tabs-nav flex border-b border-gray-200 mb-6">
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
