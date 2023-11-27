import FixedInputChat from "./FixedInputChat";
import ChatHeading from "./ChatHeading";
import AiMessage from "./AiMessage";
import MyMessage from "./MyMessage";
import ChatDynamicWindow from "./ChatDynamicWindow";


type ChatSectionPropsType = {
    currentRoleId : string
}

export default function ChatSection(props : ChatSectionPropsType ){
    
    return (
        <div className='w-full h-full flex flex-col justify-between items-center flex-grow rounded-[16px] bg-[#fff] dark:bg-[#21242C] z-[20] mb-[12px]'>
            <div className="w-full h-full flex flex-col ">
                <ChatHeading currentRoleId={props.currentRoleId}/>
                <div className="w-full flex flex-grow px-[24px] pr-[8px] py-[16px]">
                    <ChatDynamicWindow/>
                </div>
            </div>
            <FixedInputChat/>
        </div>
    )
}