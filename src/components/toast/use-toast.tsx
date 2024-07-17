import { useState } from "react";
import { Toast, TOAST_VARIANTS } from "./Toast.tsx";

type UseToastProps = {
  type: TOAST_VARIANTS;
  message: string;
};

const useToast = () => {
  const [list, setList] = useState<UseToastProps[]>([]);

  const toast = (item: UseToastProps) => {
    setList((prevList) => [item, ...prevList]);

    setTimeout(() => {
      setList((prevList) => prevList.slice(0, prevList.length - 1));
    }, 5000);
  };

  const toastList = (
    <div className={"toast-bottom-right"}>
      {list.map((item, index) => (
        <Toast type={item.type} key={index}>
          {item.message}
        </Toast>
      ))}
    </div>
  );

  return { toast, toastList };
};

export type { UseToastProps };

export default useToast;
