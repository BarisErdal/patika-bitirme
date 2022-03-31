import service from "../instance";


export const update = (id, payload) =>
  service.put(`list/${id}`, payload)

export const create = (payload) =>
  service.post("list", payload)

export const destroy = (id) => service.delete(`list/${id}`)

export const getById = (id) =>
  service.get(`list/${id}`)

export const list = (boardId) =>
  service.get(`list?boardId=${boardId}`)