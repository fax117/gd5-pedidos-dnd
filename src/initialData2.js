const initialData = {
  tasks: {
    task1: { id: "task1", task: "take out trash" },
    task2: { id: "task2", task: "make bed" },
    task3: { id: "task3", task: "vacuum" },
    task4: { id: "task4", task: "move to Germany" },
  },
  columns: {
    column1: {
      id: "column1",
      title: "To Do",
      taskIds: ["task1", "task2", "task3", "task4"],
    },
  },
  columnOrder: ["column1"],
};

export default initialData;
