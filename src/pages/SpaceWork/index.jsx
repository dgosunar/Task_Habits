import React from "react";
import { Layout } from "../../componets/Layout/Dashboard";
import { ContextProvider } from "../../Context";
import SpaceUI from "./spaceUI";

function SpaceWork() {
    return (
        <Layout title={'Espacios de Trabajo'}>
            <ContextProvider>
                <SpaceUI/>
            </ContextProvider>
        </Layout>
    );
}
export default SpaceWork;