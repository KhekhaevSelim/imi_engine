"use client"
import Image, { StaticImageData } from "next/image";


export type chatBotMiniItemPropsType = {
    src : StaticImageData
    title : string
    callBack : (role : string) => void
    id : string
}

export default function chatBotMiniItem(props : chatBotMiniItemPropsType) {

    return (
        <div className="w-[248px] h-[38px] flex items-center py-[4px] px-[8px] mt-[8px] cursor-pointer z-20" onClick={()=>props.callBack(props.id)}>
            <Image src={props.src} alt="chatBotMiniImage" width={30} height={30} className="mr-[8px]"/>
            <span className="text-[#475467] dark:text-[#94969C]
                            font-TTNormsRegular text-[16px] leading-[19px]">
                                {props.title}
            </span>
        </div>
    )
}