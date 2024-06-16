// SplineChart.js
import React from "react";
import Chart from "react-apexcharts";

const SplineChart = () => {
  const options = {
    chart: {
      type: "line",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
      colors: ["#fff"], // Set the line color to gray
    },
    xaxis: {
      type: "datetime",
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    markers: {
      size: 0,
      hover: {
        size: 5,
      },
    },
    fill: {
      type: "solid",
      opacity: [0.5, 1],
    },

    dropShadow: {
      enabled: false,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: "red",
      opacity: 0.95,
    },
  };

  const series = [
    {
      name: "Irregular Timeseries",
      data: [
        { x: new Date(2023, 0, 1).getTime(), y: 45 },
        { x: new Date(2023, 0, 3).getTime(), y: 40 },
        { x: new Date(2023, 0, 7).getTime(), y: 49 },
        { x: new Date(2023, 0, 11).getTime(), y: 50 },
        { x: new Date(2023, 0, 15).getTime(), y: 49 },
        { x: new Date(2023, 0, 19).getTime(), y: 54 },
        { x: new Date(2023, 0, 23).getTime(), y: 61 },
        { x: new Date(2023, 0, 27).getTime(), y: 56 },
      ],
    },
  ];

  return (
    <Chart
      options={options}
      series={series}
      type="line"
      height="100%"
      width="100%"
    />
  );
};

export default SplineChart;
