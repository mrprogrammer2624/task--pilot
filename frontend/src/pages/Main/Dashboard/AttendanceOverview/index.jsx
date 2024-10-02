const attendanceData = [
  { day: "Monday", attendance: 60 },
  { day: "Tuesday", attendance: 75 },
  { day: "Wednesday", attendance: 90 },
  { day: "Thursday", attendance: 90 },
  { day: "Friday", attendance: 90 },
  { day: "Saturday", attendance: 90 },
];

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const AttendanceOverview = () => {
  const chartData = {
    labels: attendanceData.map((item) => item.day),
    datasets: [
      {
        label: "Attendance Overview",
        data: attendanceData.map((item) => item.attendance),
        backgroundColor: "#4B9CD3",
        borderColor: "#4B9CD3",
        borderWidth: 1,
        innerWidth: 1,
      },
    ],
  };

  const chartOptions = {};

  return (
    <div>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};
