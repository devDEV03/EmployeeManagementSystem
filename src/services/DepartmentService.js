import axios from "axios";

const REST_API_BASE_URL = 'https://emsbackend-1-lv9e.onrender.com/api/departments';
export const listDepartments = () =>  axios.get(REST_API_BASE_URL);
export const createDepartment = (department) => axios.post(REST_API_BASE_URL, department);
export const getDepartment = (departmentId) => axios.get(REST_API_BASE_URL + '/' + departmentId);
export const updateDepartment = (departmentId,department) => axios.put(REST_API_BASE_URL + '/' + departmentId,department);
export const deleteDepartment = (departmentId) => axios.delete(REST_API_BASE_URL + '/' + departmentId);
