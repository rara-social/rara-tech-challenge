import React, { useState, useContext } from "react";

// Dialog componets & css
import { DialogOverlay, DialogContent } from "@reach/dialog";
import { useTransition, animated, config } from "react-spring";
import "@reach/dialog/styles.css";
import "css/dialog.css";

const AnimatedDialogOverlay = animated(DialogOverlay);
const AnimatedDialogContent = animated(DialogContent);
function Modal({ children, open, onClose }) {
  const transitions = useTransition(open, null, {
    from: {
      opacity: 0,
      transform: "translateY(-40px)",
    },
    enter: {
      opacity: 1,
      transform: "translateY(0)",
    },
    leave: {
      opacity: 0,
      transform: "translateY(-40px)",
    },
    config: config.gentle,
  });

  return (
    <>
      {transitions.map(
        ({ item, props, key }) =>
          item && (
            <AnimatedDialogOverlay
              key={key}
              style={{
                opacity: props.opacity,
                zIndex: "1000",
              }}
              onDismiss={onClose}
            >
              <AnimatedDialogContent style={props} aria-label="rara wallet">
                {children}
              </AnimatedDialogContent>
            </AnimatedDialogOverlay>
          )
      )}
    </>
  );
}

export default Modal;
