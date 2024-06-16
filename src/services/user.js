import api from "configs/api";

const getProfile = () => api.get("user/whoami").then((res) => res || false);

export { getProfile };
