import { createSlice, nanoid } from "@reduxjs/toolkit";
import { fetchTasks, addTask, deleteTask, toggleCompleted } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  // властивість extraReducers використовується щоб оголосити редюсери для «зовнішніх» типів екшенів
  extraReducers: {
    // ----------fetchTasks------
    [fetchTasks.pending]: handlePending,
    [fetchTasks.rejected]: handleRejected,
    [fetchTasks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    // ----------ADDTASK------
    [addTask.pending]: handlePending,
    [addTask.rejected]: handleRejected,
    [addTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    // ----------deleteTask------
    [deleteTask.pending]: handlePending,
    [deleteTask.rejected]: handleRejected,
    [deleteTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex((task) => task.id === action.payload);
      state.items.splice(index, 1);
    },
    // ----------toggleCompleted------
    [toggleCompleted.pending]: handlePending,
    [toggleCompleted.rejected]: handleRejected,
    [toggleCompleted.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        (task) => task.id === action.payload.id
      );
      state.items.splice(index, 1, action.payload);
    },
  },

  // reducers: {
  //   addTask: {
  //     reducer(state, action) {
  //       state.push(action.payload);
  //     },
  //     prepare(text) {
  //       return {
  //         payload: {
  //           text,
  //           id: nanoid(),
  //           completed: false,
  //         },
  //       };
  //     },
  //   },

  //   deleteTasks(state, action) {
  //     const index = state.findIndex((task) => task.id === action.payload);
  //     state.splice(index, 1);
  //   },

  //   toggleCompleted(state, action) {
  //     for (const task of state) {
  //       if (task.id === action.payload) {
  //         task.completed = !task.completed;
  //         break;
  //       }
  //     }
  //   },
  // },
});

// export const { addTask, deleteTasks, toggleCompleted } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
