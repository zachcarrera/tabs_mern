import "./App.css";
import { useState } from "react";

const oldTabs = [
    {
        label: "Tab 1",
        content: "Tab 1 content is showing here...",
        isActive: false,
    },
    {
        label: "Tab 2",
        content: "Tab 2 content is showing here...",
        isActive: false,
    },
    {
        label: "Tab 3",
        content: "Tab 3 content is showing here...",
        isActive: true,
    },
    {
        label: "Tab 4",
        content: "Tab 4 content is showing here...",
        isActive: false,
    },
];

function App() {
    const [tabs, setTabs] = useState(oldTabs);

    const handleTabSwitch = (clickedIndex) => {
        // use index to set that index in tabs to true

        console.log("handle switch");

        const newTabs = [...tabs];
        // may need to map????

        newTabs.forEach((tab) => {
            if (tab.isActive) {
                tab.isActive = false;
            }
        });

        newTabs.forEach((tab, index) => {
            if (index === clickedIndex) {
                tab.isActive = true;
            }
        });

        console.log(newTabs);

        setTabs(newTabs);
    };

    return (
        <div className="App">
            {tabs.map((tab, index) => (
                <button
                    key={index}
                    className={`tab-button ${tab.isActive ? "active" : ""} `}
                    onClick={(e) => handleTabSwitch(index)}
                >
                    {tab.label}
                </button>
            ))}
            {tabs
                .filter((tab) => tab.isActive)
                .map((tab, index) => (
                    <p key={index} className="tab-content">
                        {tab.content}
                    </p>
                ))}
        </div>
    );
}

export default App;
