import { nanoid } from "nanoid";
import { createAction } from "@reduxjs/toolkit";
import {
  ADDTASK,
  DELETETASK,
  TOGGLECOMPLETED,
  SETSTATUSFILTER,
} from "./constants";

export const addTask = createAction(ADDTASK, (text) => {
  return {
    payload: {
      id: nanoid(),
      completed: false,
      text,
    },
  };
});

export const deleteTasks = createAction(DELETETASK);

export const toggleCompleted = createAction(TOGGLECOMPLETED);

export const setStatusFilter = createAction(SETSTATUSFILTER);
