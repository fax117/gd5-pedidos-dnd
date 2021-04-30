import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  border: 1px solid dodgerblue;
  padding: 8px 12px;
  margin: 8px auto;
  border-radius: 4px;
  background-color: ${(props) => (props.isDragging ? "#d3dce4" : "#f3f7fb")};
`;
const Pedido = ({ pedido, index }) => {
  return (
    <Draggable draggableId={pedido.id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {pedido.content}
        </Container>
      )}
    </Draggable>
  );
};

export default Pedido;
