import React from "react";
import classNames from "classnames";
import { FaCircleXmark } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";
import { FaTriangleExclamation } from "react-icons/fa6";
import { FaCircleInfo } from "react-icons/fa6";

enum TOAST_VARIANTS {
  success = "success",
  danger = "danger",
  warning = "warning",
  info = "info",
}

type ToastProps = {
  type: TOAST_VARIANTS;
  children: React.ReactNode;
};

const Toast = ({ type = TOAST_VARIANTS.success, children }: ToastProps) => {
  const classVariant = {
    success: "toast-success",
    danger: "toast-danger",
    warning: "toast-warning",
    info: "toast-info",
  };

  return (
    <div
      role={"alert"}
      aria-live={"assertive"}
      className={classNames("toast", classVariant[type])}
    >
      <span className={"text-2xl"}>
        {type === TOAST_VARIANTS.success ? <FaCircleCheck /> : null}
        {type === TOAST_VARIANTS.danger ? <FaCircleXmark /> : null}
        {type === TOAST_VARIANTS.warning ? <FaTriangleExclamation /> : null}
        {type === TOAST_VARIANTS.info ? <FaCircleInfo /> : null}
      </span>
      {children}
    </div>
  );
};

export { TOAST_VARIANTS, Toast };
export type { ToastProps };
