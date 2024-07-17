import { TOAST_VARIANTS } from './Toast.tsx';

export type UseToastProps = {
    type: TOAST_VARIANTS;
    message: string;
};
export default function useToast(): {
    toast: (item: UseToastProps) => void;
    toastList: import("react/jsx-runtime").JSX.Element;
};
