"use client"


import NavButton from "@/app/components/NavButton"
import SearchTempInput from "./SearchTempInput"
import Templates from "./Templates"
import TemplateCardSocial from "./TemplateCardSocial"
import TemplateCardCommercial from "./TemplateCardCommercial"
import { useTheme } from "next-themes"
import TemplateCardArticle from "./TemplateCardArticle"


export default function SideBar() {
    const {theme} = useTheme();
    return (
        <div className="w-[506px] h-full flex flex-col pt-[16px]">
            <div className="pr-[24px]">
                <SearchTempInput callBack={()=>alert("s")} placeholder='Найти текстовый шаблон'/>
            </div>
           <Templates/>
           <div className="w-[99%] flex flex-col pr-[13px] overflow-y-auto" 
                id={theme === "light" ? "sideBarScrollContainerLight" : "sideBarScrollContainerDark"}>
                <div className="flex w-full justify-between mb-[8px]">
                    <NavButton component="TempBtnInTempsPage" icon="favorite" callBack={()=>{}} title="Избранные шаблоны"/>
                    <NavButton component="TempBtnInTempsPage" icon="document" callBack={()=>{}} title="Мои документы"/>
                </div>
                <TemplateCardSocial/>
                <TemplateCardCommercial/>
                <TemplateCardArticle/>
           </div>
        </div>
    )
}