import { default as React } from 'react';

export declare enum TOAST_VARIANTS {
    success = "success",
    danger = "danger",
    warning = "warning",
    info = "info"
}
export type ToastProps = {
    type: TOAST_VARIANTS;
    children: React.ReactNode;
};
export declare function Toast({ type, children }: ToastProps): import("react/jsx-runtime").JSX.Element;
