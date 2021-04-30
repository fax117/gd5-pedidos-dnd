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
const Task = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {task.task}
        </Container>
      )}
    </Draggable>
  );
};

export default Task;
