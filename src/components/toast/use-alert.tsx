import { ReactNode, useState } from "react";
import Alert from "./alert";

export default function useAlert() {
  const [list, setList] = useState<ReactNode[]>([]);

  const toast = (message: string) => {
    setList([...list, message]);

    setTimeout(() => {
      setList(list.slice(1));
    }, 5000);
  };

  const AlertList = (
    <div>
      {list.map((message, index) => (
        <Alert key={index}>{message}</Alert>
      ))}
    </div>
  );

  return { toast, AlertList };
}
