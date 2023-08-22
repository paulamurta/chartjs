import { Bubble } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import 'chart.js/auto';

function BubbleChart({ chartData }: any) {
  return <Bubble data={chartData} />;
}

export default BubbleChart;
