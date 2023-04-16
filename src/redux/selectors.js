import { statusFilters } from "./constants";
import { createSelector } from "@reduxjs/toolkit";

export const selectTasks = (state) => state.tasks.items;

export const selectIsLoading = (state) => state.tasks.isLoading;

export const selectError = (state) => state.tasks.error;

export const selectStatusFilters = (state) => state.filters.status;

// використовуємо функцію !!!createSelector!!! для мемонізації селекторів, щоб
// зберегти виконання функції для запобігання повторним обчисленням!
export const selectTaskCount = createSelector([selectTasks], (tasks) => {
  console.log("Calculating task count");

  return tasks.reduce(
    (count, task) => {
      if (task.completed) {
        count.completed += 1;
      } else {
        count.active += 1;
      }
      return count;
    },
    { active: 0, completed: 0 }
  );
});

// Обчислюємо масив завдань, які необхідно відображати в інтерфейсі
export const selectVisibleTasks = createSelector(
  [selectTasks, selectStatusFilters],

  (tasks, statusFilter) => {
    switch (statusFilter) {
      case statusFilters.active:
        return tasks.filter((task) => !task.completed);

      case statusFilters.completed:
        return tasks.filter((task) => task.completed);

      default:
        return tasks;
    }
  }
);
