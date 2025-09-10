import axios from "axios";
import type { NoteData } from "../types/notes";
const baseUrl = "/api/notes";

const getAll = () => {
  const request = axios.get(baseUrl);
  const nonExisting = {
    id: 10000,
    content: "This note is not saved to server",
    important: true,
  };

  return request.then((response) => response.data.concat(nonExisting));
};

const create = (newObject: Omit<NoteData, "id">) => {
  return axios.post(baseUrl, newObject).then((request) => request.data);
};

const update = (id: string, newObject: NoteData) => {
  return axios
    .put(`${baseUrl}/${id}`, newObject)
    .then((request) => request.data);
};

export default {
  getAll,
  create,
  update,
};
