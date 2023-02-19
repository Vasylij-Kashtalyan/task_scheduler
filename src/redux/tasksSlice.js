import { createSlice, nanoid } from "@reduxjs/toolkit";

const tasksInitialState = [
  { id: 0, text: "Learn HTML and CSS", completed: true },
  { id: 1, text: "Get good at JavaScript", completed: true },
  { id: 2, text: "Master React", completed: true },
  { id: 3, text: "Discover Redux", completed: true },
  { id: 4, text: "Discover Redux Toolkit", completed: false },
  { id: 5, text: "Find job", completed: false },
  { id: 6, text: "Build amazing apps", completed: false },
  { id: 7, text: "Become expert", completed: false },
];

const tasksSlice = createSlice({
  name: "tasks",
  initialState: tasksInitialState,

  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
            completed: false,
          },
        };
      },
    },

    deleteTasks(state, action) {
      const index = state.findIndex((task) => task.id === action.payload);
      state.splice(index, 1);
    },

    toggleCompleted(state, action) {
      for (const task of state) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
          break;
        }
      }
    },
  },
});

export const { addTask, deleteTasks, toggleCompleted } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
