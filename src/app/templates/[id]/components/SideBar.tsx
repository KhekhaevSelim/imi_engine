"use client"


import { useTheme } from "next-themes"
import { FakeItemType } from "../page";
import { useState } from "react";
import SideBarHeading from "./SideBarHeading";
import ThemeField from "./ThemeField";
import KeyWordsField from "./KeyWordsField";
import LengthField from "./LengthField";
import SelectsField from "./SelectsField";
import SideBarFooter from "./SideBarFooter";

 type SideBarPropsType = {
    data : FakeItemType
    isFavoriteTemp : boolean
    isActiveSubPage : string
    chooseFavoriteTemp : () => void
    chooseActiveSubPage : (activeSubPage : string) => void
}

export default function SideBar(props : SideBarPropsType) {
    const {theme} = useTheme();
    return (
        <div className="w-[500px] h-full flex flex-col rounded-[20px] bg-[#FFFFFF] dark:bg-[#21242C] mr-[6px]">
            <SideBarHeading 
                chooseActiveSubPage={props.chooseActiveSubPage}
                chooseFavoriteTemp={props.chooseFavoriteTemp}
                data={props.data}
                isActiveSubPage={props.isActiveSubPage}
                isFavoriteTemp={props.isFavoriteTemp}
                />
            <div className="w-full flex flex-col justify-start flex-grow px-[24px] py-[32px]">
                <ThemeField title={props.data.title}/>
                <KeyWordsField/>
                <LengthField/>
                <SelectsField/>
            </div>
            <SideBarFooter/>
        </div>
    )
}