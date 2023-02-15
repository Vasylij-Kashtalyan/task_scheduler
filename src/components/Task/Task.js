import { MdClose } from "react-icons/md";
import css from "./Task.module.css";
import { useDispatch } from "react-redux";
import { deleteTasks, toggleCompleted } from "../../redux/actions";

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handlerDeleteTask = () => dispatch(deleteTasks(task.id));
  const handlerToggleTask = () => dispatch(toggleCompleted(task.id));

  return (
    <div className={css.wrapper}>
      <input
        onChange={handlerToggleTask}
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button onClick={handlerDeleteTask} className={css.btn}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
