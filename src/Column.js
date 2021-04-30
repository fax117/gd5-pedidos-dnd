import React from "react";
import Order from "./Order.jsx";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div`
  margin: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: ${(props) => (props.isDraggingOver ? "#d9d9d9" : "white")};
`;
const Title = styled.h3`
  padding: 12px;
  margin: 0;
`;
const OrderList = styled.div`
  padding: 12px;
`;

const Column = ({ column, orders }) => {
  return (
    <Container id={column.id}>
      <Title>{column.title}</Title>
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <OrderList ref={provided.innerRef} {...provided.droppableProps}>
            {orders.map((o, i) => (
              <Order key={o.id} order={o} index={i} />
            ))}
            {provided.placeholder}
          </OrderList>
        )}
      </Droppable>
    </Container>
  );
};

export default Column;
