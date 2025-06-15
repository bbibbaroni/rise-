import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SleepLog from "./pages/sleepLog/index";
import AddSleep from "./pages/addSleep/index";
import SetAlarm from "./pages/setAlarm/index";
import Calling from "./pages/calling/index";
import Home from "./pages/home";
import { AlarmProvider } from "./contexts/AlarmContext";

function App() {
  return (
    <Router>
      <AlarmProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sleep-log" element={<SleepLog />} />
          <Route path="/add-sleep" element={<AddSleep />} />
          <Route path="/set-alarm" element={<SetAlarm />} />
          <Route path="/calling" element={<Calling />} />
        </Routes>
      </AlarmProvider>
    </Router>
  );
}

export default App;
