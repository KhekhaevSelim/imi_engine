import React, { useEffect, useState } from "react";
import Image from "next/image";
import { VisibilityContext } from "react-horizontal-scrolling-menu";

export function ChatBotCard({
  itemId,
  src,
  mrFull,
}: {
  itemId: string;
  mrFull : string;
  src :string;
}) {
  const visibility = React.useContext(VisibilityContext);

  const visible = visibility.isItemVisible(itemId);
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
      style={{
        display: "inline-block",
        userSelect: "none",
        height : (screenWidth < 980) && (screenWidth > 549) ? "132px" : screenWidth < 549 ? "120px" : "150px",
        width : (screenWidth < 980) && (screenWidth > 549) ? "110px" : screenWidth < 549 ? "100px" : "124px"
      }}
      tabIndex={0}
      className={`ml-[6px] mr-[${mrFull}] cursor-pointer md:mx-[4px]`}
    >
     <Image src={src} alt="chatbotimage" style={{height : (screenWidth < 980) && (screenWidth > 549) ? "132px" : screenWidth < 549 ? "120px" : "150px",
            width : (screenWidth < 980) && (screenWidth > 549) ? "110px" : screenWidth < 549 ? "100px" : "124px"}}  
            draggable={false}/>
    </div>
  );
}
