import React from "react";
import { Context } from "../../Context";
import styled from "styled-components";
import { Botton, PBotton, SBotton } from "../../componets/Bottons";
import "./spaceUI.css"
import { Separator } from "../../componets/Modals/Separator";
import { MyIcon } from "../../styles/styles";
import { Modal } from "../../componets/Modals/Modal";
import { NewSpace } from "../../componets/Modals/NewSpace";

function SpaceUI() {

    const {
        workspace,
        openModal,
        setOpenModal,
        totalPendingSpace,
        totalStartSpace,
        totalCompleteSpace,
        deleteSpace,
    } = React.useContext(Context);

    const onSubmit = () => {
    };

    const onDelete = (id) => {
        deleteSpace(id);
    };

    return (
        <Container>
            <div className="workspace">
                {workspace.map((space) => (
                    <div className="space">
                        <div className="secondarySubtitle">{space.name}</div>
                        <Separator />
                        <div className="details">
                            <div className="task">
                                <div className="mediumText">Tareas:</div>
                                <div className="miniText">Pendientes: {totalPendingSpace(space.id)}</div>
                                <div className="miniText">En proceso: {totalStartSpace(space.id)}</div>
                                <div className="miniText">Completadas: {totalCompleteSpace(space.id)}</div>
                            </div>
                            <div className="notes">
                                <div className="mediumText">Notas:</div>
                                <div className="miniText">Pendientes: {totalPendingSpace(space.id)}</div>
                            </div>
                        </div>
                        <div className="icons">
                            {/* <MyIcon src="./Icons/Pen.svg" onClick={() => { onSubmit() }} alt="PenIcon" /> */}
                            <MyIcon src="./Icons/Trash.svg" onClick={() => { onDelete(space.id) }} alt="TrashIcon" />
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <PBotton onClick={() => {
                    setOpenModal(state => !state);
                }}>Nuevo</PBotton>
                {openModal ? (
                    <Modal title='Crear nuevo espacio de trabajo'>
                        <NewSpace />
                    </Modal>
                ) : (<></>)}
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