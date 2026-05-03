import { useState } from "react";

// Mock Sub-Components for each tab
const Overview = () => (
  <div className="p-4 bg-blue-50 rounded-lg">
    This is the Overview component.
  </div>
);
const Settings = () => (
  <div className="p-4 bg-green-50 rounded-lg">
    This is the Settings component.
  </div>
);
const Profile = () => (
  <div className="p-4 bg-purple-50 rounded-lg">
    This is the Profile component.
  </div>
);

const TabbedPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Define your tabs configuration
  const tabs = [
    { id: "overview", label: "Overview", component: <Overview /> },
    { id: "profile", label: "Profile", component: <Profile /> },
    { id: "settings", label: "Settings", component: <Settings /> },
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
