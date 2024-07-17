import { default as React } from 'react';

declare enum TOAST_VARIANTS {
    success = "success",
    danger = "danger",
    warning = "warning",
    info = "info"
}
type ToastProps = {
    type: TOAST_VARIANTS;
    children: React.ReactNode;
};
declare const Toast: ({ type, children }: ToastProps) => import("react/jsx-runtime").JSX.Element;
export { TOAST_VARIANTS, Toast };
export type { ToastProps };
