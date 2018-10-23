import { connect } from "react-redux";
import { Dispatch } from "redux";
import { addTask, removeTask } from "../../store/task/actions";
import { ITaskState } from "../../store/task/types";
import { ITask } from "../../store/task/types";
import { AppBehaviour } from "./AppBehaviour";

export interface IMapProps {
  taskList: ITask[];
}
export interface IDispatchProps {
  addTask: (task: ITask) => void;
  removeTask: (payload: string) => void;
}

const mapStateToProps = (state: ITaskState): IMapProps => ({
  taskList: state.taskList,
});

const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => ({
  addTask: (payload: ITask) => dispatch(addTask(payload)),
  removeTask: (payload: string) => dispatch(removeTask(payload))
});

export const AppConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppBehaviour);