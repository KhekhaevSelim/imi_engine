"use client"
import Icon from "@/app/components/Icon";
import NavButton from "@/app/components/NavButton";
import { useState } from "react";

export default function Heading() {
    let [activeBtn, setActiveBtn] = useState<string>("gpt3");
    const chooseActiveButton = (id: string) => {
        setActiveBtn(id);
      };
    return (
        <div className="w-full h-[68px] flex justify-between items-center py-[12px] px-[24px]">
            <div className="flex items-center">
                <NavButton callBack={()=>alert("a")} component="back" icon="back"/>
                <span className="font-NeueMachinaBold text-[24px] leading-[32px] text-heading-text-lite dark:text-heading-text-dark mr-[4px]">Новый документ</span>
                <Icon icon="edit" callBack={()=>{}}/>
            </div>

            <div className="flex items-center">
                <div className="w-[150px] h-[44px] rounded-[13px] bg-[#DAE3E9] dark:bg-[#000000] p-[4px] flex items-center justify-between mr-[16px]">
                    <NavButton callBack={chooseActiveButton} component="llmBtn" btnID="gpt3" title="GPT 3.5" activeBtn={activeBtn}/>
                    <NavButton callBack={chooseActiveButton} component="llmBtn" btnID="gpt4" title="GPT 4" activeBtn={activeBtn}/> 
                </div>
                <div className="w-[88px] flex justify-between items-center">
                    <NavButton callBack={()=>{}} component="chatHeadingBtn" icon="downloadChat"/>
                    <NavButton callBack={()=>{}} component="chatHeadingBtn" icon="settingsChat"/>
                </div>
                
                
            </div>
        </div>
    )
}