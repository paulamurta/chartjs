import { Bar } from 'react-chartjs-2';

function BarChart({ chartData }: any) {
  return (
    <Bar
      data={chartData}
      options={{
        // maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            labels: {
              font: {
                size: 15,
                family: 'Verdana',
              },
            },
          },
        },
      }}
    />
  );
}

export default BarChart;
