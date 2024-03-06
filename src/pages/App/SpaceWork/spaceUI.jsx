import React from "react";
import { Context } from "../../../Context";
import { Separator } from "../../../Components/Modals/Separator";
import { Modal } from "../../../Components/Modals/Modal";
import { NewSpace } from "./NewSpace";
import { MyIcon } from "../../../styles/styles";
import styled from "styled-components";
import "./spaceUI.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears, faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import { CBotton } from "../../../Components/Bottons/CBotton";

function SpaceUI() {
  const {
    accentColors,
    workspace,
    openModal,
    setOpenModal,
    totalPendingSpace,
    totalCompletedSpace,
    deleteSpace,
    totalNoteSpace,
  } = React.useContext(Context);

  const onDelete = (id) => {
    deleteSpace(id);
  };

  return (
    <Container>
      <Separator />

      <div className="workspace">
        {workspace.map((s) => (
          <div className="space" key={s.id}>
            <div
              className="title"
              style={{ color: accentColors[s.color].color }}
            >
              <FontAwesomeIcon icon={faGears} size="xl" />
              <div className="secondarySubtitle">{s.name}</div>
            </div>
            <Separator />
            <div className="details">
              <div className="task">
                <div className="mediumText">Tareas:</div>
                <div className="miniText">
                  Pendientes: {totalPendingSpace(s.id)}
                </div>
                <div className="miniText">
                  Completadas: {totalCompletedSpace(s.id)}
                </div>
              </div>
              <div className="notes">
                <div className="mediumText">Notas:</div>
                <div className="miniText">{totalNoteSpace(s.id)}</div>
              </div>
            </div>
            {s.id === 0 ? (
              <></>
            ) : (
              <div className="icons">
                <MyIcon>
                  <FontAwesomeIcon icon={faPen} color="#68D6F1" alt="PenIcon" />
                </MyIcon>
                <MyIcon
                  onClick={() => {
                    onDelete(s.id);
                  }}
                >
                  <FontAwesomeIcon
                    icon={faTrash}
                    color="#f26868"
                    alt="TrashIcon"
                  />
                </MyIcon>
              </div>
            )}
          </div>
        ))}
      </div>
      <div>
        <CBotton setOpenModal={setOpenModal} title="+" />
        {openModal ? (
          <Modal>
            <NewSpace />
          </Modal>
        ) : (
          <></>
        )}
      </div>
    </Container>
  );
}
export default SpaceUI;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  gap: 10px;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 600px) {
  }
`;
