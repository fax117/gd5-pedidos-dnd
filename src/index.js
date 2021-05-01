import React from "react";
import ReactDOM from "react-dom";
import "@atlaskit/css-reset";
import styled from "styled-components";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import initialData from "./initial-data";
import Column from "./Column2";

const Container = styled.div`
  display: flex;
`;
/**
 * se guarda el penúltimo stado, ya que el último estado no se puede actualizar sincrónicamente porque se rompe React <3
 */
const initial_state = {
  data: localStorage.getItem("data")
    ? JSON.parse(localStorage.getItem("data"))
    : localStorage.setItem("data", JSON.stringify(initialData)),
};

class InnerList extends React.PureComponent {
  render() {
    const { column, taskMap, index } = this.props;
    const tasks = column.taskIds.map((taskId) => taskMap[taskId]);
    return <Column {...{ column, tasks, index }} />;
  }
}

class App extends React.Component {
  state = initial_state.data;

  onDragEnd = ({ destination, source, draggableId, type }) => {
    if (
      destination &&
      !(
        destination.droppableId === source.droppableId &&
        destination.index === source.index
      )
    ) {
      if (type === "column") {
        const newColumnOrder = Array.from(this.state.columnOrder);
        newColumnOrder.splice(source.index, 1);
        newColumnOrder.splice(destination.index, 0, draggableId);
        console.log(this.state);
        localStorage.setItem("data", JSON.stringify(this.state));
        return this.setState((lastState) => ({
          ...lastState,
          columnOrder: newColumnOrder,
        }));
      }

      const entregado = this.state.columns["entrega-completa"];
      const planta = this.state.columns["salida-de-planta"];
      const ldc = this.state.columns["local-delivery"];

      const home = this.state.columns[source.droppableId];
      const foreign = this.state.columns[destination.droppableId];

      if (home === ldc && foreign === planta) {
        return this.setState((lastState) => ({
          ...lastState,
          columns: {
            ...lastState.columns,
          },
        }));
      }

      if (home === entregado) {
        return this.setState((lastState) => ({
          ...lastState,
          columns: {
            ...lastState.columns,
          },
        }));
      }

      if (home === foreign) {
        const newTaskIds = Array.from(home.taskIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);
        console.log(this.state);
        localStorage.setItem("data", JSON.stringify(this.state));
        return this.setState((lastState) => ({
          ...lastState,
          columns: {
            ...lastState.columns,
            [home.id]: {
              ...home,
              taskIds: newTaskIds,
            },
          },
        }));
      }

      // moving from one list to another

      const homeTaskIds = [...home.taskIds];
      homeTaskIds.splice(source.index, 1);

      const foreignTaskIds = [...foreign.taskIds];
      foreignTaskIds.splice(destination.index, 0, draggableId);

      //localStorage.setItem("data", JSON.stringify(this.state));
      console.log(this.state);
      localStorage.setItem("data", JSON.stringify(this.state));
      return this.setState((lastState) => ({
        ...lastState,
        columns: {
          ...lastState.columns,
          [home.id]: {
            ...home,
            taskIds: homeTaskIds,
          },
          [foreign.id]: {
            ...foreign,
            taskIds: foreignTaskIds,
          },
        },
      }));

      //console.log(this.state);

      //localStorage.setItem("data", JSON.stringify(newState));
      //return newState;
    }
  };

  render() {
    return (
      <DragDropContext
        onDragStart={this.onDragStart}
        onDragUpdate={this.onDragUpdate}
        onDragEnd={this.onDragEnd}
      >
        <Droppable
          droppableId='all-columns'
          direction='horizontal'
          type='column'
        >
          {(provided) => (
            <Container {...provided.droppableProps} ref={provided.innerRef}>
              {this.state.columnOrder.map((columnId, index) => {
                const column = this.state.columns[columnId];
                return (
                  <InnerList
                    key={column.id}
                    column={column}
                    taskMap={this.state.tasks}
                    index={index}
                  />
                );
              })}
              {provided.placeholder}
            </Container>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
