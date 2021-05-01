const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Pedido 1" },
    "task-2": { id: "task-2", content: "PEDIDO 2" },
    "task-3": { id: "task-3", content: "PEDIDO 3" },
    "task-4": { id: "task-4", content: "PEDIDO 4" },
    "task-5": { id: "task-5", content: "PEDIDO 5" },
    "task-6": { id: "task-6", content: "PEDIDO 6" },
    "task-7": { id: "task-7", content: "PEDIDO 7" },
    "task-8": { id: "task-8", content: "PEDIDO 8" },
  },
  columns: {
    "salida-de-planta": {
      id: "salida-de-planta",
      title: "Salida de planta",
      taskIds: ["task-1", "task-2", "task-3"],
    },
    "local-delivery": {
      id: "local-delivery",
      title: "Centro de envio local",
      taskIds: ["task-4"],
    },
    "proceso-entrega": {
      id: "proceso-entrega",
      title: "En proceso de entrega",
      taskIds: ["task-5", "task-6"],
    },
    "entrega-completa": {
      id: "entrega-completa",
      title: "Entrega Completa",
      taskIds: [],
    },
    "entrega-fallida": {
      id: "entrega-fallida",
      title: "Entrega fallida",
      taskIds: [],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: [
    "salida-de-planta",
    "local-delivery",
    "proceso-entrega",
    "entrega-completa",
    "entrega-fallida",
  ],
};

export default initialData;
