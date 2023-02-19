// import { combineReducers } from "redux";
import { statusFilters } from "./constants";
import {
  addTask,
  deleteTasks,
  toggleCompleted,
  setStatusFilter,
} from "./actions";
import { createReducer } from "@reduxjs/toolkit";

// =============================TASKS==================================
const initialStateTasks = [
  { id: 0, text: "Learn HTML and CSS", completed: true },
  { id: 1, text: "Get good at JavaScript", completed: true },
  { id: 2, text: "Master React", completed: true },
  { id: 3, text: "Discover Redux", completed: false },
  { id: 4, text: "Build amazing apps", completed: false },
  { id: 5, text: "Find job!!!", completed: false },
];
export const tasksReducer = createReducer(initialStateTasks, {
  [addTask]: (state, action) => {
    // return [...state, action.payload];
    state.push(action.payload);
  },

  [deleteTasks]: (state, action) => {
    // return state.filter((task) => task.id !== action.payload);
    const index = state.findIndex((task) => task.id === action.payload);
    state.splice(index, 1);
  },

  [toggleCompleted]: (state, action) => {
    // return state.map((task) => {
    //   if (task.id !== action.payload) {
    //     return task;
    //   }
    //   return { ...task, completed: !task.completed };
    // });
    for (const task of state) {
      if (task.id === action.payload) {
        task.completed = !task.completed;
        break;
      }
    }
  },
});

// =============================FILTERS==================================
const initialStateFilters = {
  status: statusFilters.all,
};

export const filtersReducer = createReducer(initialStateFilters, {
  [setStatusFilter]: (state, action) => {
    // return { ...state, status: action.payload };
    state.status = action.payload;
  },
});

// export const tasksReducer = (state = initialStateTasks, action) => {
//   switch (action.type) {
//     case addTask.type:
//       return [...state, action.payload];

//     case deleteTasks.type:
//       return state.filter((task) => task.id !== action.payload);

//     case toggleCompleted.type:
//       return state.map((task) => {
//         if (task.id !== action.payload) {
//           return task;
//         }
//         return { ...task, completed: !task.completed };
//       });

//     default:
//       return state;
//   }
// };

// export const filtersReducer = (state = initialStateFilters, action) => {
//   switch (action.type) {
//     case setStatusFilter.type:
//       return {
//         ...state,
//         status: action.payload,
//       };

//     default:
//       return state;
//   }
// };

// корневий редюсер за допомогою функції combineReducers();
// export const rootReducer = combineReducers({
//   tasks: tasksReducer,
//   filters: filtersReducer,
// });

// корневий редюсер
// export const rootReducer = (state = {}, action) => {
//   return {
//     tasks: tasksReducer(state.tasks, action),
//     fiters: filtersReducer(state.fiters, action),
//   };
// };
