import React from "react";
import { Context } from "../context";
import { PieChart } from '@mui/x-charts/PieChart';


function TaskStatus() {

    const { totalTask, completedTask } = React.useContext(Context);

    return (
        <span>
            {/* <PieChart
                colors={['#68D6F1', '#F1D568', '#91F168']}
                series={[
                    {
                        data: [
                            { id: 1, value: totalTask - completedTask, label: 'Pendientes' },
                            { id: 2, value: totalTask - completedTask, label: 'En Proceso' },
                            { id: 3, value: completedTask, label: 'Completos' },
                        ], innerRadius: 30,
                        outerRadius: 100,
                        paddingAngle: 5,
                        cornerRadius: 5,
                        startAngle: 0,
                        endAngle: 360,
                        cx: 100,
                        cy: 100,
                        arcLabel: (item) => `(${item.value})`,
                        arcLabelMinAngle: 45,
                    },
                ]}

                slotProps={{
                    legend: { hidden: false },
                }}
                width={410}
                height={210}
            /> */}
            <span className="generalText">
                Tienes {totalTask - completedTask} pendientes y {completedTask} casos completos de {totalTask}.
            </span>
        </span>
    );
}

export { TaskStatus }