import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
  
  const ChartSection = ({ chartData, WaveBar }) => {
    return (
      <div className="mb-10">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar barSize={150} dataKey="fee" shape={(props) => <WaveBar {...props} />} isAnimationActive={true} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  };
  
  export default ChartSection;
  