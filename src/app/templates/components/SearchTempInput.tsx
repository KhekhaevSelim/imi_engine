"use client"

import { ChangeEvent, useState } from "react"
import Icon from "../../components/Icon"

type InputPropsType = {
    placeholder : string
    callBack : (value : string) => void
}

export default function Input(props : InputPropsType) {
    const [value, setValue] = useState<string>("");

    const handlehange = (e : ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    
    const search = (e : React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter") props.callBack(value)
    }

    return (
        <div className="xl:w-full xl:h-[44px] relative flex">
            <input type="text" value={value} onKeyDown={(e)=>search(e)} onChange={(e)=>handlehange(e)} 
            className="w-full h-[44px] dark:text-[#85888E] font-InterRegular focus:border-none rounded-[16px] bg-search-template-input-bg-lite 
                     dark:bg-search-template-input-bg-dark px-[14px] py-[12px] xl:text-[16px] lg:text-[14px] md:text-[12px]" 
            placeholder={props.placeholder}/>
            <Icon icon="search" callBack={()=>props.callBack(value)}/>
        </div>
    )
}