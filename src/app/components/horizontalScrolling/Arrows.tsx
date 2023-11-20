import React from "react";

import { VisibilityContext } from "react-horizontal-scrolling-menu";
import Icon from "../Icon";
import NavButton from "../NavButton";

function Arrow({
  children,
  disabled,
  onClick
}: {
  children: React.ReactNode;
  disabled?: boolean;
  onClick: VoidFunction;
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        right: "1%",
        opacity: disabled ? "0" : "1",
        userSelect: "none"
      }}
    >
      {children}
    </button>
  );
}

export function LeftArrowChatBot() {
  const {
    isFirstItemVisible,
    scrollPrev,
    visibleElements,
    initComplete
  } = React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !initComplete || (initComplete && isFirstItemVisible)
  );
  React.useEffect(() => {
    if (visibleElements.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleElements]);

  return (
    <Arrow onClick={() => scrollPrev()}>
      <Icon icon='arrow-l-60' isActive={!disabled}/>
    </Arrow>
  );
}

export function RightArrowChatBot() {
  const { isLastItemVisible, scrollNext, visibleElements } = React.useContext(
    VisibilityContext
  );

  const [disabled, setDisabled] = React.useState(
    !visibleElements.length && isLastItemVisible
  );
  React.useEffect(() => {
    if (visibleElements.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleElements]);

  return (
    <Arrow onClick={() => scrollNext()}>
      <Icon icon='arrow-r-60' isActive={!disabled}/>
    </Arrow>
  );
}

export function CustomArrowChatBot() {
  return (
    <div className="xl:w-[60px] h-[147px] flex flex-col xl:ml-[14px] lg:ml-[11px] bg-bg-lite dark:bg-bg-dark justify-between relative xl:right-[2px] lg:right-[0px] md:hidden">
        <LeftArrowChatBot />
        <RightArrowChatBot/>
    </div>
  )
}

export function RightArrowTemplates() {
    const { isLastItemVisible, scrollNext, visibleElements } = React.useContext(
        VisibilityContext
      );
    
      const [disabled, setDisabled] = React.useState(
        !visibleElements.length && isLastItemVisible
      );
      React.useEffect(() => {
        if (visibleElements.length) {
          setDisabled(isLastItemVisible);
        }
      }, [isLastItemVisible, visibleElements]);
    
      return (
        <div className="md:hidden">
            <Arrow disabled={disabled} onClick={() => scrollNext()}>
                <NavButton callBack={()=>{}} component="arrow-r-20" icon="arrow-r-20" />   
            </Arrow>
        </div>
      );
}

export function LeftArrowTemplates() {
    const {
        isFirstItemVisible,
        scrollPrev,
        visibleElements,
        initComplete
      } = React.useContext(VisibilityContext);
    
      const [disabled, setDisabled] = React.useState(
        !initComplete || (initComplete && isFirstItemVisible)
      );
      React.useEffect(() => {
        if (visibleElements.length) {
          setDisabled(isFirstItemVisible);
        }
      }, [isFirstItemVisible, visibleElements]);
    
      return (
        <div className="md:hidden">
            <Arrow disabled={disabled} onClick={() => scrollPrev()}>
                <NavButton callBack={()=>{}} component="arrow-l-20" icon="arrow-l-20" />   
            </Arrow>
        </div>
        
      );
}