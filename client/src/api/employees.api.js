import axios from "axios";

export const createLoginRequest = async (login) => await axios.post("http://localhost:4000/employees", login);

export const getEmployeeById = async (id) => {
    const response = await axios.get(`http://localhost:4000/employees/${id}`);
    return response.data;
};


