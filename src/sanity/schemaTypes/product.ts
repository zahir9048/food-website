export const product = {
    name: "product",
    title: "Product",
    type: "document",
    fields: [
      { name: "name", title: "Name", type: "string" },
      { name: "category", title: "Category", type: "string" },
      {
        name: "images",
        title: "Images",
        type: "array",
        of: [{ type: "image" }],
      },
      { name: "quantityAvailable", title: "Quantity Available", type: "number" },
      { name: "isAvailable", title: "Is Available", type: "boolean" },
      { name: "price", title: "Price", type: "number" },
      { name: "createdAt", title: "Created At", type: "datetime" },
    ],
  };
  