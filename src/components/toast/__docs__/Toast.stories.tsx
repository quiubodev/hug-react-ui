import type { Meta, StoryObj } from "@storybook/react";
import ToastMock from "./ToastMock";
import { useToast } from "../index";
import { TOAST_VARIANTS } from "../Toast";

const meta: Meta<typeof ToastMock> = {
  title: "Toast",
  component: ToastMock,
};

export default meta;

type Story = StoryObj<typeof ToastMock>;

export const Success: Story = {
  args: {
    type: TOAST_VARIANTS.success,
    message: "Alerta con informacion de exito",
  },
};

export const Info: Story = {
  args: {
    type: TOAST_VARIANTS.info,
    message: "Alerta con informacion importante",
  },
};

export const Danger: Story = {
  args: {
    type: TOAST_VARIANTS.danger,
    message: "Alerta con informacion de un error",
  },
};

export const Warning: Story = {
  args: {
    type: TOAST_VARIANTS.warning,
    message: "Alerta con informacion de advertencia",
  },
};

const ToastListExample = () => {
  const { toast, toastList } = useToast();

  return (
    <>
      <div className={"flex flex-row gap-2"}>
        <button
          onClick={() =>
            toast({
              type: TOAST_VARIANTS.success,
              message: "Acciones ejecutada correctamente",
            })
          }
          className={
            "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          }
        >
          Success
        </button>
        <button
          onClick={() =>
            toast({
              type: TOAST_VARIANTS.info,
              message: "Informacion importante.",
            })
          }
          className={
            "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          }
        >
          Info
        </button>
        <button
          onClick={() =>
            toast({
              type: TOAST_VARIANTS.warning,
              message: "Verifique la informacion ingresada",
            })
          }
          className={
            "bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          }
        >
          Error
        </button>
        <button
          onClick={() =>
            toast({
              type: TOAST_VARIANTS.danger,
              message: "No fue posible procesar su solicitud",
            })
          }
          className={
            "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          }
        >
          Error
        </button>
      </div>
      {toastList}
    </>
  );
};

export const UseHook: Story = {
  render: () => <ToastListExample />,
};
