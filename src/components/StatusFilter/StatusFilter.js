import css from "./StatusFilter.module.css";
import { Button } from "../Button/Button";
import { statusFilters } from "../../redux/constants";
import { selectStatusFilters } from "../../redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import { setStatusFilter } from "../../redux/filtersSlice";

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilters);

  const handlerFilterChange = (filter) => dispatch(setStatusFilter(filter));
  return (
    <div className={css.wrapper}>
      <Button
        onClick={() => handlerFilterChange(statusFilters.all)}
        selected={filter === statusFilters.all}
      >
        All
      </Button>
      <Button
        onClick={() => handlerFilterChange(statusFilters.active)}
        selected={filter === statusFilters.active}
      >
        Active
      </Button>
      <Button
        onClick={() => handlerFilterChange(statusFilters.completed)}
        selected={filter === statusFilters.completed}
      >
        Completed
      </Button>
    </div>
  );
};
