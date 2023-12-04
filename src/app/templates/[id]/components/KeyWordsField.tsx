import Icon from "@/app/components/Icon";
import { ChangeEvent, useState } from "react"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip";
import Image from "next/image";
import question from "../../../../../public/questionMark.svg";


type KeyWordsFieldPropsType = {

}

export default function KeyWordsField(props : KeyWordsFieldPropsType) {
    const [value, setValue] = useState<string>("");
    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
        if(e.target.value.length > 200){
            return
        }
        setValue(e.target.value)
    }
    return (
        <div className="w-full h-[69px] flex flex-col justify-between mb-[24px]">
            <div className="w-full flex justify-between">
                <span 
                    className="font-TTNormsMedium text-[16px] leading-[19px] text-template-item-text-default-lite 
                               dark:text-template-item-text-dark">
                                Ключевые слова
                </span>
                <span className="font-InterRegular text-[12px] leading-[19px] text-[#98A2B3] dark:text-[#667085]">
                    {value.length}/200
                </span>
            </div>
            <div className="w-full h-[44px] relative">
                <input 
                    placeholder="Введите ключевые слова статьи"
                    value={value}
                    onChange={(e)=>handleChange(e)}
                    type="text" 
                    className="w-full h-[44px] px-[14px] py-[12px] pr-[30px] bg-bg-lite dark:bg-bg-dark rounded-[12px] 
                                            placeholder:font-TTNormsRegular font-InterMedium text-[16px] leading-[19px] text-[#101828] dark:text-[#F5F5F6]
                                            focus:border-[2px] focus:border-template-item-text-active-lite outline-none 
                                            focus:shadow-tempGenerateInput"
                    
                />
                <div className="w-[16px] absolute right-[12px] top-[14px]">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                            <span className="w-[20px] block absolute left-0"><Image src={question} alt="question" width={16} height={16}/></span>
                            </TooltipTrigger>
                            <TooltipContent>
                            <p>Подсказка</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
                
            </div>
            
        </div>
    )
}