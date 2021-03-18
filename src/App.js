import logo from "./logo.svg";
import "./App.css";
import Homepage from "./components/Homepage";
import FirstPipeline from "./components/FirstPipeline";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function App() {
  return (
    <div className="App">
      <Homepage />
      <div className="row m-0 p-0 d-flex justify-content-center mt-5">
        <div className="col-10">
          <Tabs>
            <TabList>
              <Tab>Video to Text</Tab>
              <Tab>Text to Video</Tab>
            </TabList>

            <TabPanel>
              <FirstPipeline />
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default App;
