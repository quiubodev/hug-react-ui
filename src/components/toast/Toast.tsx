import React from "react";
import classNames from "classnames";
import { FaCircleXmark } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";
import { FaTriangleExclamation } from "react-icons/fa6";
import { FaCircleInfo } from "react-icons/fa6";

export enum TOAST_VARIANTS {
  success = "success",
  danger = "danger",
  warning = "warning",
  info = "info",
}

export type ToastProps = {
  type: TOAST_VARIANTS;
  children: React.ReactNode;
};

export default function Toast({
  type = TOAST_VARIANTS.success,
  children,
}: ToastProps) {
  const classVariant = {
    success: "bg-green-300 text-green-900",
    danger: "bg-red-100 text-red-900",
    warning: "bg-yellow-100 text-yellow-900",
    info: "bg-blue-100 text-blue-900",
  };

  return (
    <div
      role={"alert"}
      aria-live={"assertive"}
      className={classNames(
        "p-4 shadow max-w-lg rounded-md m-2 flex gap-2 items-center",
        classVariant[type],
      )}
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
}
