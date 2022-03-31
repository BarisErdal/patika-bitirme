
import service from "../instance";

export const create = (payload) =>
  service.post("board", payload)

export const update = (id, payload) =>
  service.put(`board/${id}`, payload)

export const destroy = (id) => service.delete(`board/${id}`)

export const getById = (id) =>
  service.get(`board/${id}`)

export const list = () =>
  service.get(`board`)