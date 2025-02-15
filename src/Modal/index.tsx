import { AnimatePresence, motion } from "framer-motion";
import { PropsWithChildren, ReactNode } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import { XClose } from "@untitled-ui/icons-react";

export function Modal({
  children,
  open,
  setOpen,
  actions,
  root,
  showCloseIcon = false
}: PropsWithChildren<ModalProps>) {
  return ReactDOM.createPortal(
    <AnimatePresence>
      {open && (
        <ModalWrapper onClick={() => setOpen(false)}>
          <ModalCard onClick={(e) => e.stopPropagation()}>
            {showCloseIcon && <ModalCloseIcon onClick={() => setOpen(false)} />}
            <ModalContent>{children}</ModalContent>
            {actions && <ModalActions>{actions}</ModalActions>}
          </ModalCard>
        </ModalWrapper>
      )}
    </AnimatePresence>,
    root || (document.getElementById("root") as any)
  );
}

const ModalWrapper = styled(motion.div).attrs({
  variants: {
    open: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.2
      }
    },
    closed: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.2
      }
    }
  },
  initial: "closed",
  animate: "open",
  exit: "closed"
})`
  position: fixed;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 11000;
  background-color: rgba(19, 19, 19, 0.5);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  max-height: 100%;
  overflow-y: auto;
  padding: 2rem 0;
`;

const ModalCard = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.surfaceSecondaryPopup};
  border: 1px solid ${(props) => props.theme.borderDefault};
  border-radius: 10px;
  width: 300px;
  margin: auto;
  padding: 32px;
  box-sizing: border-box;
  gap: 16px;
`;

const ModalContent = styled.div`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: ${(props) => props.theme.primaryText};
  line-height: 25px;
  align-self: stretch;
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  gap: 10px;
`;

const ModalCloseIcon = styled(XClose)`
  position: absolute;
  top: 16px;
  right: 16px;
  height: 24px;
  width: 24px;
  cursor: pointer;
  color: ${(props) => props.theme.tertiaryText};

  &:hover {
    color: ${(props) => props.theme.secondaryText};
  }

  &:active {
    color: ${(props) => props.theme.secondaryText};
    transform: scale(0.9);
  }
`;

interface ModalProps {
  open: boolean;
  setOpen: (open: boolean) => any;
  actions?: ReactNode;
  root?: Element | DocumentFragment;
  showCloseIcon?: boolean;
}
