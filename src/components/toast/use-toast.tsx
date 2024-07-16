import { ReactNode, useState } from "react";
import Toast, { TOAST_VARIANTS } from "./Toast.tsx";

type ToastItem = {
  type: TOAST_VARIANTS;
  message: ReactNode;
};

export default function useToast() {
  const [list, setList] = useState<ToastItem[]>([]);

  const toast = (item: ToastItem) => {
    setList((prevList) => [item, ...prevList]);

    setTimeout(() => {
      setList((prevList) => prevList.slice(0, prevList.length - 1));
    }, 5000);
  };

  const toastList = (
    <div className={"absolute bottom-0 right-0"}>
      {list.map((item, index) => (
        <Toast type={item.type} key={index}>
          {item.message}
        </Toast>
      ))}
    </div>
  );

  return { toast, toastList };
}
