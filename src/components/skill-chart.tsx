
import { useEffect, useRef } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { cn } from "@/lib/utils";

interface SkillChartProps {
  categories: {
    name: string;
    value: number;
  }[];
  className?: string;
}

const SkillChart = ({ categories, className }: SkillChartProps) => {
  return (
    <div className={cn("glass rounded-lg p-5 h-72", className)}>
      <h3 className="text-lg font-medium mb-4">Skill Distribution</h3>
      <ResponsiveContainer width="100%" height="85%">
        <AreaChart
          data={categories}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <defs>
            <linearGradient id="colorSkill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00f0ff" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#00f0ff" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
          <XAxis 
            dataKey="name" 
            tick={{ fill: "#ffffff", fontSize: 12 }}
            axisLine={{ stroke: "#333" }}
          />
          <YAxis 
            tick={{ fill: "#ffffff", fontSize: 12 }}
            axisLine={{ stroke: "#333" }} 
            domain={[0, 100]}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: "rgba(0, 0, 0, 0.8)", 
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "8px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)"
            }}
            itemStyle={{ color: "#00f0ff" }}
          />
          <Area 
            type="monotone" 
            dataKey="value" 
            stroke="#00f0ff" 
            strokeWidth={2}
            fillOpacity={1} 
            fill="url(#colorSkill)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillChart;
