import {
  PieChart,
  Pie,
  Tooltip,
} from "recharts";

interface Props {
  active: number;
  inactive: number;
}

const UserStatusChart = ({
  active,
  inactive,
}: Props) => {
  const data = [
    { name: "Active", value: active },
    { name: "Inactive", value: inactive },
  ];

  return (
    <PieChart width={300} height={250}>
        <Pie
            data={data}
            dataKey="value"
            outerRadius={80}
        />
        <Tooltip />
    </PieChart>
  );
};

export default UserStatusChart;