import { Button } from "@/components/ui/button";
import Image from "next/image";
import sendInputIcon from "../../../public/sendInput.svg";
import { useEffect, useState } from "react";

type sendInputPropsType = {
    callBack : () => void
}

export default function SendInput(props : sendInputPropsType) {
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
        <Button variant={"defaultSendInput"} 
        size="defaultSendInput"
        onClick={()=>props.callBack()}
        >
            <Image src={sendInputIcon} alt="sendButton" width={(screenWidth < 979) && (screenWidth > 679) ? 40 : screenWidth < 679 ? 36 : 44} 
                   style={{height : (screenWidth < 979) && (screenWidth > 679) ? "40px" : screenWidth < 679 ? "36px" : "44px"}}/>
        </Button>
    )
}
