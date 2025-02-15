import { PropsWithChildren, ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Position, getPosition, getArrowPosition } from "./position";
import styled from "styled-components";

export function Tooltip({
  children,
  content,
  underline = false,
  position = "top",
  ...props
}: PropsWithChildren<TooltipProps>) {
  const [isOpen, setOpen] = useState(false);

  return (
    <TooltipWrapper
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      underline={underline}
    >
      <AnimatePresence>
        {isOpen && (
          <TooltipElement
            {...props}
            position={position}
            style={getPosition(position)}
            initial={{
              opacity: 0,
              transform:
                (getPosition(position)?.transform || "") + " scale(.95)"
            }}
            animate={{
              opacity: 1,
              transform: (getPosition(position)?.transform || "") + " scale(1)"
            }}
            exit={{
              opacity: 0,
              transform:
                (getPosition(position)?.transform || "") + " scale(.95)"
            }}
            transition={{ duration: 0.23, ease: "easeInOut" }}
          >
            {content}
          </TooltipElement>
        )}
      </AnimatePresence>
      {children}
    </TooltipWrapper>
  );
}

export interface TooltipProps {
  content: ReactNode;
  position?: Position;
  underline?: boolean;
}

const TooltipWrapper = styled.div<{ underline?: boolean }>`
  position: relative;
  display: inline-flex;
  ${(props) =>
    props.underline
      ? "border-bottom: 1px dotted rgb(" + props.theme.cardBorder + ");"
      : ""}
  ${(props) => (props.underline ? "cursor: pointer;" : "")}
`;

const TooltipElement = styled(motion.div)<{ position: Position }>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  gap: 0px 10px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  background-color: ${(props) => props.theme.backgroundSecondary};
  z-index: 100;
  width: max-content;
  min-width: 109px;
  line-height: 19px;

  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.14);

  &::after {
    position: absolute;
    content: "";
    border: 7.5px solid;
    pointer-events: none;
    border-color: ${(props) =>
        props.position.startsWith("top")
          ? props.theme.backgroundSecondary
          : "transparent"}
      ${(props) =>
        props.position.startsWith("right")
          ? props.theme.backgroundSecondary
          : "transparent"}
      ${(props) =>
        props.position.startsWith("bottom")
          ? props.theme.backgroundSecondary
          : "transparent"}
      ${(props) =>
        props.position.startsWith("left")
          ? props.theme.backgroundSecondary
          : "transparent"};
    ${(props) => getArrowPosition(props.position)}
  }
`;
