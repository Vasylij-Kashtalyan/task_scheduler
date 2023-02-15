import { statusFilters } from "./constants";
import { combineReducers } from "redux";

const initialStateTasks = [
  { id: 0, text: "Learn HTML and CSS", completed: true },
  { id: 1, text: "Get good at JavaScript", completed: true },
  { id: 2, text: "Master React", completed: true },
  { id: 3, text: "Discover Redux", completed: false },
  { id: 4, text: "Build amazing apps", completed: false },
  { id: 5, text: "Find job!!!", completed: false },
];

const initialStateFilters = {
  status: statusFilters.all,
};

const tasksReducer = (state = initialStateTasks, action) => {
  switch (action.type) {
    case "tasks/addTask":
      return [...state, action.payload];

    case "tasks/deleteTask":
      return state.filter((task) => task.id !== action.payload);

    case "tasks/toggleCompleted":
      return state.map((task) => {
        if (task.id !== action.payload) {
          return task;
        }
        return { ...task, completed: !task.completed };
      });

    default:
      return state;
  }
};

const filtersReducer = (state = initialStateFilters, action) => {
  switch (action.type) {
    case "filters/setStatusFilter":
      return {
        ...state,
        status: action.payload,
      };

    default:
      return state;
  }
};

// корневий редюсер за допомогою функції combineReducers();
export const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});

// корневий редюсер
// export const rootReducer = (state = {}, action) => {
//   return {
//     tasks: tasksReducer(state.tasks, action),
//     fiters: filtersReducer(state.fiters, action),
//   };
// };
