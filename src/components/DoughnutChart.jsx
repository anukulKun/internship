import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = (props) => {
  const data = {
    datasets: [
      {
        data: [props?.completed?.count, props?.pending?.count],
        backgroundColor: [props?.completed?.color, props?.pending?.color],
        borderColor: [props?.completed?.color, props?.pending?.color],
        borderWidth:0,
      },
    ],
  };

  const options = {
    responsive: true,
  };

  return (
    <div className="w-40 h-40">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
