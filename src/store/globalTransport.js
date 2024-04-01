import { create } from "zustand";

export const globalTransport = create((set) => ({
  transport: [],
  paradas: [],
  service: "",
}));
