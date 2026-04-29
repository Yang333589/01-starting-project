import TabButton from "../TabButton/TabButton";
import { CORE_CONCEPTS, EXAMPLES } from "../../data";
import { useState } from "react";
import Section from "../Section/Section";
import Tabs from "../Tabs";


export default function Menu() {
    function handleSelect(selectButton) {
        setSelectedTopic(selectButton);
    }
    const [selectedTopic, setSelectedTopic] = useState();
    let tabContent = <p>Please select a topic</p>;
    if (selectedTopic) {
        tabContent =
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>
                        {EXAMPLES[selectedTopic].code}
                    </code>
                </pre>
            </div>
    }
    return (
        <Section id="examples" title="Examples">
            <Tabs 
                buttons={
                <>
                    <TabButton isSelected={selectedTopic === "components"} onClick={() => handleSelect("components")}> Components</TabButton>
                    <TabButton isSelected={selectedTopic === "jsx"} onClick={() => handleSelect("jsx")}> JSX</TabButton>
                    <TabButton isSelected={selectedTopic === "props"} onClick={() => handleSelect("props")}> Props</TabButton>
                    <TabButton isSelected={selectedTopic === "state"} onClick={() => handleSelect("state")}> State</TabButton>
                </>
            }>
                {tabContent}
            </Tabs>
        </Section>
    );
}