import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = ({ items}) => {
    console.log(items);
  const maximumPrice = 3000;
  const month = [
    {
      label: "Январь",
      currentPrice: 0,
    },
    {
      label: "Февраль",
      currentPrice: 0,
    },
    {
      label: "Март",
      currentPrice: 0,
    },
    {
      label: "Май",
      currentPrice: 0,
    },
    {
      label: "Июнь",
      currentPrice: 0,
    },
    {
      label: "Июль",
      currentPrice: 0,
    },
    {
      label: "Август",
      currentPrice: 0,
    },
    {
      label: "Сентябрь",
      currentPrice: 0,
    },
    {
      label: "Октябрь",
      currentPrice: 0,
    },
    {
      label: "Ноябрь",
      currentPrice: 0,
    },
    {
      label: "Декабрь",
      currentPrice: 0,
    },
  ];

  items.forEach((items) => {
    const monthNumber = new Date(items.date).getMonth();
    month[monthNumber].currentPrice += items.price;
  });
  return (
    <div className="chart">
      {month.map((item) => {
        return (
          <ChartBar
            key={item.label}
            label={item.label}
            currentPrice={item.currentPrice}
            maximumPrice={maximumPrice}
          />
        );
      })}
    </div>
  );
};

export default Chart;
