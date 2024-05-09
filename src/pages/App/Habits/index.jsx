import React from "react";
import { Layout } from "../../../layout/Dashboard";
import { CBotton } from "../../../Components/Bottons/CBotton";
import { Modal } from "../../../Components/Modals/Modal";
import { Context } from "../../../Context";

function Habits() {
  const { openModal, setOpenModal } = React.useContext(Context);

  return (
    <Layout title={"Habitos"}>
      <div>
        <CBotton setOpenModal={setOpenModal} title="+" />
        {/* {openModal ? <Modal></Modal> : <></>} */}
      </div>
    </Layout>
  );
}

export default Habits;
