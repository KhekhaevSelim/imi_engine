import FixedInputChat from "./FixedInputChat";
import ChatHeading from "./ChatHeading";
import AiMessage from "./AiMessage";
import MyMessage from "./MyMessage";
import ChatDynamicWindow from "./ChatDynamicWindow";


type ChatSectionPropsType = {
    currentRoleId : string
    callBack : () => void
    hideAside : boolean
}

export default function ChatSection(props : ChatSectionPropsType ){
    const paddingX = props.hideAside ? "px-[220px]" : "px-[0px]";
    console.log(paddingX)
    return (
        <div className="w-full h-[99%] flex flex-col justify-between items-center flex-grow rounded-[16px] bg-[#fff] dark:bg-[#21242C] z-[20] mb-[12px]">
            <div className={`w-full h-full flex flex-col ${paddingX}`}>
                <ChatHeading currentRoleId={props.currentRoleId} callBack={props.callBack}/>
                <div className="w-full flex flex-grow px-[24px] pr-[8px] py-[16px]">
                    <ChatDynamicWindow/>
                </div>
            </div>
            <FixedInputChat/>
        </div>
    )
}