import { TemplateSelect, TemplateSelectContent, TemplateSelectGroup, TemplateSelectItem, TemplateSelectLabel, TemplateSelectTrigger, TemplateSelectValue } from "@/components/ui/templateSelect";
import { ChangeEvent, useState } from "react"
import ru from "../../../../../public/ruLang.svg";
import Image from "next/image";
type SelectsFieldPropsType = {

}

export default function SelectsField(props : SelectsFieldPropsType) {
    const [value, setValue] = useState<string>("");
    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    return (
        <div className="w-full h-[69px] flex justify-between">
            <div className="w-[312px] h-[69px] flex flex-col justify-between">
                <span 
                    className="font-TTNormsMedium text-[16px] leading-[19px] text-template-item-text-default-lite 
                            dark:text-template-item-text-dark ">
                            Выбор тона
                </span>
                    <TemplateSelect>
                        <TemplateSelectTrigger className="w-[312px] h-[44px] rounded-[12px] font-TTNormsMedium text-[16px] leading-[19px] text-heading-text-lite
                                 dark:text-heading-text-dark">
                            <TemplateSelectValue placeholder="без тона"/>
                        </TemplateSelectTrigger>
                        <TemplateSelectContent className="">
                            <TemplateSelectGroup>
                                <TemplateSelectItem value="1">1</TemplateSelectItem>
                                <TemplateSelectItem value="2">2</TemplateSelectItem>
                                <TemplateSelectItem value="3">3</TemplateSelectItem>
                                <TemplateSelectItem value="4">4</TemplateSelectItem>
                                <TemplateSelectItem value="5">5</TemplateSelectItem>
                            </TemplateSelectGroup>
                        </TemplateSelectContent>
    
                    </TemplateSelect>
        
                
            </div>
            <div className="w-[120px] h-[69px] flex flex-col justify-between">
                <span 
                    className="font-TTNormsMedium text-[16px] leading-[19px] text-template-item-text-default-lite 
                            dark:text-template-item-text-dark ">
                            Язык
                </span>
                    <TemplateSelect>
                        <TemplateSelectTrigger className="w-[120px] h-[44px] rounded-[12px] font-TTNormsMedium text-[16px] leading-[19px] 
                                            text-heading-text-lite dark:text-heading-text-dark">
                            <TemplateSelectValue />
                        </TemplateSelectTrigger>
                        <TemplateSelectContent>
                            <TemplateSelectGroup>
                                <TemplateSelectItem value="RU" style={{display : "flex"}}>
                                    <div className="flex items-center">
                                    <Image src={ru} width={20} height={20} alt="ru" className="mr-[8px]"/> <span>RU</span>
                                    </div>
                                    </TemplateSelectItem>
                                <TemplateSelectItem value="EN">EN</TemplateSelectItem>
                            </TemplateSelectGroup>
                        </TemplateSelectContent>
    
                    </TemplateSelect>
            </div>
            
        </div>
    )
}