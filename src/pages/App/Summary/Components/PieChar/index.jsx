import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Context } from "../../../../../Context";

export default function MyPieChart({ space, label }) {
  const { totalPendingSpace, totalCompletedSpace } = React.useContext(Context);

  const porcentaje = Math.floor(
    (totalCompletedSpace(space) /
      (totalCompletedSpace(space) + totalPendingSpace(space))) *
      100
  );

  return (
    <div className="asdaq">
      <div className="aaa">
        <PieChart
          series={[
            {
              data: [
                { id: 1, value: totalCompletedSpace(space), color: "#78F167" },
                { id: 0, value: totalPendingSpace(space), color: "#68D6F1" },
              ],
              innerRadius: 60,
              outerRadius: 100,
              paddingAngle: 1,
              startAngle: -90,
              endAngle: 90,
              cx: 105,
              cy: 100,
            },
          ]}
        />
        <div className="primarySubtitle porcentaje">
          {porcentaje >= 0 ? `${porcentaje}%` : "Sin Tareas"}
        </div>
        <div className="generalText">{label}</div>
      </div>
    </div>
  );
}
