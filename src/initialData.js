const initialData = {
  orders: {
    order1: { id: "order-1", content: "Order 1" },
    order2: { id: "order-2", content: "Order 2" },
    order3: { id: "order-3", content: "Order 3" },
    order4: { id: "order-4", content: "Order 4" },
    order5: { id: "order-5", content: "Order 5" },
  },
  columns: {
    "salida-de-planta": {
      id: "salida-de-planta",
      title: "Salida de planta",
      orderIds: ["pedido-1", "pedido-2", "pedido-5"],
    },
  },
  columnOrder: ["salida-de-planta"],
};

export default initialData;

/*
,
    "local-delivery": {
      id: "local-delivery",
      title: "Centro de envio local",
      orderIds: [],
    },
    "proceso-entrega": {
      id: "proceso-entrega",
      title: "En proceso de entrega",
      orderIds: ["pedido-3", "pedido-4"],
    },
    entregado: {
      id: "entregado",
      title: "Entregado",
      orderIds: [],
    },
    "entrega-completa": {
      id: "entrega-completa",
      title: "Entrega Completa",
      orderIds: [],
    },
    "entrega-fallida": {
      id: "entrega-fallida",
      title: "Entrega fallida",
      orderIds: [],
    },


    ,
  columnOrder: [
    "salida-de-planta",
    "local-delivery",
    "proceso-entrega",
    "entregado",
    "entrega-completa",
    "entrega-fallida",
  ],
*/
