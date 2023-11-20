import React, { useEffect, useState } from "react";
import Image from "next/image";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import NavButton from "../NavButton";

export function TemplateCard({
  btnID,
  title,
  callBack ,
  activeButton,
}: {
  btnID: string;
  title : string;
  callBack : (value : string) => void
  activeButton : string;
}) {
  const visibility = React.useContext(VisibilityContext);

  const visible = visibility.isItemVisible(btnID);
  const [screenWidth, setScreenWidth] = useState<number>(0);
  useEffect(() => {
    const updateScreenWidth = () => {

      const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      setScreenWidth(width);
    };
    updateScreenWidth();
    window.addEventListener('resize', updateScreenWidth);
    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
   
  }, []); 
  return (
    <div
      role="button"
      tabIndex={0}
      className=""
    >
     <NavButton activeBtn={activeButton} callBack={callBack} component='tempBtn'  btnID={btnID} title={title}/>
    </div>
  );
}
