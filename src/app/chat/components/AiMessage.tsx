import Image from "next/image";
import avatarIMI from "../../../../public/avatarIMI.svg";
import Icon from "@/app/components/Icon";

type AiMessagePropsType = {
    title : string
}
export default function AiMessage(props : AiMessagePropsType) {
    return (
        <div className="flex items-center justify-between w-full h-auto min-h-[56px] bg-[#F4F7FA] dark:bg-[#17181C] rounded-[20px] p-[12px] pr-[6px] mb-[8px]">
            <div className="w-full flex items-center h-full">
                <div className="w-[30px] h-full mr-[12px] flex items-start">
                    <Image src={avatarIMI} width={30} height={30} alt="avatarIMI" className=""/>
                </div>
                
                <span className=" w-full font-TTNormsRegular text-[14px] leading-[20px] text-heading-text-lite dark:text-heading-text-dark mr-[12px]">
               {props.title}
                </span>
            </div>
        
            <div className="w-[144px] h-full flex items-start pl-[16px]">
                <div className="w-[32px] h-[32px] flex items-center justify-center cursor-pointer">
                    <Icon icon="playMessage" />
                </div>
                <div className="w-[32px] h-[32px] flex items-center justify-center cursor-pointer">
                    <Icon icon="refreshMessage" />
                </div>
                <div className="w-[32px] h-[32px] flex items-center justify-center cursor-pointer">
                    <Icon icon="copyMessage" />
                </div>
                <div className="w-[32px] h-[32px] flex items-center justify-center cursor-pointer">
                    <Icon icon="settingsMessage" />
                </div>
            </div>
        </div>
    )
}