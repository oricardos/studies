import { ITask } from "../../../types/tasks";
import style from "../List.module.scss";

interface Props extends ITask {
  selectTask: (selectedTask: ITask) => void;
}

export const Item = ({
  task,
  time,
  selected,
  completed,
  id,
  selectTask,
}: Props) => {
  return (
    <li
      className={style.item}
      onClick={() =>
        selectTask({
          task,
          time,
          selected,
          completed,
          id,
        })
      }
    >
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  );
};
