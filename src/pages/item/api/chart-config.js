export const options = {
  chart: {
    type: "area",
    stacked: false,
    height: 244,
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
    background: "transparent",
  },
  theme: {
    mode: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 0, // Скрываем маркеры по умолчанию
    strokeColors: "#FFFFFF",
    colors: ["#C41341"],
    strokeWidth: 4,
    hover: {
      size: 8,
      sizeOffset: 4,
    },
  },
  stroke: {
    curve: "straight",
    width: 2,
    colors: ["#C41341"],
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      shadeIntensity: 0,
      colorStops: [
        {
          offset: 0,
          color: "#C41341",
        },
        {
          offset: 100,
          color: "#98072D1A",
        },
      ],
    },
  },
  grid: {
    borderColor: "#FFFFFF1A", // Цвет линий сетки
    strokeDashArray: 0, // Убираем пунктирные линии
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    labels: { show: false },
    axisTicks: { show: false },
    axisBorder: { show: false },
    tooltip: {
      enabled: false,
    },
  },
  yaxis: {
    opposite: true,
    labels: {
      style: {
        fontFamily: "Geometria",
        fontSize: 12,
        fontWeight: 500,
        lineHeight: 14,
        textAlign: "right",
        colors: ["#FFFFFF"],
      },
    },
  },
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      return `
        <div style="
          background-color: #231F36;
          border-radius: 2px;
          padding: 6px 10px;
          font-family: Geometria;
          font-size: 12px;
          font-weight: 500;
          line-height: 14px;
          text-align: center;
          color: #FFF;
          gap: 10px;
        ">
          <div>${w.globals.categoryLabels[dataPointIndex]}</div>
          <div>${series[seriesIndex][dataPointIndex]}</div>
        </div>
      `;
    },
  },
};

export const series = [
  {
    name: "items",
    data: [30, 40, 45, 50, 49, 60, 70, 1],
  },
];
