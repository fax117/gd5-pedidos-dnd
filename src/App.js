import "./styles.css";
import initialData from "./initialData";
import { useState } from "react";
import Column from "./Column";
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
    const newOrderIds = [...col.orderIds];
    // Remove item from list
    newOrderIds.splice(source.index, 1);
    // Place it back in same list in new position.
    newOrderIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...col,
      orderIds: newOrderIds,
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
        const orders = column.orderIds.map((orderId) => state.orders[orderId]);
        //console.log(column.orderIds);
        //console.log(column);
        console.log(orders);
        return <Column key={column.id} column={column} orders={orders} />;
      })}
    </DragDropContext>
  );
}
