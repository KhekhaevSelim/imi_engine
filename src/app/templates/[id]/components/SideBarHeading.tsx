"use client"

import Icon from "@/app/components/Icon";
import NavButton from "@/app/components/NavButton";
import Image from "next/image";
import { FakeItemType } from "../page";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import question from "../../../../../public/questionMark.svg";

type SideBarHeadingPropsType = {
    data : FakeItemType
    isFavoriteTemp : boolean
    isActiveSubPage : string
    chooseFavoriteTemp : () => void
    chooseActiveSubPage : (activeSubPage : string) => void
}

export default function SideBarHeading(props : SideBarHeadingPropsType) {
    return (
        <div className="w-full h-[100px] border-b-[2px] border-b-bg-lite dark:border-b-bg-dark px-[24px] pt-[20px] flex flex-col">
            <div className="w-full h-full flex flex-col justify-between">
                <div className="w-[452px] h-[32px] flex items-center justify-between">
                    <div className="flex items-center">
                        <Image src={props.data.src} alt="icon" width={24} height={24} className="mr-[16px]"/>
                        <span className="font-InterBold text-[18px] leading-[28px] text-heading-text-lite dark:text-heading-text-dark mr-[8px]">{props.data.title}</span>
                        <div className="w-[16px]">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                    <span className="w-[20px] block"><Image src={question} alt="question" width={16} height={16}/></span>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                    <p>Подсказка</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <button className="mr-[20px]">
                            <Icon icon="favoriteTemp" isActive={props.isFavoriteTemp} callBack={props.chooseFavoriteTemp}/>
                        </button>
                        <button className="mr-[20px] pt-[2px]">
                            <Icon icon="reloadTemp"/>
                        </button>
                        <button className="pt-[2px]">
                            <Icon icon="closeTemp"/>
                        </button>
                        
                    </div>
                </div>
                <div className="w-[172px] h-[32px] flex justify-between items-start">
                    <NavButton component="tempSubPageBtn" title="Генерация" activeBtn={props.isActiveSubPage} callBack={()=>props.chooseActiveSubPage("generation")} btnID="generation"/>
                    <NavButton component="tempSubPageBtn" title="Результаты" activeBtn={props.isActiveSubPage} callBack={()=>props.chooseActiveSubPage("results")} btnID="results"/>
                </div>
            </div>
    </div>
    )
}