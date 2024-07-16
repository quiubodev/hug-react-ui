import Toast, { ToastProps } from "../Toast";
import "../../../index.css";

const ToastMock = ({ type, children }: ToastProps) => {
  return <Toast type={type}>{children}</Toast>;
};

export default ToastMock;
