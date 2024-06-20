import React from "react";
import Chart from "react-apexcharts";

const RelayChart = () => {
  const options = {
    chart: {
      toolbar: { show: false },
      type: "area",
      zoom: {
        enabled: false,
      },
    },
    fill: {
      colors: ["#005b96"],
      gradient: { opacityFrom: 0.5, opacityTo: 0, shade: "dark" },
    },
    grid: { show: false },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 1,
      colors: ["#005b96"],
    },
    labels: [0, 1, 2, 3, 4, 6, 7, 8, 9],
    xaxis: {
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      show: false,
      max: 6,
    },
    legend: {
      horizontalAlign: "left",
    },
  };

  const series = [
    {
      name: "Relay Speed",
      data: [5.2, 6, 5.2, 6, 5.5, 6, 5.5, 6, 5.2, 6],
    },
  ];

  return (
    <div>
      <div id="chart" className="-mt-10 translate-y-2">
        <Chart options={options} series={series} type="area" height={70} />
      </div>
    </div>
  );
};

export default RelayChart;
