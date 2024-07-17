import { TOAST_VARIANTS } from './Toast.tsx';

type UseToastProps = {
    type: TOAST_VARIANTS;
    message: string;
};
declare const useToast: () => {
    toast: (item: UseToastProps) => void;
    toastList: import("react/jsx-runtime").JSX.Element;
};
export type { UseToastProps };
export default useToast;
