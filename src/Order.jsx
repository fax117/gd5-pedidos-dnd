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
const Order = ({ order, index }) => {
  return (
    <Draggable draggableId={order.id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {order.content}
        </Container>
      )}
    </Draggable>
  );
};

export default Order;
