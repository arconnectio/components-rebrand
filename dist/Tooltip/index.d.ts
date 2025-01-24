import { PropsWithChildren, ReactNode } from "react";
import { Position } from "./position";
export declare function Tooltip({ children, content, underline, position, ...props }: PropsWithChildren<TooltipProps>): JSX.Element;
export interface TooltipProps {
    content: ReactNode;
    position?: Position;
    underline?: boolean;
}
