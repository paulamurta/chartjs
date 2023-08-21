import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "chart.js/auto";

function BarChart({ chartData }: any) {
  return <Bar data={chartData} />;
}

export default BarChart;
