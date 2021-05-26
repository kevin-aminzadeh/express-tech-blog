export default {
  // Save Item To DB
  createItem: async (type, data) => {
    if (!type || !data) {
      throw Error("Missing Parameters!");
    }
    const response = await fetch(`/api/${type}s`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(data),
    });

    return response;
  },

  // Update DB Item Data
  updateItem: async (type, data) => {
    if (!type || !data) {
      throw Error("Missing Parameters!");
    }
    const response = await fetch(`/api/${type}s`, {
      headers: { "Content-Type": "application/json" },
      method: "PUT",
      body: JSON.stringify(data),
    });

    return response;
  },

  // Delete Item From DB
  deleteItem: async (type, itemId) => {
    if (!type || !itemId) {
      throw Error("Missing Parameters!");
    }
    const response = await fetch(`/api/${type}s/${itemId}`, {
      headers: { "Content-Type": "application/json" },
      method: "DELETE",
    });

    return response;
  },
};
