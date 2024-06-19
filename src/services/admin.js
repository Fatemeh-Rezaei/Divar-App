import api from "configs/api";

const addCategory = (data) => api.post("category", data);

const getCategory = () => api.get("category");

const deleteCategory = (id) => api.delete(`category/${id}`);

export { addCategory, getCategory, deleteCategory };
