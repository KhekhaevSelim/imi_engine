import { ChangeEvent, useState } from "react"

type ThemeFieldPropsType = {
  title : string  
}

export default function ThemeField(props : ThemeFieldPropsType) {
    const [value, setValue] = useState<string>("");
    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
        if(e.target.value.length > 200){
            return
        }
        setValue(e.target.value)
    }
    return (
        <div className="w-full h-[90px] flex flex-col justify-between mb-[24px]">
            <div className="w-full flex justify-between">
                <span 
                    className="font-TTNormsMedium text-[16px] leading-[19px] text-template-item-text-default-lite 
                               dark:text-template-item-text-dark">
                                На какую тему {props.title}?*
                </span>
                <span className="font-InterRegular text-[12px] leading-[19px] text-[#98A2B3] dark:text-[#667085]">
                    {value.length}/200
                </span>
            </div>
            <input placeholder="Напишите название темы"
                   value={value}
                   onChange={(e)=>handleChange(e)}
                   type="text" 
                   className="w-full h-[65px] px-[14px] py-[12px] bg-bg-lite dark:bg-bg-dark rounded-[12px] 
                   placeholder:font-TTNormsRegular font-InterMedium text-[16px] leading-[19px] text-[#101828] dark:text-[#F5F5F6]
                                          focus:border-[2px] focus:border-template-item-text-active-lite outline-none 
                                          focus:shadow-tempGenerateInput"
            />
        </div>
    )
}