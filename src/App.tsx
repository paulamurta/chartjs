import { useState } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
import { UserData } from "./Data";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
      },
    ],
  });
  return (
    <div className="App">
      <BarChart chartData={userData} />
    </div>
  );
}

export default App;
