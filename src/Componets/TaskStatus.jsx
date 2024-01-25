import React from "react";
import { Context } from "../Context";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from '@mui/x-charts/PieChart';
import styled from "styled-components";


function TaskStatus() {

    const {
        totalPending,
        totalInProcess,
        totalCompleted,
        totalTask
    } = React.useContext(Context);

    return (
        <Container>
            <BarChart
                series={[
                    {
                        data: [totalPending],
                        stack: 'A',
                        label: `Pendientes ${totalPending}`,
                        color: '#68D6F1'
                    },
                    {
                        data: [totalInProcess],
                        stack: 'A',
                        label: `En Proceso ${totalInProcess}`,
                        color: '#F1D568'
                    },
                    {
                        data: [totalCompleted],
                        stack: 'A',
                        label: `Completos ${totalCompleted}`,
                        color: '#91F168'
                    },
                ]}
                slotProps={{
                    legend: {
                        labelStyle: {
                            fontSize: 12,
                            fill: '#FFF',
                        },
                    }
                }}
                layout="horizontal"
                height={80}
                margin={{ top: 40, bottom:0, left: 10, right: 10 }}
                leftAxis={null}
                bottomAxis={null}
                className="barras"
            />
        </Container>
    );
}

export { TaskStatus }

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    .barras{
        color: var(--white);
    }
`;