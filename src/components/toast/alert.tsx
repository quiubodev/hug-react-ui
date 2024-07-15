import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdOutlineSmsFailed } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

type AlertProps = {
  variant?: "success" | "danger" | "warning";
  children: React.ReactNode;
};

export default function Alert({ variant = "success", children }: AlertProps) {
  const classVariant = {
    success:
      "p-4 shadow inline-block max-w-lg bg-green-300 text-green-900 rounded-md m-2",
    danger: "bg-red-100 border-red-400 text-red-700",
    warning: "bg-yellow-100 border-yellow-400 text-yellow-700",
    info: "bg-blue-100 border-blue-400 text-blue-700",
  };

  return (
    <div className={classVariant[variant] + " flex gap-2 items-center"}>
      <span className={"text-2xl"}>
        {variant === "success" ? <AiOutlineCheckCircle /> : null}
        {variant === "danger" ? <MdOutlineSmsFailed /> : null}
        {variant === "warning" ? <RxCross2 /> : null}
      </span>
      {children}
    </div>
  );
}
