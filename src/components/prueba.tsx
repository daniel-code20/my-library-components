import { useState } from "react";
import { Tabs, TabPanel } from "@/components/Tab";

const tabs = [{ label: "Style" }, { label: "Image" }, { label: "Arrange" }];

export const Prueba: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="p-4">
      <Tabs
        tabs={tabs}
        selectedIndex={selectedIndex}
        onChange={setSelectedIndex}
        size="md"
        radius="lg"
        variant="solid"
        color="primary"
      />

      <div className="mt-4">
        <TabPanel index={0} selectedIndex={selectedIndex}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </TabPanel>
        <TabPanel index={1} selectedIndex={selectedIndex}>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </TabPanel>
        <TabPanel index={2} selectedIndex={selectedIndex}>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </TabPanel>
      </div>
    </div>
  );
};
