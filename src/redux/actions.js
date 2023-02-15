import { nanoid } from "nanoid";
import {
  ADDTASK,
  DELETETASK,
  TOGGLECOMPLETED,
  SETSTATUSFILTER,
} from "./constants";

export const addTask = (text) => {
  return {
    type: ADDTASK,
    payload: {
      id: nanoid(),
      completed: false,
      text,
    },
  };
};

export const deleteTasks = (taskId) => {
  return {
    type: DELETETASK,
    payload: taskId,
  };
};

export const toggleCompleted = (taskId) => {
  return {
    type: TOGGLECOMPLETED,
    payload: taskId,
  };
};

export const setStatusFilter = (value) => {
  return {
    type: SETSTATUSFILTER,
    payload: value,
  };
};
