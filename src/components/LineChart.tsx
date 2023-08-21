import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "chart.js/auto";

function LineChart({ chartData }: any) {
  return <Line data={chartData} />;
}

export default LineChart;
