import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface UserStatusChartProps {
  active: number;
  inactive: number;
}

const UserStatusChart = ({
  active,
  inactive,
}: UserStatusChartProps) => {
  const data = [
    {
      name: "Active",
      value: active,
    },
    {
      name: "Inactive",
      value: inactive,
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        height: 300,
        marginTop: "30px",
      }}
    >
      <h2>User Status Summary</h2>

      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={80}
            label
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserStatusChart;