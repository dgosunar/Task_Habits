import React from "react";
import { Context } from "../../Context";
import { Separator } from "../../componets/Modals/Separator";
import { Modal } from "../../componets/Modals/Modal";
import { NewSpace } from "../../componets/Modals/NewSpace";
import { CreateTask } from "../../componets/CreateTask";
import { MyIcon } from "../../styles/styles";
import styled from "styled-components";
import "./spaceUI.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";

function SpaceUI() {
  const {
    getWorkspace,
    getOpenModal,
    setOpenModal,
    totalPendingSpace,
    totalStartSpace,
    totalCompleteSpace,
    deleteSpace,
    totalNoteSpace,
  } = React.useContext(Context);

  const onSubmit = () => {};

  const onDelete = (id) => {
    deleteSpace(id);
  };

  return (
    <Container>
      <div className="workspace">
        {getWorkspace().map((space) => (
          <div className="space" key={space.id}>
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
              <img src="./Icons/Gear.svg" alt="GearIcon" width={20} />
              <div className="secondarySubtitle">{space.name}</div>
            </div>
            <Separator />
            <div className="details">
              <div className="task">
                <div className="mediumText">Tareas:</div>
                <div className="miniText">
                  Pendientes: {totalPendingSpace(space.id)}
                </div>
                <div className="miniText">
                  En proceso: {totalStartSpace(space.id)}
                </div>
                <div className="miniText">
                  Completadas: {totalCompleteSpace(space.id)}
                </div>
              </div>
              <div className="notes">
                <div className="mediumText">Notas:</div>
                <div className="miniText">{totalNoteSpace(space.id)}</div>
              </div>
            </div>
            <div className="icons">
              {/* <MyIcon
                onClick={() => {
                  onSubmit();
                }}
              >
                <FontAwesomeIcon icon={faPen} color="#68D6F1" alt="PenIcon" />
              </MyIcon> */}
              <MyIcon
                onClick={() => {
                  onDelete(space.id);
                }}
              >
                <FontAwesomeIcon
                  icon={faTrash}
                  color="#f26868"
                  alt="TrashIcon"
                />
              </MyIcon>
            </div>
          </div>
        ))}
      </div>
      <div>
        <CreateTask setOpenModal={setOpenModal} title="Nuevo" />
        {getOpenModal() ? (
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
  width: 60%;
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
