import { useState } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
import { UserData } from "./Data";
import LineChart from "./components/LineChart";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["red", "blue", "green", "magenta", "orange"],
        borderColor: ["black"],
        borderWidth: 1,
      },
      {
        label: "Users Lost",
        data: UserData.map((data) => data.userLost),
        backgroundColor: ["red", "blue", "green", "magenta", "orange"],
        borderColor: ["black"],
        borderWidth: 1,
      },
    ],
  });
  return (
    <div className="App">
      <div style={{ width: 700 }}>
        <BarChart chartData={userData} />
        <LineChart chartData={userData} />
      </div>
    </div>
  );
}

export default App;
