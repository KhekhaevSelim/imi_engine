import avatar from "../../../../public/Avatar.png";
import Image from "next/image";
import Icon from "@/app/components/Icon";
import { useState } from "react";
import NavButton from "@/app/components/NavButton";
import { Button } from "@/components/ui/button";

type MyMessagePropsType = {
    title : string
}

export default function MyMessage(props : MyMessagePropsType) {
    const [editMessage, setEditMessage] = useState<boolean>(false);
    
    const openEditMode = () => {
        setEditMessage(true)
    }
    const closeEditMode = () => {
        setEditMessage(false)
    }
    return (
        <div className={`flex items-center  w-full h-auto min-h-["56px"] rounded-[20px] p-[12px] pr-[6px] mb-[8px]`}>
            <div className="flex flex-col w-full h-full">
                <div className="w-full flex h-full">
                    <div className="w-full flex items-center h-full">
                        <div className="w-[30px] h-full mr-[12px] flex items-start">
                            <Image src={avatar} width={30} height={30} alt="avatarIMI" className=""/>
                        </div>
                        {
                            editMessage ?
                            <input type="text"
                                    value={props.title}  
                                   className="w-full flex items-center bg-[#fff] dark:bg-[#21242C] font-TTNormsRegular text-[14px] leading-[20px] text-heading-text-lite 
                                            dark:text-heading-text-dark mr-[12px] relative top-[-2px]"/>
                            :
                            <span className=" w-full flex items-center font-TTNormsRegular text-[14px] leading-[20px] text-heading-text-lite dark:text-heading-text-dark mr-[12px]">
                            {props.title}
                            </span>
                        }
                       
                    </div> 
                    {
                        editMessage ?
                        ""
                        :
                        <div className="w-[48px] h-full flex items-start pl-[16px]">
                            <div className="w-[32px] h-[32px] flex items-center justify-center relative bottom-[2px]" onClick={()=>openEditMode()}>
                                <Icon icon="edit" />
                            </div>
                        </div>
                    }     
                    
                </div>
                {
                editMessage && 
                <div className="ml-[40px] h-[40px] flex justify-between w-[279px]">
                    <Button variant={"sendEditMessage"} 
                            size="sendEditMessage"
                            onClick={()=>{}}
                            >
                            <span>Сохранить и отправить</span>
                    </Button>
                    <Button variant={"cancelEditMessage"} 
                            size="cancelEditMessage"
                            onClick={()=>closeEditMode()}
                            >
                            <span>Отмена</span>
                    </Button>
                </div>
                }
                
            </div>
        </div>
    )
}