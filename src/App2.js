import "./styles.css";
import initialData from "./initialData2";
import { useState } from "react";
import Column from "./Column.jsx";
import { DragDropContext } from "react-beautiful-dnd";

export default function App() {
  const [state, setState] = useState(initialData);

  const onDragEnd = (result) => {
    // see example object in aux file.
    const { draggableId, source, destination } = result;

    // RETURN if dropped outside droppable (destination === null)
    if (!destination) return;

    // RETURN if dropped back in same position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // Get relevant column and replace order.
    const col = state.columns[source.droppableId];
    const newTaskIds = [...col.taskIds];
    // Remove item from list
    newTaskIds.splice(source.index, 1);
    // Place it back in same list in new position.
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...col,
      taskIds: newTaskIds,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newColumn.id]: newColumn,
      },
    };

    setState(newState);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {state.columnOrder.map((columnId) => {
        const column = state.columns[columnId];
        const tasks = column.taskIds.map((tid) => state.tasks[tid]);
        //console.log(tasks);
        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
    </DragDropContext>
  );
}
