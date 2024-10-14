const getUser = () => localStorage.getItem("username");
const setUser = (username) => localStorage.setItem("username", username);
const removeUser = () => localStorage.removeItem("username");

export { getUser, setUser, removeUser };