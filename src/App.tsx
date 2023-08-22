import { useState } from 'react';
import './App.css';
import BarChart from './components/BarChart';
import { UserData } from './Data';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import BubbleChart from './components/BubbleChart';

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: 'Users Gained',
        data: UserData.map((data) => data.userGain),
        backgroundColor: ['blue'],
        borderColor: ['black'],
        borderWidth: 1,
        // barPercentage: 0.5,
        // barThickness: 6,
        // maxBarThickness: 8,
        // minBarLength: 2,
        // pointStyle: 'circle',
        radius: 6,
      },
      {
        label: 'Users Lost',
        data: UserData.map((data) => data.userLost),
        backgroundColor: ['red'],
        borderColor: ['black'],
        borderWidth: 1,
        radius: 6,
      },
    ],
  });
  const [usersGainedData, setUsersGainedData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: 'Users Gained',
        data: UserData.map((data) => data.userGain),
        backgroundColor: ['red', 'blue', 'green', 'magenta', 'orange'],
        borderColor: ['black'],
        borderWidth: 1,
      },
    ],
  });
  return (
    <div className="App">
      <div style={{ width: 700 }}>
        <BarChart chartData={userData} />
        <LineChart chartData={userData} />
        <PieChart chartData={usersGainedData} />
      </div>
    </div>
  );
}

export default App;
