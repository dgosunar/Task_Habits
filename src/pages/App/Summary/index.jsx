import React from "react";
import { Layout } from "../../../layout/Dashboard";
import { Context } from "../../../Context";
import { TaskList } from "../Tasks/taskUI";
import { Task } from "../Tasks/Components/Task";
import styled from "styled-components";
import { CBotton } from "../../../Components/Bottons/CBotton";
import { NewTask } from "../Tasks/Mods/NewTask";
import { Modal } from "../../../Components/Modals/Modal";
import { Separator } from "../../../Components/Modals/Separator";
import MyPieChart from "./Components/PieChar";
import { Note } from "../Notes/Components/Note";

function Summary() {
  const {
    workspace,
    task,
    openModal,
    setOpenModal,
    selectNotes,
    space,
    deleteNote,
  } = React.useContext(Context);

  const onDelete = (id) => {
    deleteNote(id);
  };

  return (
    <Layout title={"Resumen"}>
      <Container>
        <div className="espaciosDeTrabajo">
          <div className="leaveBox">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Separator />
              <div className="mediumText">Procentage_de_Progreso</div>
              <Separator />
            </div>
            <div className="sss">
              {workspace.map((s) => (
                <MyPieChart space={s.id} label={s.name} />
              ))}
            </div>
          </div>
        </div>
        <div className="tareasPendientes">
          <div className="leaveBox">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Separator />
              <div className="mediumText">Tareas_Pendientes</div>
              <Separator />
            </div>

            <div className="pplasjdfs">
              <TaskList>
                <div className="list">
                  {task.map((t) =>
                    t.status === 1 ? <Task key={t.id} task={t} /> : <></>
                  )}
                </div>
              </TaskList>
            </div>
          </div>
        </div>
        <div className="notasRecientes">
          <div className="leaveBox">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Separator />
              <div className="mediumText">Notas_Recientes</div>
              <Separator />
            </div>
            <div className="porqwuno">
              {selectNotes(space).map((n) => (
                <Note n={n} onDelete={onDelete} />
              ))}
            </div>
          </div>
        </div>
        <CBotton setOpenModal={setOpenModal} />
        {openModal ? (
          <Modal>
            <NewTask />
          </Modal>
        ) : (
          <></>
        )}
      </Container>
    </Layout>
  );
}

export default Summary;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: flex-start;

  @media screen and (max-width: 600px) {
  }

  .leaveBox {
    display: flex;
    flex-direction: column;
    gap: 5px;
    height: calc(100% - 20px);
    width: 100%;
    margin-bottom: 10px;

    @media screen and (max-width: 800px) {
    }
    @media screen and (max-width: 600px) {
    }
  }

  .statusWorkplaces {
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 100%;
    width: 450px;
    @media screen and (max-width: 800px) {
      width: 50%;
    }
    @media screen and (max-width: 600px) {
      width: 100%;
    }
  }
`;
