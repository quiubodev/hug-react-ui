import { Toast } from "../Toast";
import "../../../index.css";
import { UseToastProps } from "../use-toast";

const ToastMock = ({ type, message }: UseToastProps) => {
  return <Toast type={type}>{message}</Toast>;
};

export default ToastMock;
